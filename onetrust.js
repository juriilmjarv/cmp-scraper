import pptr from 'puppeteer';
import PQueue from 'p-queue';
import mongoose from 'mongoose';
import CookieDB from './models/consent_data.js';
import DbConnectionString from './config.js';
import top100 from './topSites/finalData/top100.js';
import top200 from './topSites/finalData/top200.js';
import top500 from './topSites/finalData/top500.js';
/*
Check if page is using OneTrust cookie Consent forms
If detected, extract consent block data
*/

//Promise queue to scrape multiple pages simultaneously
const queue = new PQueue({
    concurrency: 5
});

(
    async () => {
        try {
            let instance = pptr.launch({
                headless: false,
                defaultViewport: null,
            });

            //Database connection string
            const DB_URL = DbConnectionString;

            //Establish DB connection
            if (mongoose.connection.readyState == 0) {
                mongoose.connect(DB_URL)
                    .then( () => {
                        console.log('Connected to database ')
                    })
                    .catch( (err) => {
                        console.error(`Error connecting to the database. \n${err}`);
                    });
            }

            // task processor function
            const createInstance = async (url) => {
                let real_instance = await instance;  // await here
                let page = await real_instance.newPage();
                await page.goto(url, { waitUntil: 'networkidle0' });
                await page.waitForTimeout(2000);
                await autoScroll(page);

                //Check if using oneTrust at all
                const isOneTrust = await page.evaluate(() => {
                    var usingOnetrust = document.querySelector('div[id="onetrust-consent-sdk"]');
                    if(usingOnetrust){
                        return true;
                    } else {
                        return false;
                    }
                });

                let htmlBlock = 'none';
                let rejectBtnStyles = 'none';
                let cookieSettingsBtnStyles = 'none';
                let acceptBtnStyles = 'none';
                let preCheckedBoxes = [];

                if(isOneTrust){

                    //get html data
                    htmlBlock = await page.evaluate(() => {
                        var querySelector = document.querySelectorAll('div.ot-sdk-container');
                        if(querySelector.length > 1){
                            for(var i=0; i<querySelector.length; i++){
                                if(querySelector[i].classList.value === "ot-sdk-container"){
                                    return querySelector[i].outerHTML;
                                }
                            }
                        } else {
                            return querySelector[0].outerHTML;
                        }
                    });

                    //rejectBtn
                    rejectBtnStyles = await page.evaluate(() => {
                        let el = document.querySelector('button[id="onetrust-reject-all-handler"]')
                        if (el) {
                            return getComputedStyle(el).getPropertyValue('background-color');
                        } else {
                            return 'none';
                        }
                    });

                    //get cookie settings button color
                    cookieSettingsBtnStyles = await page.evaluate(() => {
                        let el = document.querySelector('button[id="onetrust-pc-btn-handler"]')
                        if (el) {
                            return getComputedStyle(el).getPropertyValue('background-color');
                        } else {
                            return 'none';
                        }
                    });

                    //get accept button color
                    acceptBtnStyles = await page.evaluate(() => {
                        let el = document.querySelector('button[id="onetrust-accept-btn-handler"]')
                        if (el) {
                            return getComputedStyle(el).getPropertyValue('background-color');
                        } else {
                            return 'none';
                        }
                    });

                    //click on cookie settings button
                    await page.click('button[id="onetrust-pc-btn-handler"]');
                    await page.waitForTimeout(2000);

                    //Start looking if consent form has any pre-checked boxes
                    const sections = await page.$$('input.category-switch-handler');

                    if(sections) {
                        for(let i=0; i<sections.length; i++) {
                            let isPreChecked = await page.evaluate((i) => {
                                let querySelector = document.querySelectorAll('input.category-switch-handler');
                                let activeGroup = querySelector[i].parentElement.parentElement.classList.contains('ot-always-active-group');
                                let alwaysActiveDiv = Array.from(querySelector[i].parentElement.parentElement.childNodes).find((node) => node.className === 'ot-always-active') ? true : false;
                                if(querySelector[i].ariaChecked === 'true' && activeGroup == false && alwaysActiveDiv == false){
                                    return true;
                                } else {
                                    return false;
                                }
                            }, i);
                            preCheckedBoxes.push(isPreChecked);
                        }
                    }
                }

                //insert or update DB records
                if(isOneTrust){
                    upsertDb({
                        url: url,
                        html: htmlBlock,
                        acceptBtn: acceptBtnStyles,
                        rejectBtn: rejectBtnStyles,
                        cookieBtn: cookieSettingsBtnStyles,
                        preChecked: preCheckedBoxes.includes(true),
                    });
                }
                //INSERT INTO DB?
                //console.log('URL: ', url);
                 //console.log('AcceptBtn: ', acceptBtnStyles);
                 //console.log('RejectBtn: ', rejectBtnStyles);
                 //console.log('CookieBtn: ', cookieSettingsBtnStyles);
                // console.log('HTML Block: ', htmlBlock);
                //console.log('pre: ', preCheckedBoxes.includes(true));

                //Check if all tasks done
                if (queue.size === 0 && queue.pending === 1) {
                    console.log('Done!');
                    await page.close();
                    await real_instance.close();
                    mongoose.connection.close().then(console.log('Connection closed!'));
                } else {
                    console.log('Scraping...');
                    return await page.close();
                }
            }

            let urls = [
                "https://spotify.com",
                "https://adobe.com",
                "https://natwest.com",
                "https://discord.com",
            ];

            // add tasks to queue
            for (let url of top500) {
                queue.add(async () => createInstance(url));
            }

        } catch(err) {
            console.log("page not using onetrust");
            console.error(err);
        }
    }
)()

function upsertDb(userObj) {

    // if this email exists, update the entry, don't insert
    const conditions = { url: userObj.url };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    CookieDB.findOneAndUpdate(conditions, userObj, options, (err, result) => {
        if (err) {
        throw err;
        }
    });
}

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}
  
