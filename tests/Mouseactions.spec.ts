
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
});


