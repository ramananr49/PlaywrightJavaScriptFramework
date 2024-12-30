const {test, expect} = require('@playwright/test')

test('Valid Login', async ({browser})=>   
{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/client/")
    const title = await page.title()
    console.log(title)
    expect(page).toHaveTitle("Let's Shop")

    await page.locator("#userEmail").fill("testacc01@gmail.com")
    await page.locator("#userPassword").fill("Learning@123")
    await page.locator("[value='Login']").click()
    await page.waitForLoadState('networkidle')
    const titles = await page.locator(".card-body h5 b").allTextContents()
    console.log(titles)
})

test('Child Window Handling', async ({browser}) =>
{
    const context =await browser.newContext()
    const page =await  context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const title = await page.title()
    console.log(title)
    // await page.locator("[href*='document']").click()
    const [newpage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator("[href*='document']").click()
    ])

    const text = await newpage.locator("p.red").textContent()
    const array = text.split('@')
    const domain = array[1].split(" ")[0]
    console.log(domain)

    await page.locator("#username").fill(domain)
    await page.pause()
})

