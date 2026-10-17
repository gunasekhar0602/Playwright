import {test as base,expect,Page} from '@playwright/test'

// define/create the type of the fixture by type keyword
// here loogeduser is the type of fixture
// loggedinuser is name of fixture
type loogeduser={loggedinuser:Page}

// we have to add the custom fixture to existing test 
// by extend we will add the custom fixture to test. // here base is nothing but test
export const test=base.extend<loogeduser>(
{
    // use is callback function
    loggedinuser:async({page},use)=>
    {
        // login steps
        console.log("login suucessfull");

        // page is parameter
        await use(page)
    }
})

export{expect}
