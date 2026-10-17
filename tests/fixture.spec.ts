// import {test,expect} from "@playwright/test"

// if we are using custom fixtures in the test means, we need to mention the fixture file path
// if we are using playwright/test means we cannot utilize the custom fixtures

import{test,expect} from "../fixture/login-fixture"

// here every step needs the login
// as we have created the login fixture, mention login fixture in curly braces

test ("find product", async({page,loggedinuser})=>
{
    // login automatically completes
    console.log('Finding product')
    console.log('Product not avaialble')
})

test ("Add product to the cart", async({page,loggedinuser})=>
{
    // login automatically completes
    console.log('Finding product')
    console.log('add product to the cart')
})