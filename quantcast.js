import pptr from 'puppeteer';
import PQueue from 'p-queue';
import mongoose from 'mongoose';
import CookieDB from './models/consent_data.js';
import DbConnectionString from './config.js';
import top100 from './topSites/finalData/top100.js';
import top200 from './topSites/finalData/top200.js';
import top500 from './topSites/finalData/top500.js';
import top1000 from './topSites/finalData/top1000.js';
import top1600 from './topSites/finalData/top1600.js';
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
                //Wait for page 2 secs
                await page.waitForTimeout(2000);
                //scroll to bottom
                await autoScroll(page);

                //Check if using oneTrust at all
                const isQuantCast = await page.evaluate(() => {
                    var usingQuantCast= document.querySelector('div[id="qc-cmp2-container"]');
                    if(usingQuantCast){
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
                let isDarkPattern = false;

                if (isQuantCast) {

                    //get accept button color
                    acceptBtnStyles = await page.evaluate(() => {
                        let el = document.querySelector('button[mode="primary"]')
                        if (el) {
                            return getComputedStyle(el).getPropertyValue('background-color');
                        } else {
                            return 'none';
                        }
                    });

                    rejectBtnStyles = await page.evaluate(() => {
                        let el = document.querySelectorAll('button[mode="secondary"]')
                        if (el.length > 1) {
                            return getComputedStyle(el[0]).getPropertyValue('background-color');
                        } else {
                            return 'none';
                        }
                    });

                    cookieSettingsBtnStyles = await page.evaluate(() => {
                        let el = document.querySelectorAll('button[mode="secondary"]')
                         if (el.length >= 1) {
                            return getComputedStyle(el[0]).getPropertyValue('background-color');
                        } else {
                            return 'none';
                        }
                    });

                    if(acceptBtnStyles != cookieSettingsBtnStyles && rejectBtnStyles == 'none') {
                        isDarkPattern = true;
                    } else if (acceptBtnStyles != cookieSettingsBtnStyles && cookieSettingsBtnStyles == rejectBtnStyles) {
                        isDarkPattern = true;
                    } else {
                        isDarkPattern = false;
                    }
                }
                

                //insert or update DB records
                if(isQuantCast){
                    upsertDb({
                        url: url,
                        html: 'none',
                        darkPattern: isDarkPattern,
                        acceptBtn: acceptBtnStyles,
                        rejectBtn: rejectBtnStyles,
                        cookieBtn: cookieSettingsBtnStyles,
                        preChecked: false,
                    });
                }

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
                "https://imgur.com",
                "https://op.gg",
                "https://independent.co.uk",
                "https://ultimate-guitar.com",
                "https://mirror.co.uk",
                "https://express.co.uk",
                "https://travelerdoor.com",
                "https://dailyrecord.co.uk",
                "https://funnyjunk.com",
                "https://myjobscotland.gov.uk",
                "https://icy-veins.com",
                "https://readcomiconline.li",
                "https://nexusmods.com",
                "https://kumb.com",
                "https://officialcharts.com",
                "https://researchgate.net",
                "https://pcgamer.com",
                "https://dailystar.co.uk",
                "https://mobafire.com",
                "https://xda-developers.com",
                "https://redcafe.net",
                "https://teddyfeed.com",
                "https://warcraftlogs.com",
                "https://9gag.com",
                "https://manchestereveningnews.co.uk",
                "https://walesonline.co.uk",
                "https://hsreplay.net",
                "https://radiotimes.com",
                "https://mazystreams.xyz",
                "https://petlog.org.uk",
                "https://buzzfeed.com",
                "https://mydramalist.com",
                "https://journeyranger.com",
                "https://propertypal.com",
                "https://myanimelist.net",
                "https://nfl.com",
                "https://bristolpost.co.uk",
                "https://techradar.com",
                "https://bbcgoodfood.com",
                "https://adresowo.pl",
                "https://fantasyfootballscout.co.uk",
                "https://probuilds.net",
                "https://gamesradar.com",
                "https://comedy.co.uk",
                "https://liverpoolecho.co.uk",
                "https://soccerway.com",
                "https://timeout.com",
                "https://thestudentroom.co.uk",
                "https://dyno.gg",
                "https://birminghammail.co.uk",
                "https://50connect.co.uk",
                "https://pinknews.co.uk",
                "https://lse.co.uk",
                "https://urdupoint.com",
                "https://docjournals.com",
                "https://pistonheads.com",
                "https://mathworks.com",
                "https://gimmemore.com",
                "https://brainyquote.com",
                "https://wzstats.gg",
                "https://in.gr",
                "https://spanishdict.com",
                "https://lagged.com",
                "https://timesofmalta.com",
                "https://kentonline.co.uk"
            ];


            // add tasks to queue
            for (let url of urls) {
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