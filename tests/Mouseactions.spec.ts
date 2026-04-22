//1. Mouse Hover – hover()

//Purpose:
// To simulate a mouse hover over an element (useful for revealing dropdowns or tooltips).

//Syntax:
// await page.locator('selector').hover();

//Example:
// await page.locator('#menu').hover();

import{test,expect,Locator} from'@playwright/test'
test("Mouse Hover", async ({page}) =>
{
    // Navigating to page
	await page.goto('https://testautomationpractice.blogspot.com/');

    // after capturing the element,we have to hover on the element
	const pointmebtn:Locator=page.getByText('Point Me');
	await pointmebtn.hover();
	await page.waitForTimeout(3000);

    // Locating the one of the element after hover on the element
    const laptopoption=page.locator("//div[@class='dropdown-content']//a[2]");
	//const laptopoption=page.locator('.dropdown-content a:nth-child(2)');

    // hover on Locting element
	await laptopoption.hover();
	await page.waitForTimeout (5000);
})



//2. Right Click – click({ button: 'right' })

//Purpose: 
// To simulate a right-click on an element.

//Syntax:
// await page.locator('selector').click({ button: 'right' });

//Example: 
// await page.locator('#file-icon').click({ button: 'right' });

test("Right click", async ({page}) =>
{
    // Navigate to the page
    page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    // Locating the button element
    //const rightbutton:Locator= page.locator('span.context-menu-one');
    const rightbutton1:Locator= page.locator("//span[text()='right click me']");

    // Perming right click on the element
    await rightbutton1.click({button:'right'});
    // This will perform the right click action

    await page. waitForTimeout (5000);
})





//3.Double Click – dblclick()

//Purpose:
// To simulate a double-click on an element.

//Syntax:
// await page.locator('selector').dblclick();

//Example:
// await page.locator('#editable-text').dblclick();


test("Double click", async ({page})=>
{
    // Navigate to page
	await page.goto('https://testautomationpractice.blogspot.com/');

    // Locate the element
	const doubleclick: Locator=page.getByText('Copy Text');

    // performs double click     - dblclick() - Double click action
    await doubleclick.dblclick();

    // Verifying the second box after the double click
    // Locating the second box and putting assertion
    const field2: Locator=page.locator('#field2');
	await expect(field2).toHaveValue("Hello World!");
	await page.waitForTimeout(5000);
});




//4. Drag and Drop – dragTo()
 
//Purpose:
// To drag an element and drop it to another target.
 
//Syntax:
// await page.locator('source-selector').dragTo(page.locator('target-selector'));

test.only("Drag and drop", async ({page}) =>
{
    // Navigating to page
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Here we need to find the source element and target element
    // Locating initial element
    const intialele: Locator=page.locator ("div#draggable");

    // Locating target element
    const targetele: Locator=page.locator ('div #droppable');

    // Here we need to find the source element and target element

//approach 1) - mouse hover and drag manually
    await intialele.hover();
    await page.mouse.down (); 
    await targetele.hover(); 
    await page.mouse.up();
    await page.waitForTimeout(5000);

// approach 2)- drag and drop method
    await intialele.dragTo(targetele);
    await page.waitForTimeout(5000); 

    //Example:

    //const source = page.locator('#drag-item');
    //const target = page.locator('#drop-zone');
    //await source.dragTo(target);
})


