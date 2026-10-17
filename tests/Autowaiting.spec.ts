import {test,expect,Locator} from '@playwright/test'

test("Autowaiting test",async({page})=>
{
    //test.setTimeout(50000)
    // 50000 m.sec will be followed. The one which we mentioned in test.config will be overriden

    test.slow()   // makes test slow (90 sec)    // default is 30 sec

    await page.goto('https://demowebshop.tricentis.com/');
    
    // assertions
    // assertions auto wait time - 5 seconds
    await expect (page).toHaveURL('https://demowebshop.tricentis.com/',{timeout:5000});
    await expect (page.locator('text=welcome to our store')).toBeVisible({timeout:5000});

    // Actions - Auto wait works
    await page.locator('#small-searchterms').fill("Laptop");
    await page.locator('//input[@type="submit"]').click();
    

    // if we mention {force:true} in the action method
    // Forcefully performing the action
    // with out performing the actionable checks it will perform the action
    await page.locator('#small-searchterms').fill("Laptop",{force:true});
    await page.locator('//input[@type="submit"]').click({force:true});
})