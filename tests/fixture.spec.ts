// import {test,expect} from "@playwright/test"
/* 
if we are using custom fixtures in the test means, we need to mention the fixture file path
no the playwright/test while import

if we asre using playwright/test means we cannot utilize the custom fixtures
 */


import{test,expect} from "../fixture/login-fixture"


test ("find product", async({page,loggedinuser})=>
{
    console.log('Finding product')
    console.log('Product not avaialble')
})

test ("Add product to the cart", async({page,loggedinuser})=>
{
    console.log('Finding product')
    console.log('add product to the cart')
})