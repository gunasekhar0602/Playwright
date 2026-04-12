/*
An iframe (short for "inline frame") is an HTML element that allows you to embed another HTML document within the current docun Iframes are commonly used to embed external content such as videos, maps, or other web pages (as seen here) into a web page wit
* /
import { test, expect } from "@playwright/test";
test ("frames demo", async ({page})=>{
await page. goto('https://ui.vision/demo/webtest/frames/');
//total number of frames present on the page. const frames=page.frames ();
console.log( "Number of frames:", frames. length)
})
