import {test,expect,chromium} from "@playwright/test"
test('browser settings',async()=>
{
    // Creating a browser
    const browser=await chromium.launch({headless:false}); // runs in headed mode
    // creating Context
    const context= await browser.newContext();
    // creating page
    const page=await context.newPage();
    
    // By using context we can add cookies 
    // addCookies is method which all add cookies to the browser
    // Before launching the browser we need to work with cookies
    // In the form of array we need to add cookies
    context.addCookies([{name:'mycookie1',value:'12345'}])
    console.log("Cookies added ...");

    // Navigate to page
    await page.goto("https://www.automationpractice.p1/index.php");

    // Get the details of cookies. // context.cookies() - Returns all the cookies
    const allcookies=await context.cookies();
    
    // Getting specific cookie
    // i - representing index. This will read each and every element in  the allcookies

    const retrivedcookie= allcookies.find((i)=>i.name==="mycookie")
    console.log("printing cookie details: ", retrivedcookie);

    expect(retrivedcookie?.value).toBe(12345);
    expect(retrivedcookie).toBeDefined()

    // Clearing cookies from browser
    // clearCookies()   - will clear all the cookies
    await context.clearCookies();

    const afterclearingallcookies=await context.cookies();
    console.log("number of cookies after clearing: ", afterclearingallcookies.length);

    expect(afterclearingallcookies.length).toBe(0);
    await page.waitForTimeout(5000);
    
})