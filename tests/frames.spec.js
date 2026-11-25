import {test} from "@playwright/test"

test("Frame Handling", async({page})=>{
    await page.goto("https://practice-automation.com/iframes/");
    const frame = page.frameLocator("#iframe-1")
})