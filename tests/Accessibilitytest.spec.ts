import { test, expect } from '@playwright/test';


import Axebuilder from '@axe-core/playwright';
test ("accessibility test", async ({page}) =>
await page.goto('https://demowebshop.tricentis.com/')
//1) Scanning detect all types of WAG violations.
const accessibilityScanResults=await new AxeBuilder({page}) . analyze() ;
console.log( "Number of violations:====>" , accessibilityScanesults.violations.length);
//expect(accessibilityScanResults.violations).toEqual([]);
expect (accessibilityScanResults.violations.length).toEqual(0);
