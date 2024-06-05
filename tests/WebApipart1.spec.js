const {test,expect} = require('@playwright/test');

test('Let Shop full flow', async ({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
   
    const allProducts=await page.locator(".card-body b");
   
    /*await page.goto("https://rahulshettyacademy.com/client");
    //await page.pause();
    console.log(page.title());
   
    await page.locator("#userEmail").fill("ranjanjyoti273@gmail.com");
    await page.locator("#userPassword").fill("Ranjan@001");
    await page.locator("#login").click();*/ 
   
    console.log(await page.title());
   
    await page.waitForLoadState('networkidle');
    const title= await page.locator(".card-body b").allTextContents();
    console.log(title);
   
    const products=page.locator(".card-body");
    const productName='ZARA COAT 3';
    const count=await products.count();
   
    for(let i=0;i<count;i++){
   
       if(await products.nth(i).locator("b").textContent() == productName){
           await products.nth(i).locator("text=Add To Cart").click();
           break;
       }
    }
    //await page.pause();
   
    const cart=page.locator("[routerlink*='cart']");
    await cart.click();
    //await page.pause();
   
    await page.locator("div li").first().waitFor();
    const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
   
   }
   
   );

