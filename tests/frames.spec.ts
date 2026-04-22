/*
An iframe (short for "inline frame") is an HTML element that allows you to embed another HTML document within the current 
document  
Iframes are commonly used to embed external content such as videos, maps, or other web pages (as seen here) into a web page wit
*/
import { test, expect, Locator } from "@playwright/test";
test.only("frames demo", async ({page})=>
{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    await page.waitForTimeout(5000);

    //total number of frames present on the page.
    // page.frame() ---> Gives us no of frames in the page
    const frames=page.frames();
    console.log( "Number of frames:", frames.length);



    //---- Approach 1: using page.frame() ----

    // Caputure the frame
    const frame1= page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});

    // Provide a if condition
        if (frame1)
        {
            // Locate the element in side the frame and do action on it.
            await frame1.locator("//input[@name='mytext1']").fill("Hello");
            //await frame.fill ("[name='mytext1' I", "Hello");
        }
        else
        {
            console.log("Frame is not available");
        }
await page.waitForTimeout(5000);


// --- Approach 2: Using frameLocator() ---
    
    // Capture the element by using frameLocator

    const inputbox=page.frameLocator("[src='frame_1.html']").locator("[name= 'mytext1']");
    await inputbox.fill("John");
    await page. waitForTimeout (5000);
})




test("inner/child frames demo", async ({page}) =>
{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    if (frame3) 
    {
        // Taking action on the input box inside the frame
        await frame3.locator("[name='mytext3']").fill("Welcome");

        // Capturing the child frame inside the frame
        const childframes= frame3.childFrames();
        console.log("Child frames inside the Frame 3:", childframes.length); // only 1 child frame exist

        // Taking action on the Radio button inside the childframe
        // Radio button present in first child fraame so we are using [0] index
        const radio=childframes[0].getByLabel('I am a human');
        await radio.check(); // select radio button 
        await expect (radio). toBeChecked();// assertion
    }
    else
    {
        console.log( "Frame 3 is not found..")
    }
        await page.waitForTimeout (5000);
})
