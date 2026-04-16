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
