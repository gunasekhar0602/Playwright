import {test,expect} from "@playwright/test";

import { SignUpPage } from "../pages/SignUpPage";


test.describe('Demoblaze Tests', ()=>
{
    const baseurl='https://www.demoblaze.com/index.html';
    const username='pavanol'
    const password='Test@1234'

    test("signup",async({page})=>
    {
        
        await page.goto(baseurl);

        const signuppage=new SignUpPage(page)

        await signuppage.navigatetoSignup()
        await signuppage.fillUsername(username)
        await signuppage.fillPassword(password)
        await signuppage.submitSignnup()
    })






})