import{test,expect,Locator}from'@playwright/test'
test('Flacky test', async ({ page,context}) => {
    
    context.tracing.start({screenshots:true,snapshots:true});
    await page.goto('https://www.demoblaze.com/index.html');

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