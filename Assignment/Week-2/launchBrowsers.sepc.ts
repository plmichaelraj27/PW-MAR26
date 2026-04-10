import {chromium,firefox,msedge,test} from '@playwright/test'
test ('Launch Chrome Browser',async()=>{
    const browser= await chromium.launch({headless:false})
    const browserContext=await browser.newContext()
    const page= await browserContext.newPage()
    await page.goto("https://www.redbus.in/")
    console.log(page.title())
    console.log(page.url())
})

test ('Launch Firefox Browser',async()=>{
    const browser= await firefox.launch({headless:false})
    const browserContext=await browser.newContext()
    const page= await browserContext.newPage()
    await page.goto("https://www.flipkart.com/")
    console.log(page.title())
    console.log(page.url())
})

test ('Launch Edge Browser',async()=>{
    const browser= await msedge.launch({headless:false})
    const browserContext=await browser.newContext()
    const page= await browserContext.newPage()
    await page.goto("https://www.amazon.in/")
    console.log(page.title())
    console.log(page.url())
})
