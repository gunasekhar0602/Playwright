// Most of the times, playwright will automatically scroll for you before doing any actions.
// Therefore, you do not scroll explicitly

// Scrolling to footer
import {test, expect, Locator} from"@playwright/test"
test("Scrolling to footer", async ({page})=>
{
    // Navigate to the page
	await page.goto('https://demowebshop.tricentis.com/');

    // Footer element - automatically scrolled before doing any action.
    // Capturing the inner text of the element
	const footerdisclaimenText: string=await page. locator('.footer-disclaimer').innerText();
	console.log("Footertext caputured:",footerdisclaimenText );
})

// scrolling to inside the dropdown
test("scrolling to inside the dropdown", async ({page})=>
{
    // Navigate to the page
	await page.goto('https://testautomationpractice.blogspot.com/');

    // Click on the element dropdownbox
	await page.locator('#comboBox').click();
	await page.waitForTimeout (5000);

    // Selecting the element inside the dropdown
	const option= page.locator("//div[text()='Item 13']");

    // Printing the option
    console.log('option captured in the dropdown: ', await option.innerText());
    await option.click();
	await page.waitForTimeout(5000);

})

// Scrolling inside table
test('Scrolling inside table', async({page})=>
{
    // Navigating to page
    await page.goto('https://datatables.net/examples/basic_init/scroll_xy.html');

    // Capturing the name and email
    // tbody - table,     // tr - table row    // td - table data
    // In table, 10th row, 2 column element
    const name= await page.locator('tbody tr:nth-child(10) td:nth-child(2)').innerText();
    console.log("Last name from 10th row and 2nd column: ", name);

    const email=await page.locator("tbody tr:nth-child(10) td:nth-child(9)").innerText();
    console.log("Email from 10th row and 9th column: ",email);
})




test.only("Infinite Scrolling", async({page})=>
{
    test.slow(); // This will triple the default timeout of playwright
    await page.goto("https://www.booksbykilo.in/new-books?pricerange=210to500");
// Here we need to execute Java Script statement // window - represeneting our application
// In the window we need to scroll to from 0 (Here 0 is starting point)
// document.body.scrollHeight - reprenting the end of the page
// This the statement we need to execute multiple times till it reaches to end of the page
// window.scrollTo(0,document.body.scrollHeight) - should mention inside evaluate function
    let previousHeight=0; // We need to compare the current previousHeight and currentHeight
    let bookfound=false;   // Verifying the bookm is there OR not.
    while(true)
    {
        const titles=await page.locator("#productsDiv h3").allTextContents();
        if(titles.includes("The Blue Eye"))
        {
            console.log('Book Found');
            bookfound=true;
            expect(bookfound).toBeTruthy();
            break; // If book is present means break the loop.
        }
// evaluate will take an arrow function as Parameter. // Scrolling the page
        await page.evaluate(()=>{
            window.scrollTo(0,document.body.scrollHeight)
        })
        await page.waitForTimeout(2000); // wait for new content to load
// evaluate will take an arrow function as Parameter. // Capture current height of the page
        const currentHeight=await page.evaluate(()=>{
            return document.body.scrollHeight;
        })
        console.log("Previous height:",previousHeight)
        console.log("current height:",currentHeight)
		// if current height === previous height then break
        if(currentHeight===previousHeight)
        {
            break;       
        }
        previousHeight=currentHeight;     // else assign previous height = current height
    }
    console.log('We reached end of the page')
    
    if(!bookfound)
    {
        console.log('Book not found')
    }
})

