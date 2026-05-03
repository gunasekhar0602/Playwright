/* 
3 ways to create trace file(.zip)

1) using playwright.config.ts
2) using command

npx playwright test mytest.spec.ts --trace on

3) code(programmitically)

To view trace file (3 ways)
1) from html file ---> click on trace.zip
2) through command - npx playwright show-trace trace.zip
3) utility ---> https://trace.playwright.dev/ (drag and drop/upload trace.zip.file)
*/







import { test, expect } from '@playwright/test';

test('Tracing test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').click();
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[text()='Log in']").click();
    await page.waitForTimeout(5000)
    await page.locator("//a[@id='logout2']").click();
});




test.only('Tracing test in local', async ({ page,context}) => {
    
    context.tracing.start({screenshots:true,snapshots:true});
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').click();
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[text()='Log in']").click();
    await page.waitForTimeout(5000)
    await page.locator("//a[@id='logout2']").click();

    context.tracing.stop({path:'trace.zip'});
});