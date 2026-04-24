import{test,expect,Locator} from"@playwright/test"

test("Showdow DOM elements",async({page})=>
{
    // Navigate to the page
    await page.goto("https://books-pwakit.appspot.com/");

    // Locate the search element and fill the bookname
    await page.locator("#input").fill("Playwright automation");

    // Click on enter for search
    await page.keyboard.press("Enter");
    await page.waitForTimeout(5000);

    // Locaagte the title of the books
    const Allbooks= await page.locator('h2.title').all();

    // Print the length of books(Number of books)
    console.log(Allbooks.length);
    expect(Allbooks).toBe(20);

})


test.only("Showdow DOM elements2",async({page})=>
{

    await page.goto("https://shop.polymer-project.org/");

    // locator - a[aria-label='Men's Outerwear Shop Now'] Here we are having multiple colons
    // we can use backward slash in fornt of the colon

    // Click on the button
    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click();

    //Get the titzles of the products
    await page.waitForTimeout(5000)
    const productsfound=await page.locator("div.title").all();

    // Verify the length of the products
    await page.waitForTimeout(5000)
    console.log("Number of products: ",productsfound.length);

    expect(productsfound.length).toBe(16)
   
})