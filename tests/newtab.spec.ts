import{test,expect, Locator} from'@playwright/test'

/* 
Each BrowserContext can have multiple pages.
A page refers to a 'singlr tab' OR a 'popup window' within a browser context.
It should be used to navigate to URLs and interact with the page content.
*/
test('new tab',async({browser})=>
{
    const context=await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://sdetqa.vercel.app/autoplay");

    // whenver we are clicking on new tab a new page is opening it is like an event
    // we need to capture it from context

    // we can capture the new Tab. newTab is variable. [newTab] ---> square brackets are syntax
    // some times if we click on newtab button it will open multiple tabs
           // so we are mentioning [newTab] for array. It is Page type
    const [newTab]=await Promise.all([context.waitForEvent('page'),
        page.locator('button',{hasText:'New Tab'}).click()])
    

    // these two are returning promise so we can keep them in Promise.all
    // here context is waiting for page event
    // await context.waitForEvent('page')

    // clicking on new tab button.
    //await page.locator('button',{hasText:'New Tab'}).click()

    console.log(await newTab.title());
    await expect(newTab).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
    await expect(newTab).toHaveURL("https://playwright.dev/");

})