import{test,expect} from "@playwright/test"

test.describe('demowebshop Home Page Tests',()=>
{
    test('@p1 @regression logotest',async({page})=>
{
    await page.goto('https://demowebshop.tricentis.com/');
    await expect(page.locator("//img[@alt='Tricentis Demo Web Shop']")).toBeVisible()
});

    test('@p1 @regression title test',async({page})=>
{
    await page.goto('https://demowebshop.tricentis.com/login');
    await expect(page.locator("//img[@alt='Tricentis Demo Web Shop']")).toBeVisible()
})

    test.skip('@p3 @smoke titleskip test',async({page})=>
{
    await page.goto('https://demowebshop.tricentis.com/login');
    await expect(page.locator("//img[@alt='Tricentis Demo Web Shop']")).toBeVisible()
})

    test('@p4 @sanity titlefail test',async({page})=>
{
    await page.goto('https://demowebshop.tricentis.com/login');
    await expect(page.locator("//img[@lt='Tricentis Demo Web Shop']")).toBeVisible()
})


 test('@p4 @retest logotest',async({page})=>
{
    await page.goto('https://demowebshop.tricentis.com/');
    await expect(page.locator("//img[@alt='Tricentis Demo Web Shop']")).toBeVisible()
});

});
