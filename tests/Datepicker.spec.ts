import {test, expect, Locator} from "@playwright/test"
test ("Query datepicker", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dateInput:Locator=page.locator('#datepicker');
    expect (dateInput) .toBeVisible();
//using fill() method
    dateInput.fill("06/20/2025") //mm/dd/yyyy I
    await page. waitForTimeout (5000);



await dateInput.click();    // opens the date picker

//select target date 
const year=' 2026';
const month='June';
const date='15';
while(true)
{
    const currentMonth=await page. locator(' .ui-datepicker-month'). textContent ();
    const currentYear=await page. locator(' .ui-datepicker-year'). textContent () ;
    if(currentMonth===month && currentYear===year)
    {
        break;
    }
//Future
    await page. locator(' .ui-datepicker-next').click();
}
const allDates=await page.locator(". ui-datepicker-calendar td").all();
for (let date of alldates)
{
    const dateText=await date.innerText();
    if (dateText == date)
    {
        await dt.click();
        break;
    }
}

    
})
