import puppeteer from 'puppeteer';

(async function main() {
  try {
    const browser = await puppeteer.launch({headless: false, defaultViewport: null});
    const page = await browser.newPage();

    await page.goto('https://cloudflare.com/', { waitUntil: 'networkidle0' });

    //get html data
    const data = await page.evaluate(() => {
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

    //get reject button color
    const rejectBtnStyles = await page.evaluate(() => {
        let el = document.querySelector('button[id="onetrust-reject-all-handler"]')
        if (el) {
            return getComputedStyle(el).getPropertyValue('background-color');
        } else {
            return 'none';
        }
    });

    //get cookie settings button color
    const cookieSettingsBtnStyles = await page.evaluate(() => {
        let el = document.querySelector('button[id="onetrust-pc-btn-handler"]')
        if (el) {
            return getComputedStyle(el).getPropertyValue('background-color');
        } else {
            return 'none';
        }
    });

    //get accept button color
    const acceptBtnStyles = await page.evaluate(() => {
        let el = document.querySelector('button[id="onetrust-accept-btn-handler"]')
        if (el) {
            return getComputedStyle(el).getPropertyValue('background-color');
        } else {
            return 'none';
        }
    });

    await page.click('button[id="onetrust-pc-btn-handler"]');
    await page.waitForTimeout(2000);

    const preCheckedBoxes = await page.evaluate(() => {
        let querySelector = document.querySelectorAll('input.category-switch-handler');
        if (querySelector.length) {
            let arr = [];
            for(var i=0; i<querySelector.length; i++){
                //let attribs = querySelector[i].outerHTML
                //console.log(attribs);
                //arr.push(querySelector[i].outerHTML)
                return i;
                // for(var j=0; j<attribs.length; j++){
                //     return attribs[j];
                // }
                    
                //return querySelector[i].attributes;
            }
        } else {
            return 'none';
        }
    });

    console.log("Reject Button: ", rejectBtnStyles);
    console.log("Cookie settings: ", cookieSettingsBtnStyles);
    console.log("Accept Button: ", acceptBtnStyles);
    console.log("pre: ", preCheckedBoxes);

    console.log("DATA: ", data);
    await page.screenshot({path: 'screenshot.png'});

    await browser.close();
  } catch (err) {
    console.error(err);
  }
})();