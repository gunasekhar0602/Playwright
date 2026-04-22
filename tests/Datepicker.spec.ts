import {test, expect, Locator, Page} from "@playwright/test"
// this function should able to select both past and future date
async function selectDate(tarYear:string,tarMonth:string,tardate:string,page:Page,isFuture:boolean)
{            // Selecting Page fixture for await
    while(true)
    {
        // Locating and capturing the values of current month and year.
        const currentMonth=await page.locator("//span[@class='ui-datepicker-month']").textContent();
        const currentYear=await page.locator("//span[@class='ui-datepicker-year']").textContent();
        // If both currentMonth,month && currentYear,year are same will break the loop
        if(currentMonth=== tarYear && currentYear===tarMonth)
        {
            break;
        }
        if(isFuture)
        {
            await page.locator("//a[@title='Next']").click(); //Future//  click on next button locator
        }
        else
        {
        
        await page.locator("//a[@title='Prev']").click(); ///* // Past //clo next button locator
        }
        
    }

// locating and Capturing all dates in array formate
    const allDates=await page.locator(".ui-datepicker-calendar td").all();
// From for loop we will extracgt the inner text of all the date elements
    for(let dt of allDates)
    {
    // create a variable to capture the inner text of date elements
        const datetext=await dt.innerText();
    // If both datetext and date are same means click on the dt and break the loop
        if(datetext===tardate)
        {
            await dt.click();
            break;
        }
    }
}
test("Query datepicker", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/"); // Navigate to page
    const dateInput:Locator=page.locator('#datepicker'); // Locate the Dataepicker element
    expect (dateInput).toBeVisible();
await dateInput.click();    // opens the date picker
//select target date 
const year='2026'; const month='June'; const date='15';
selectDate(year,month,date,page,true) // calling function
//const expectedDate='06/15/2026';
//await expect(dateInput).toHaveValue(expectedDate) // assertion
})














test("datepicker",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/"); // Navigate to page
    const dateInput:Locator=page.locator('#datepicker'); // Locate the Dataepicker element
    expect (dateInput).toBeVisible();
await dateInput.click();    // opens the date picker

//select target date 
const year='2026'; const month='June'; const date='15';
while(true)
{
    // Locating and capturing the values of current month and year. 
    //span[@class='ui-datepicker-month']
    const currentMonth=await page.locator("//span[@class='ui-datepicker-month']").textContent();
    const currentYear=await page.locator("//span[@class='ui-datepicker-year']").textContent();

    // If both currentMonth,month && currentYear,year are same will break the loop
    if(currentMonth===month && currentYear===year)
    {
        break;
    }
    //Future// If not same we will click on next button locator
    await page.locator("//a[@title='Next']").click();

    // Past // If not same we will click on next button locator
    await page.locator("//a[@title='Prev']").click();
}
// locating and Capturing all dates in array formate
const allDates=await page.locator(".ui-datepicker-calendar td").all();
// From for loop we will extracgt the inner text of all the date elements
for(let dt of allDates)
{
    // create a variable to capture the inner text of date elements
    const datetext=await dt.innerText();
    // If both datetext and date are same means click on the dt and break the loop
    if(datetext===date)
    {
        await dt.click();
        break;
    }
}
await page.waitForTimeout(5000)   
}) 
