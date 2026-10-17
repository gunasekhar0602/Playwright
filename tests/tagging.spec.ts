import{test,expect} from '@playwright/test'

test("@sanity @regression Checking title of the page",async({page})=>
{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
    console.log("Sanity and regression test executed")
})

test("Checking URL of the page",{tag:'@regression'}, async({page})=>
{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveURL(/google/);
    console.log("regression test executed")
})


test("Checking google page",{tag:'@sanity'}, async({page})=>
{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveURL(/google/);
    console.log("sanity test executed")
})

test("Checking page",{tag:['@regression','@sanity']}, async({page})=>
{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveURL(/google/);
    console.log("regression and sanity test executed")
})

