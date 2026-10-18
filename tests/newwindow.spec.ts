import{test,expect} from "@playwright/test"

test('new window',async({browser})=>
{
    const context=await browser.newContext();

    // page always pointing to parent page
    const page=await context.newPage();

    await page.goto('https://sdetqa.vercel.app/autoplay');

    // whenver we are clicking on new tab a new page is opening it is like an event
    // we need to capture it from context

    // we can capture the new Tab. newTab is variable. [newTab] ---> square brackets are syntax
    // some times if we click on newtab button it will open multiple tabs
           // so we are mentioning [newwindow] for array. It is Page type
    const[newwindow]=await Promise.all(
        [
            context.waitForEvent('page'), 
                page.locator('#window').click()
        ]
    )

    // these two are returning promise so we can keep them in Promise.all
    // here context is waiting for page event
    // await context.waitForEvent('page')

    // clicking on new tab button.
    //await page.locator('button',{hasText:'New Tab'}).click()

    await page.waitForTimeout(5000);

    console.log(await newwindow.title())
    await expect(newwindow).toHaveTitle(/Playwright/);
    await expect(newwindow).toHaveURL(/playwright.dev/);


    // closing the context
    await context.close();

})



