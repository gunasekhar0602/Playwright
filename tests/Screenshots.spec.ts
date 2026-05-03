import{test,expect,Locator}from'@playwright/test'

test("Screenshot",async({page})=>
{
    await page.goto('https://demowebshop.tricentis.com/');

    // provide the path of screenshot saving folder along with screenshot name
    await page.screenshot({path:'screenshots/homepage.png'});
    // if we are taking same screen shot multiple times means, every time new screenshot will replaces the old screenshot

    const timestamp=Date.now();
    // Scrennshot with timestamp
    await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'});

    // Full page screenshot
        await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png',fullPage:true});

    // logo screenshot
    const logo= page.locator('//img[@alt="Tricentis Demo Web Shop"]')
    await logo.screenshot({path:'screenshots/'+'logo'+timestamp+'.png'})

    // feature products screen
    const featureperoducts= page.locator('//div[@class="product-grid home-page-product-grid"]');
    await featureperoducts.screenshot({path:'screenshots/'+'featureproducts'+timestamp+'.png'});

})


test.only('Screenshots from config',async({page})=>
{
  await page.goto('https://www.demoblaze.com/index.html');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123###');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();  
})