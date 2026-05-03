import{test,expect}from'@playwright/test'

test("Hardvssoftassertions",async({page})=>
{
    await page.goto('https://demowebshop.tricentis.com/');

    // Hard assertions

    /* await expect(page).toHaveTitle('Demo Web shop2'); // failed
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/'); // not execute

    const logo=page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible(); */    // not execute



    // soft assertions

    await expect.soft(page).toHaveTitle('Demo Web shop2'); // failed
    await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/');   // execute

    const logo=page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect.soft(logo).toBeVisible();   // execute
})