const {test, expect}=require('@playwright/test');

test('Let shop Test', async({browser})=>{

    const context=await browser.newContext();
    
    const page=await context.newPage();
    //const allProductName=page.locator(".card-body b");
    await page.goto("https://rahulshettyacademy.com/client");
    console.log(await page.title());

    await page.locator("#userEmail").fill("ranjanjyoti273@gmail.com");
    await page.locator("#userPassword").fill("Ranjan@001");
    await page.locator("#login").click();

    console.log(await page.title());

    
    await page.waitForLoadState('networkidle');
    const title= await page.locator(".card-body b").allTextContents();
    console.log(title);




});

