import {chromium,firefox,test} from '@playwright/test'
test ('Launch Chrome Browser',async()=>{
    const browser= await chromium.launch({headless:false, channel: 'chrome'})
    const browserContext=await browser.newContext()
    const page= await browserContext.newPage()
    await page.goto("https://www.redbus.in/")
    console.log(await page.title())
    console.log(await page.url())
})

test ('Launch Firefox Browser',async()=>{
    const browser= await firefox.launch({headless:false,channel: 'firefox'})
    const browserContext=await browser.newContext()
    const page= await browserContext.newPage()
    await page.goto("https://www.flipkart.com/")
    console.log(await page.title())
    console.log(await page.url())
})

test ('Launch Edge Browser',async()=>{
    const browser= await chromium.launch({headless:false,channel: 'msedge'})
    const browserContext=await browser.newContext()
    const page= await browserContext.newPage()
    await page.goto("https://www.amazon.in/")
    console.log(await page.title())
    console.log(await page.url())
})
