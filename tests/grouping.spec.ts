import{test,expect} from '@playwright/test'

// Rull all the tests inside it
// Group related tests together
test.describe("Group1",async()=>
{
    test('Test1',async()=>
    {
        console.log("This is Test1.....")
    });

    test("Test2",async()=>
    {
        console.log("This is Test2......")
    });
})

test.describe("Group2",async()=>
{
    test('Test3',async()=>
    {
        console.log("This is Test3.....")
    });

    test("Test4",async()=>
    {
        console.log("This is Test4......")
    });
})