// input box

import{test,expect,Locator} from'@playwright/test'

test('inputbox',async({page})=>
{
    // Navigate to page
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Capturing a web element
    const nametextbox:Locator=page.getByPlaceholder('Enter Name')

    // Making assertion
    await expect(nametextbox).toBeVisible()

    // Filling the details in text box element
    await nametextbox.fill('Dhoni')
    
    // Filling details to the text box elements
    await page.getByPlaceholder('Enter Email').fill('Dhoni@gmail.com');
    await page.getByPlaceholder('Enter Phone').fill('9876543210');
    await page.locator('//textarea[@id="textarea"]').fill('India');
    await page.waitForTimeout(5000)

})
