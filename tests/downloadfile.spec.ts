import{test,expect} from'@playwright/test'
import fs from'fs'

test.skip("file download", async({page})=>
{
    await page.goto('https://sdetqa.vercel.app/autoplay');

    // whenver we are clicking on download a file is downloading like an event
    // we need to capture it from page

    // we can capture the download file. dowmloadfile is variable. [download] ---> square brackets are syntax
    // some times if we click on download button it will download multiple files
           // so we are mentioning [downloadfile] for array. It is Download type
    const [downloadfile]=await Promise.all(
                        [page.waitForEvent('download'),
                          page.locator('button',{hasText:'Download File'}).click()])

    // these two are returning promise so we can keep them in Promise.all
    // here page is waiting for page download
    // page.waitForEvent('download')

    // clicking on download file button.
    // page.locator('button',{hasText:'downloadfile'}).click()


    // suggestedFilename - return the name of the file
    expect( downloadfile.suggestedFilename()).toContain("sample.txt");


    // save the file in custom path
    // saveAs is bulitin method
    const downloadpath="downloads/sample.txt"
    await downloadfile.saveAs(downloadpath);

    // verifying whether file is there in the folder OR not.
    // fs - file system. existsSync will verify whether id there OR not in the download path
    const fileExists=fs.existsSync(downloadpath)
    expect(fileExists).toBeTruthy();

    // Deleting the file 
    if(fileExists)
    {
        // unlinkSync will delete the file
        fs.unlinkSync(downloadpath)
    }
})          








test("open pdf file",async({browser})=>
{
    const context=await browser.newContext();

    const page=await context.newPage();

    await page.goto('https://sdetqa.vercel.app/autoplay');

    const[opendocument]=await Promise.all([
                        context.waitForEvent('page'),
                        page.locator('button',{hasText:'Open PDF'}).click()
                        ])
    
    expect(opendocument).toBeTruthy();
    await page.waitForTimeout(5000);

    



    //await context.waitForEvent('page')
    //await page.locator('button',{hasText:'Open PDF'}).click();
})