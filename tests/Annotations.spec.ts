import{test,expect} from'@playwright/test'

const url='https://playwright.dev';

test.skip('Skip test',async({page})=>
{
    await page.goto(url);
    await expect(page).toHaveTitle("/Playwright/")
})


test.fail('Failed test',async({page})=>
{
    await page.goto(url);

    // here we have provided correct url but it fails due to fail annotation
    await expect(page).toHaveURL("https://playwright.dev/")
})


test.fixme('Fixme test',async({page})=>
{
    await page.goto(url);
    await expect(page).toHaveTitle("/Playwright/")
})


test('Slow test',async({page})=>
{
    // internally we have have to mention slow()
    test.slow();   // makes test wait for 90 seconds
    await page.goto(url);
    await expect(page).toHaveURL("https://playwright.dev/")
})


test.only("Only test", async({page})=>
{
    await page.goto(url);
    await expect(page).toHaveURL("https://playwright.dev/")
})
