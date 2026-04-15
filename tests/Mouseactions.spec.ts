//1. Mouse Hover – hover()

//Purpose:
//To simulate a mouse hover over an element (useful for revealing dropdowns or tooltips).
 
//Syntax:

//await page.locator('selector').hover();
 
//Example:
 
//await page.locator('#menu').hover();

test ("Mouse Hover", async ({page}) =>
{
	await page.goto('https://testautomationpractice.blogspot.com/')
	const pointmebtn:Locator= await page.getByText(‘Point Me’);
	await pointmebtn.hover();
	await page.waitForTimeout (5000);

	const laptopoption=page.locator(‘.dropdown-content a:nth-child(2)’);
  
// (Dropdown locator with tagname and element in the dropdown)
	await laptopoption.hover();
	await page.waitForTimeout (5000);
});
