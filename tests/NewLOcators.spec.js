const {test, expect}=require('@playwright/test');

test('Practice new Locator type',async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    console.log(await page.title());

});