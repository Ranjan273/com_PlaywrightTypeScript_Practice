const {test, expect}=require('@playwright/test');


test('Browser PlayWright Test', async({browser})=>{

    const context=await browser.newContext();
    const page = await context.newPage();
    const username=page.locator("#username");
    const password =page.locator("#password");
    const signInBtn=page.locator("#signInBtn");
    const phoneL= page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

    await username.fill("rahulshetty");
    await password.fill("learning");
    await signInBtn.click();

    console.log(await page.title());
    console.log(await page.locator("[style*='block']").textContent());

    let errorLocator=await page.locator("[style*='block']");
    await expect(errorLocator).toContainText("Incorrect");

    await username.fill("");
    await username.fill("rahulshettyacademy");
    await signInBtn.click();

    console.log(await page.title());

    

    console.log(await phoneL.first().textContent());
    console.log(await phoneL.nth(0).textContent());
    console.log(await phoneL.last().textContent());

    const allPhones=await phoneL.allTextContents();
    console.log(allPhones);

    //await expect(phoneL).toContainText("Blackberry");


});

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


test('Page Playwright test', async({page})=>{
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
}); 

test('Static dropdown',async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username=page.locator("#username");
    const password=page.locator("#password");
    const signInBtn=page.locator("#signInBtn");
    const dropDown=page.locator("select[class='form-control']");
    const documentLink=page.locator("[href*='documents-request']");

    await dropDown.selectOption("consult");
    await page.locator("span.checkmark").last().click();
    await page.locator("#okayBtn").click();
    //await page.pause();

    console.log(await page.locator("span.checkmark").last().isChecked());
    await expect(page.locator("span.checkmark").last()).toBeChecked();

    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");

});

test('Child window Concept',async ({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    const username=page.locator("#username");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink=page.locator("[href*='documents-request']");

    const [newPage]= await Promise.all(
        [
            context.waitForEvent('page'),
            documentLink.click(),

        ]
    )

    const text= await newPage.locator(".red").textContent();
    console.log(text);

    const arrText=text.split("@")
    const domain=arrText[1].split(" ")[0]
    await page.locator("#username").fill(domain);
    
    console.log(await page.locator("#username").textContent());


});

