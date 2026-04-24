import { test, expect } from '@playwright/test';

// we need to import Axebilder module from @axe-core/playwright package
import Axebuilder from '@axe-core/playwright';

test ("accessibility test", async ({page},testInfo) =>
{
await page.goto('https://demowebshop.tricentis.com/')
//1) Scanning detect all types of WAG violations

// create an object for Axebuilder and pass page fixture and call method called analyze
const accessibilityScanResults=await new AxeBuilder({page}).analyze();

// this will return accessibility scan results in JSON formate
console.log( "Number of violations:====>" , accessibilityScanesults.violations.length);
    
//expect(accessibilityScanResults.violations).toEqual([]);
expect(accessibilityScanResults.violations.length).toEqual(0);

// 2) Scanning for few WAG violations
    // here we have to mention the tags. If we use analyse it will verify all
    in the form of away we have to specify the tags
const  accessibilityScanResults=await new AxeBuilder({page}).withTags (['wcag2a','wcag2aa'
                                                                    ,'woag21a','wcag21aa' ])
    // sharing details through specific file
    // testInfo of inbuliy fixture in the playwright and attach is the method
    // in curly braces we have to provide properties
    // body is property, Json is class, stringify is method which will aline the content
    // 2 is for intendation // content type is json
await testInfo.attach ('accessibility results',{
                       body: JSON. stringify (accessibilityScanResults, null, 2),
                       contentType: 'application/json'
                       }) ;
console.1og("Number of violations:====>",accessibilityScanResults.violations.length);
expect (accessibilityScanResults.violations.length).toEqual(0);

// 3) Scanning for fe WCAG violations with rules

    // instead of tags provide the with rules
    // In general every element had different id
    // if there are any duplicare id it will retrun
    if wr want retrun violations other than duplicate it simply mention disable rules
const accessibilityscanResults=await new AxeBuilder({page}) .disableRules(['duplicate-id']). analyze();
await testInfo.attach(' accessibility results',{
body: JSON. stringify(accessibilityScanResults,null, 2), contentType: 'application/json'
}) ;
console.log("Number of violations:", accessibilityScanResults.violations.length);
expect (accessibilityScanResults.violations.length).toEqual(0);
    
  })
