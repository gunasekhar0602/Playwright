// Radio button

import{test,expect,Locator}from'@playwright/test'

test('radio button',async({page})=>
{
    // Navigating to page
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Assertion on the page URL
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

    // Assertion on the radio button buttons
    const malebutton:Locator=page.locator('//input[@id="male"]')
    await expect(malebutton).toBeVisible();

    const femalebutton:Locator=page.locator('//input[@id="female"]')
    await expect(femalebutton).toBeVisible();

    // Selecting the radio button
    await malebutton.check();
    await page.waitForTimeout(5000);
})
