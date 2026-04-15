// Scrolling
import (test, expect, Locator) from"@playwright/test"
test("Scrolling to footer", async ({page})=>
{
	await page.goto('https://demowebshop.tricentis.com/')

// Footer element - automatically scrolled before doing any action.
	const footerdisclaimenText: string=await page. locator(' footer-disclaimer'). innerText();
	console.log("Footertext caputured:", footerdisclaimerText);
})

test.only ("scrolling to inside the dropdown", async ({page})=>
{
	await page.goto('https://testautomationpractice.blogspot.com/')
	await page. locator ('input#comboBox'). click()
	await page.waitForTimeout (5000) 
	await page. locator('#dropdown divinth-child(100)'). click();
	await page.waitfortimeout(5000);
})




//Example 1: Scroll to the bottom of the page
 
await page.evaluate(() =>
{
	window.scrollTo(0, document.body.scrollHeight);
});
 
 
 
//Example 2: Get the current page height (Total scrollable height of the page)
 
const currentHeight = await page.evaluate(() =>
{
	 return document.body.scrollHeight;
 });

