const {test} = require('@playwright/test')

test("same Browser navigation",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.goto("https://www.google.com/")
    await page.goBack();
    await page.goForward();
})