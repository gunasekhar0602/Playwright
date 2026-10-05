import {test,expect,chromium} from "@playwright/test"

test('browser cookie settings',async()=>
{
    // Creating a browser
    const browser=await chromium.launch({headless:false}); // runs in headed mode

    // creating Context
    const context= await browser.newContext();

    // creating page
    const page=await context.newPage();
    
    // Navigate to page
    await page.goto("https://playwright.dev");

    // By using context we can add cookies 
    // addCookies is method in which we can add cookies to the browser
    // Before launching the browser we need to work with cookies
    // In the form of array we need to add cookies
    // we have added the cookies at context level

    context.addCookies([
        {
            name:"Username",
            value:"Guna",
            domain:"Playwright",
            path:'/',
            secure:true,
            sameSite:'Lax'
        },
        {
            name:'auth_token',
            value:'xyz123secret',
            url:'https://example.com'     // another cookie
        }
    ])
    console.log("Cookies added ...");


    // Get the details of cookies. // context.cookies() - Returns all the cookies
    // allcookies is a varaible to capture the cookies
    const allcookies=await context.cookies();
    console.log("cookies ===>",allcookies);


    // Clearing cookies from browser
    // clearCookies()   - will clear all the cookies
    await context.clearCookies();

    // after clearing the cookies we need to get the cookies Or capture the cookies which will be empty
    const afterclearingallcookies=await context.cookies();
    console.log("number of cookies after clearing: ", afterclearingallcookies.length);

    expect(afterclearingallcookies.length).toBe(0);
    await page.waitForTimeout(5000);
    
})



/* 
Test 1:
Open browser -> Login -> save cookies


Test 2:
open browser -> Load Cookies -> Verify automatic login
*/

// fs - Node.js File System module
import fs from 'fs';

const cookiefile='./storage-data/cookies.data.json';
const appurl='https://sdetqa.vercel.app/login_app'
// create a folder storage-data to store the cookie details
test('login and save cookies', async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto(appurl);

    // login
    await page.locator('#username').fill("admin")
    await page.locator('#password').fill("admin123")
    await page.locator("//input[@value='cookie']").check()
    await page.locator("//button[@type='submit']").click()

    expect(page.getByText('Dashboard')).toBeVisible()

    // Get all the cookies
    const cookies=await context.cookies()

    // writeFileSync () - Write data to a file synchronously
    // writeFileSync will take three parameters - cookiefile, cookies, JSON.stringify
    // We need to change the JSON object to JSON string, so we use stringify
    // null includes all object properties, don't leave even single property
    // 2 is intendation
    // cookiefile - File path where cookies saved
    // cookies - JavaScript object/array containing cookies data

    fs.writeFileSync(cookiefile,JSON.stringify(cookies,null,2))

    console.log('Cookies saved successfully')

})


test.only("login with save cookies", async({browser})=>
{
    const context=await browser.newContext()

    // JSON.parse will change the text data into JSON data
    const savedcookies=JSON.parse(fs.readFileSync(cookiefile,'utf8'));

    context.addCookies(savedcookies)

    const page=await context.newPage();

    await page.goto(appurl);
    expect(page.getByText('Dashboard')).toBeVisible()
    
})


