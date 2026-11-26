import {Page,Locator} from '@playwright/test'

// class ClassName
export class SignUpPage
{
    // define properties
    private readonly page:Page
    private readonly signuplink:Locator;
    private readonly usernameinput:Locator;
    private readonly passowrdinput:Locator;
    private readonly signupbutton:Locator;

    // Initialize page context and elements
    constructor(page:Page)
    {
        this.page=page
        this.signuplink=this.page.locator('#signin2');
        this.usernameinput=this.page.locator("//input[@id='sign-username']");
        this.passowrdinput=this.page.locator('#sign-password');
        this.signupbutton=this.page.locator("//button[@onclick='register()']");
    }

    // Create resuable user actions
    async navigatetoSignup()
    {
        await this.signuplink.click();
    }

    async fillUsername(username:string)
    {
        await this.usernameinput.fill(username);
    }
    async fillPassword(password:string)
    {
        await this.passowrdinput.fill(password);
    }
    async submitSignnup()
    {

        const dialogPromise=this.page.waitForEvent('dialog')
        await this.signupbutton.click();

        const dialog=await dialogPromise;
        const message=dialog.message();
        await dialog.accept()
        return message;
    }
}