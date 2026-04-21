import{test,expect,Locator} from'@playwright/test'

test.only('Dropdown',async({page})=>
{
// Navigate to page
    await page.goto('https://testautomationpractice.blogspot.com/');

// By visible text
    await page.locator('//select[@id="country"]').selectOption('India');
    await page.waitForTimeout(5000);

// By value attribute
    await page.locator('//select[@id="country"]').selectOption({value:'usa'});
    await page.waitForTimeout(5000);

// By index
    await page.locator('//select[@id="country"]').selectOption({index:6});
    await page.waitForTimeout(5000);

// By label
    await page.locator('//select[@id="country"]').selectOption({label:'France'});
    await page.waitForTimeout(5000);
})



test.only('Multidropdown',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Selecting multiple values in multidropdown
    await page.locator('#colors').selectOption(["Red","Green","Blue"]);

    // count of options
    const options:Locator=page.locator('#country>option');
    await expect(options).toHaveCount(10);
    
    // Verifying whether particular option is present in the dropdown
    const optionstext:string[]=(await page.locator("#country>option").allTextContents()).map(text=>text.trim());
    expect(optionstext).toContain('Japan');
    
    // Printing all the options in dropdown
    const texts:string[]=await page.locator('#country>option').allTextContents();
    for(const optext of texts)
    {
        console.log(optext);
    }
})