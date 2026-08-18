import{test,expect} from"@playwright/test"

test.only('flipkart Bootstrap dropdown', async({page})=>
{
    await page.goto("https://www.flipkart.com/");

    await page.locator("//span[@class='b3wTlE']").click();
    await page.locator("(//input[@class='nw1UBF v1zwn25'])[1]").fill("Iphone");

  // we will be getting multiple items after seach the item in the search bar, it is not possible to capture the elements location.
  // execute control shift P, a tab will be opened mention emulate a focused page. So that we can location the elements now.

  // After getting the required details, then mention do not emulate a focused page.
    await page.waitForTimeout(3000)

  // this xpath locator will cover all the multiple elements and here we are clicking the first item
    await page.locator("//ul[@class='VCplLH lTpUwR bRjjIF _1psv1ze5l _1psv1ze9l _1psv1ze7c _1cisqlf2']").first().click();

    await page.waitForTimeout(3000);
    
    await page.pause();
})
