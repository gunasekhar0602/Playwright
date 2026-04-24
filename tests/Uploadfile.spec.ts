// setInputFiles() – Uploading Files in Playwright
 
//Purpose:
//Used to upload one or more files into an <input type="file"> element on a web page.
 
//Syntax:
//await page.locator('input[type="file"]').setInputFiles('path/to/file');
 
//Example – Uploading a Single File:
//await page.goto('https://example.com/upload');
//await page.locator('input[type="file"]').setInputFiles('tests/files/sample1.txt');


import {test,expect} from '@playwright/test'
test.only('Single file upload', async ({page}) =>
{
    // navigating to the page
	await page.goto("https://testautomationpractice.blogspot.com/");

    // Locate the upload section elememnt and upload the file by providing the path of file
	await page.locator('#singleFileInput').setInputFiles('uploads/Test1.txt');

    // Locate the upload button element and click on it
	await page.locator("//button[text()='Upload Single File']").click();

    // Locate the message text element and get the message and put assertion to it
    const msg=await page.locator('#singleFileStatus').textContent(); 
	expect(msg).toContain('Test1.txt');
	console.log("upload succesfull.....");
	await page.waitForTimeout (5000);
});


//Example – Uploading Multiple Files:

//await page.goto('https://example.com/upload');
//await page.locator('input[type="file"]').setInputFiles(['uploads/testfile1.pdf',
//															 'uploads/testfile2.pdf']);



// 2. Uploading Multiple Files:
 
test.only('Multiple files upload', async({page})=>
{
	// navigating to the page
	await page.goto("https://testautomationpractice.blogspot.com/");

	// Locate the upload section elememnt and upload the file by providing the path of file in array
	await page.locator('#multipleFilesInput').setInputFiles(['uploads/testfile1.pdf',
	                                                         'uploads/testfile2.pdf'])

	// Locate the upload button element and click on it													 
	await page.locator("//button[(text()='Upload Multiple Files')]").click();

	// Locate the message text element and get the message and put assertion to it
	const msg=await page.locator('#multipleFilesStatus').textContent();
	expect(msg).toContain("testfile1.pdf");
	expect(msg).toContain("testfile2.pdf");
	console.log("files uploaded....")
	console.log(msg);
	await page.waitForTimeout(5000);
});
