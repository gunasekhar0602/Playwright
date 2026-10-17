import{test,expect,Locator}from'@playwright/test'

test("Screenshot",async({page})=>
{
    await page.goto('https://demowebshop.tricentis.com/');

    // provide the path of screenshot saving folder along with screenshot name
    //({path:foldername/filename.imageformate})
    await page.screenshot({path:'screenshots/homepage.png'});
    // if we are taking same screen shot multiple times means, every time new screenshot will replaces the old screenshot

    const timestamp=Date.now();
    // Scrennshot with timestamp
    //({path:foldername/+filename+timestamp.imageformate})
    await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'});

    // Full page screenshot
    //({path:foldername/+filename+timestamp.imageformate,fullPage:true})
    await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png',fullPage:true});

    // logo screenshot
    //({path:foldername/+filename+timestamp.imageformate})
    const logo= page.locator('//img[@alt="Tricentis Demo Web Shop"]')
    await logo.screenshot({path:'screenshots/'+'logo'+timestamp+'.png'})
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