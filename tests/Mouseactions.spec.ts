//1. Mouse Hover – hover()

//Purpose:To simulate a mouse hover over an element (useful for revealing dropdowns or tooltips).
 
//Syntax:await page.locator('selector').hover();
 
//Example:await page.locator('#menu').hover();

test ("Mouse Hover", async ({page}) =>
{
	await page.goto('https://testautomationpractice.blogspot.com/');
    // after capturing the element,we have to hover on the element
	const pointmebtn:Locator= await page.getByText(‘Point Me’);
	await pointmebtn.hover();
	await page.waitForTimeout (5000);

	const laptopoption=page.locator(‘.dropdown-content a:nth-child(2)’);
  
// (Dropdown locator with tagname and element in the dropdown)
	await laptopoption.hover();
	await page.waitForTimeout (5000);
});



//2. Right Click – click({ button: 'right' })
 
//Purpose: To simulate a right-click on an element.
 
//Syntax: await page.locator('selector').click({ button: 'right' });
 
//Example: await page.locator('#file-icon').click({ button: 'right' });

test("Right click", async ({page}) =>
{
page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
const button: Locator=await page. locator('span. context-menu-one');
await button click({button: 'right'});
// This will perform the right click action

await page. waitForTimeout (5000);

});





//3.Double Click – dblclick()
 
//Purpose:To simulate a double-click on an element.
 
//Syntax: await page.locator('selector').dblclick();
 
//Example:await page.locator('#editable-text').dblclick();
 
 
test ("Double click", async ({page})=>
{
	await page, goto('https://testautomationpractice.blogspot.com/');
	const doubleclick: Locator=page.getByText("Copy Text');
// performs double click
    await doubleclick.dblclick();

    const field2: Locator=page.locator('#field2');
	await expect (field2). toHaveValue("Hello World!");
	await page.waitForTimeout(5000);
});




//4. Drag and Drop – dragTo()
 
//Purpose:To drag an element and drop it to another target.
 
//Syntax:await page.locator('source-selector').dragTo(page.locator('target-selector'));

test. only("Drag and drop", async ({page}) =>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const intialele: Locator=page. locator ("div#draggable");
    const targetele: Locator=page.locator ('div #droppable');

// Here we need to find the source element and target element

//approach 1) - mouse hover and drag manually
    await intialele.hover();
    await page. mouse. down (); 
    await targetele.hover(); 
    await page.mouse.up();

    await page.waitForTimeout(5000);

// approach 2)- drag and drop method
    await intialele.drágTo(targetele);
    await page.waitForTimeout(5000)

})
 
//Example:
 
    const source = page.locator('#drag-item');
    const target = page.locator('#drop-zone');
    await source.dragTo(target);
 
 







