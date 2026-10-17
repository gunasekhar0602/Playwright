import{test,expect} from "@playwright/test"

// Runs once before all tests
test.beforeAll(async()=>
{
    console.log('start execution');
})


// Runs before each test
test.beforeEach(async()=>
{
    console.log('login completed')
})



// Runs after each test
test.afterEach(async()=>
{
    console.log("logout completed")
})




// Runs once after all tests
test.afterAll(async()=>
{
    console.log('Finished test execution')
})
