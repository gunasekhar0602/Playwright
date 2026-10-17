//alert(), confirm(), prompt() dialogs/JSalerts

//Reference: https://playwright.dev/docs/dialogs#alert-confirm-prompt-dialogs

// 1) By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them.
// 2) However, you can register a dialog handler before the action that triggers the dialog to either
// dialog.accept() or dialog.dismiss() it.

// Simple alert
import {test,expect,Locator, chromium} from "@playwright/test";
test.only("Simple Dialog", async ({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // dialog is a fixed keyword and it is name of the event
    page.on ('dialog', (dialog) =>
    {
        // returns type of the dialog expect (dialog.type()). tocontain('alert');
        console.log("Dialog type is: ", dialog.type())
        
        // returns message from dialog expect (dialog.message)) .toContain("I am an alert box!");
        console.log("Dialog Text:", dialog.message()); 
        dialog.accept ();
    })

    // triggering the event
    await page. locator("#alertBtn"). click();
    await page.waitForTimeout (5000);
})




// Confirmation alert
test("Confirmation Dialog",async ({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
// Register a dialog handler
    page.on('dialog', (dialog) => 
    {
        // returns type of the dialog 
        console. log("Dialog type is:",dialog.type());
        expect (dialog.type()). toContain('confirm');
        
        // returns message from dialog 
        console. log("Dialog Text:",dialog. message()); 
        expect (dialog.message()).toContain("Press a button!");

        dialog.accept(); // close dialog by accepting 
        //dialog.dismiss(); // close dialog by dimissing
    })

    // triggering the event
    await page.locator("#confirmBtn").click();

    // Opens conformation dialog whether based on accpet OR dismiss
    const text:string=await page.locator("#demo").innerText (); 
    console. log("Output text:",text);

    // if we selected dismiss
    //await expect(page.locator("#demo")). toHaveText( "You pressed Cancel!");  

    // if we selected accept
    await expect(page. locator ("#demo")).toHaveText ("You pressed OK!");
    await page. waitForTimeout (5000);
})



// Prompt alert
test( "Prompt Dialog",async ({page}) =>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
// Register a dialog handler
    page.on('dialog', (dialog) => 
    {
        // returns type of the dialog 
        console.log("Dialog type is:",dialog.type());
        expect (dialog.type()). toContain('prompt');

        // returns message from dialog
        console.log("Dialog Text:", dialog.message()); 
        expect (dialog.message()).toContain("Please enter your name:");

        // checks default value of the dialog
        expect (dialog.defaultValue()) .toContain("Harry Potter"); 
        dialog.accept('John'); // close dialog by accepting
    })

    // Opens Prompt dialog. triggering Event
    await page. locator("#promptBtn").click();

    // Getting inner text of message based what we provide in the text box
    const text:string=await page.locator("#demo").innerText();
    console.log("Output text:", text);

    await expect (page. locator ("#demo")).toHaveText ("Hello John! How are you today?"); 
    await page. waitForTimeout (5000);
})




// Auth Popup - need username and password for handle this pop up

test('Auth popup',async({browser})=>
{
    const context=await browser.newContext(
        {
            httpCredentials:
            {
                username:"admin",
                password:"admin"
            }
        }
    );
    const page=await context.newPage();

    // not a best method to pass the admin and passowrd in the URL
    // admin:admin ---> username:password
    // await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');


    // Navigate to URL (without credentials in the URL)
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    // verify successful authentication
    await expect(page.locator('text=Congratulations')).toBeVisible();
    await page.waitForTimeout(5000);
})