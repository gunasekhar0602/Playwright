import {test,expect,Locator} from'@playwright/test'

test ("Assertions",async ({page})=>
{
   await page.goto('https://demowebshop.tricentis.com/');

   // 1) Auto retry assertion (automatically retries until it passes OR timeout)
   await expect (page).toHaveURL("https://demowebshop.tricentis.com/")

   // 2) Auto retry assertion (waits for element to be visible and have the expect text)
   await expect(page.locator('text=Welcome to our store')).toBeVisible();

   //3 ) Non Auto retry assertion (executes immediately, no retry)
   const title=await page.title();
   expect(title.includes('Demo Web Shop')).toBeTruthy();

   const welcometext=await page.locator('text=Welcome to our store').textContent();
   expect(welcometext).toContain('Welcome');      // Non auto retry

   // 4) Negating matcher
   await expect(page.locator('text=Welcome to our store')).not.toBeVisible(); // auto retry
   expect(welcometext).not.toContain('Welcome');      // Non auto retry


})