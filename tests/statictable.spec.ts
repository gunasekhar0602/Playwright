import { test, expect, Locator } from '@playwright/test';
test("static web table",async ({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");
    const table:Locator= page. locator("table[name=' BookTable' ] tbody");
    await expect (table). toBeVisible();
  
// 1) count number of rows in a table
//returns all the rows including header 
    const rows: Locator=page.locator("table[name= 'BookTable'] tbody tr");
    await expect (rows) .toHaveCount(7); //7//approach 1
    
    const rowCount :number=await rows.count);
    console.log( "Number of rows in a table: ", rowcount); expect (rowCount). toBe(7); // appraoch 2


// 2) count number of headers/columns
//const columns:Locator= page.locator("table[name=' BookTable'] tbody tr th");

    const columns:Locator= rows.locator("th");
    await expect (columns). toHaveCount (4); //4 appraoch 1
    
    const columnCount:number=await columns.count();
    console.log( "number of columns/headers: ", columnCount);
    expect (columnCount).toBe(4); // appraoch 2


// 3) Read all data from 2nd row (index 2 means 3rd row including header)

    const secondRowcells:Locator=rows.nth(2).locator('td');
    const secondRowTexts:string[]=await secondRowcells.allInnerTexts();
    console. 1og("2nd Row data: ", secondRowTexts); //[ 'Learn Java', 'Mukesh', "Java', '500' ]

    //assetion
    await expect (secondRowCells). toHaveText([ 'Learn Java', 'Mukesh', 'Java','500']); 
    console.1og("printing 2nd row data......")
    for (let text of secondRowTexts)
    {
        console.log(text);
    }

})
