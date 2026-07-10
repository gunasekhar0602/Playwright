// Static Table

import { test, expect, Locator } from '@playwright/test';
test.only("static web table",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // 1) Printing the details of the data of the table

    // For getting table details locate the table element and extract the inner text
    const tabledetails:string= await page.locator("//table[@name='BookTable' ]").innerText()

    // For locating table
    const table:Locator=page.locator("//table[@name='BookTable']")

    await expect (table).toBeVisible();
    console.log(tabledetails)


    // 2) For counting number of rows in the table

    // Locating tablerows locator
    const tablerows:Locator= page.locator("//table[@name='BookTable']//tbody//tr");
    await expect (tablerows).toHaveCount(7);

    // From tablerows extract the count
    const rowcount:number=await tablerows.count()
    console.log("Rows on the table", rowcount)


    // 3) For counting number of coloumns OR Headers in the table

    // Locating tablecolumn locator
    const tablecolumns:Locator=page.locator("//table[@name='BookTable']//tbody//th");

    // From tablecolumns extract the count
    const columncount:number=await tablecolumns.count();
    console.log("Columns in the table", columncount);


    // 4) Read all data from 2nd row

    // Locating required row cells - Both are fine
    //const secondrowdetails:Locator=tablerows.nth(2).locator('td')
    const secondrowcells:Locator= page.locator("//table[@name='BookTable']//tbody//tr").nth(2).locator('td')
    
    // Create a string and store the text of the cells in it
    const secondrowtext:string[]=await secondrowcells.allTextContents();

    console.log("Secondrowtext",secondrowtext);    // Array formate output

    for(let text of secondrowtext)
    {
        console.log(text)     // Normal formate output
    }


    // 5) Read all data from the table

    // Get allrowdata   //All returns array of locators   //Get all row Locators
    const allrowData= await tablerows.all();
    console.log("BookName Author Subject Price");

    for(let row of allrowData.slice(1))
    {
        const cols=await row.locator('td').allInnerTexts()
        console.log(cols.join('\t'))
    }


    // 6) Print booknames where author is Mukesh

    console.log("Books written by Mukesh");

    // Create an array to store the books written by Mukesh
    const Mukeshbooks:string[]=[];

    for(let row of allrowData.slice(1))
    {
        // Getting inner text of all the rows
        const cells=await row.locator('td').allInnerTexts();
        // Dividing two coloumns
        const auther=cells[1]; const book=cells[0];

        if (auther==="Mukesh")
        {
            console.log(`${auther} \t ${book}`)
            Mukeshbooks.push(book)
        }  
    }
    expect(Mukeshbooks).toHaveLength(2)

})
