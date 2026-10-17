// Frames

import {test,expect,Locator} from"@playwright/test"

test("Handle frames",async({page})=>
{
    // Navigate to the page
    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Get all frames avialable in the page
    // page.frames() ---> Playwright mechanisum. verify the frame tags
    const frames =page.frames();

    // counting the frames
    const framecount:number=frames.length
    console.log("frame count: ", framecount);

    // verify total number of frames
    expect(framecount).toBe(7);

// Approach 1) Locating frame by page.frame()

    // locating frame by url
    // (#document) - url value
    const frame1=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});

    // locate frameset from that locate frame by nth value
    // frameset and frame are tags 
    page.locator('frameset').locator('frame').nth(0);

    // locate frame by CSS
    page.locator("frame[scr='frame_1.html']");

    if(frame1)
    {
        await frame1.locator("//input[@name='mytext1']").fill("Apple");
    }
    else
    {
        console.log("Frame 1 is not available");
    }
 
    
    // Approach 2 - Using frameLocator()
    // frameLocator() is the recommended approach because it directly 
    // locates elements inside an iframe without creating a Frame object

    const textName=page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']");
    await textName.fill('Apple');
})


test("Handle inner frames",async({page})=>
{
    // open the frames demo application
    await page.goto("https://ui.vision/demo/webtest/frames/");

    // Parent frame
    const frame3=await page.frameLocator("frame[src='frame_3.html']");
    await frame3.locator("//input[@name='mytext3']").fill("Apple");

    // child frame
    // from parent frame we can locate the child frame by frameLocator()
    // iframe is tag of the inner frame
    const childframe=await frame3.frameLocator('iframe');
    await childframe.getByRole("checkbox",{name:'Web Testing'}).click();
})


test("Nested frames",async({page})=>
{
    await page.goto("https://sdetqa.vercel.app/autoplay");

    // capturing outerframe 
    const outerframe= page.locator('iframe').first().contentFrame();

    // outerframe - inner frame - input element
    const inputbox=outerframe.frameLocator('iframe').locator("#innerInput");
    await inputbox.fill("Apple");
    
    expect(inputbox).toHaveValue("Apple");


})
