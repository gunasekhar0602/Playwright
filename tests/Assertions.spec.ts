import {test,expect,Locator} from'@playwright/test'

test (" Auto retrying Assertions",async ({page})=>
{
   await page.goto('https://demowebshop.tricentis.com/');

   // 1) Auto retry assertion (automatically retries until it passes OR timeout)
   await expect (page).toHaveURL("https://demowebshop.tricentis.com/")

   // 2) Auto retry assertion (waits for element to be visible and have the expect text)
   await expect(page.locator('text=Welcome to our store')).toBeVisible();

})



test("Non-Auto retrying Assertions",async ({page})=>
{
   await page.goto('https://demowebshop.tricentis.com/');

   // 1) Non Auto retry assertion (executes immediately, no retry)
   const title=await page.title();
   expect(title.includes('Demo Web Shop')).toBeTruthy();

   const welcometext=await page.locator('text=Welcome to our store').textContent();
   expect(welcometext).toContain('Welcome');      // Non auto retry

   // 2) Negating matcher
   await expect(page.locator('text=Welcome to our store')).not.toBeVisible(); // auto retry
   expect(welcometext).not.toContain('Welcome');      // Non auto retry

})



test.only('soft assetions',async({page})=>
{
   await page.goto('https://demowebshop.tricentis.com/');

   // Even the assertion is failed to will execute next step
   const title=await page.title();
   expect.soft(title.includes('playwright')).toBeTruthy();
   console.log(title);

   // Even the assertion is failed to will execute next step
   const welcometext=await page.locator('text=Welcome to our store').textContent();
   expect.soft(welcometext).toContain('1');     

   await expect(page.locator('text=Welcome to our store')).toBeVisible(); // auto retry
   expect(welcometext).toContain('Welcome');
})