const {test, expect} = require('@playwright/test')
const { PractisePage } = require('../pageObject/PractisePage')


test('Radio button and Checkbox Handling', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const practisepage = new PractisePage(page)

    await practisepage.verify_RadioButtonExample_header_presence()
    await practisepage.click_RadioButton_option(practisepage.Radio1Option)
    await practisepage.verify_radiobutton_checked(practisepage.Radio1Option)
    await practisepage.click_RadioButton_option(practisepage.Radio3Option)
    await practisepage.verify_radiobutton_checked(practisepage.Radio3Option)
    await practisepage.click_RadioButton_option(practisepage.Radio2Option)
    await practisepage.verify_radiobutton_checked(practisepage.Radio2Option)

    await expect(page.locator('#checkbox-example legend')).toBeVisible()
    await expect(page.locator("[id='checkBoxOption1']")).not.toBeChecked()
    await expect(page.locator("[id='checkBoxOption2']")).not.toBeChecked()
    await expect(page.locator("[id='checkBoxOption3']")).not.toBeChecked()
    await page.locator("[id='checkBoxOption3']").check()
    await page.locator("[id='checkBoxOption2']").check()
    await page.locator("[id='checkBoxOption1']").check()
    await expect(page.locator("[id='checkBoxOption3']")).toBeChecked()
    await expect(page.locator("[id='checkBoxOption2']")).toBeChecked()
    await expect(page.locator("[id='checkBoxOption1']")).toBeChecked()
    await page.locator("[id='checkBoxOption3']").uncheck()
    await page.locator("[id='checkBoxOption1']").uncheck()
    await expect(page.locator("[id='checkBoxOption1']")).not.toBeChecked()
    await expect(page.locator("[id='checkBoxOption3']")).not.toBeChecked()
    await expect(page.locator("[id='checkBoxOption2']")).toBeChecked()
})


test('Static Dropdown and Dynamic/Suggestion Dropdown Handling', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.locator("#select-class-example legend")).toBeVisible()
    await page.locator("#autocomplete").fill("Ger")
    await page.locator("//div[text()='Germany' and @class='ui-menu-item-wrapper']").click()
    // await expect(page.locator("#autocomplete")).toHaveText("Germany")

    await expect(page.locator(".cen-right-align legend")).toBeVisible()
    await page.locator("select#dropdown-class-example").selectOption("option1")
})

test("Alert popup Handling", async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.locator(".pull-right legend")).toBeVisible()
    await page.locator("input#name").fill("Ram")
    page.on('dialog', dialog => console.log(dialog.message()))
    page.on('dialog', dialog => dialog.accept())
    await page.locator("#alertbtn").click()
    await page.locator("input#name").fill("Ram")
    await page.locator("#confirmbtn").click()
})