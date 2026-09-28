import {test as base,expect,Page} from 'playwright/test'

// create the type of the fixture
type loggeduser={loggedinuser:Page}


export const test=base.extend <loggeduser>({
    loggedinuser:async({page},use)=>{
        // login steps
        console.log('Login successfull')
        await use(page)
    }
})

export{expect}