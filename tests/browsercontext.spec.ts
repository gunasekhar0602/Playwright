import {test,expect,chromium} from "@playwright/test"

test('browser settings',async()=>
{
    // browser ---> Context ---> page


    // Creating a browser
    const browser=await chromium.launch({headless:false}); // runs in headed mode
    //const browser=await chromium.launch({headless:true}); // runs in headless mode

    // creating Context
    const context= await browser.newContext(
        {
            // This will adjust the page size for this particular test
            viewport:{width:800,height:800},
/* If we mention this in the config file under define config and under use section means 
it will apply globally.If both viewports are different means it will take viewport mention in test */

            // Language
            locale:'en-US',

            // ServerIP and Port number
            // It will connect to proxy and trigger the URL
            //proxy:{server:'http://myproxy.com:3245'}

            // SSL certificate manager
            ignoreHTTPSErrors:true

        }
    );

    // Creating page
    const page=await context.newPage();
    await page.goto('https://expired.badssl.com/');

    const title=await page.title()
    console.log("title of the page: ",title)
    await page.waitForTimeout(7000);
})