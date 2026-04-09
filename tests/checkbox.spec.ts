import {test,expect,Locator} from'@playwright/test'
test('Checkbox',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // 1)selecting particular checkbox
    const sundaycheckbox=page.locator('//input[@id="monday"]')
    await sundaycheckbox.check()

// OR

   /*  await page.locator('//input[@id="monday"]').check()
    await page.waitForTimeout(5000) */

    // 2)selecting all checkboxes
    // create a array and store the checkbox labels

    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    // create another array and map it to previous array

    const checkboxes=days.map(day=>page.getByLabel(day))
   
    for(const checkbox of checkboxes)
    {
        await checkbox.check()

    }
    await page.waitForTimeout(5000)
})