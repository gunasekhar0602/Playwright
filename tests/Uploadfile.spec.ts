//1. setInputFiles() – Uploading Files in Playwright
 
//Purpose:
 
//Used to upload one or more files into an <input type="file"> element on a web page.
 
//Syntax:
 
//await page.locator('input[type="file"]').setInputFiles('path/to/file');
 
//Example – Uploading a Single File:
 
//await page.goto('https://example.com/upload');
 
//await page.locator('input[type="file"]').setInputFiles('tests/files/sample1.txt');



import {test, expect } from '@playwright/test'
test('Single file upload', async ({page}) =>
{
    // navigating to the page
	await page.goto("https://testautomationpractice.blogspot.com/");
	await page. locator ('#singleFileInput'). setInputFiles ('uploads/Test1.txt')
	await page. locator ("button: has-text ('Upload Single File')"). click(); 	
    const msg=await page. locator ('#singleFileStatus'). textContent(); 
	expect (msg) toContain(' Test1.txt');
	console.log("upload succesfull....."）；
	await page. waitForTimeout (5000);

});




// 2. Uploading Multiple Files:
 
await page.goto('https://example.com/upload');
 
await page.locator('input[type="file"]').setInputFiles(['tests/files/sample1.txt',
														'tests/files sample2.txt']);

 
test.only('Multiple files upload', async({page})=>
{
	await page goto("https://testautomationpractice.blogspot.com/");
	await page.locator('#multipleFilesInput').setInputFiles(['uploads/testfile1.pdf',
															 'uploads/testfile2.pdf'])
	await page. locator("button:has-text('Upload Multiple Files')"). click();
	const msg=await page.locator('#multipleFilesStatus'). textContent();
	expect (msg).toContain("testfilel.pdf");
	expect (msg).toContain("testfile2.pdf");
	console.log("files uploaded....”）
	console.log(msg) ;
	await page.waitForTimeout(5000);

});

