const {expect} = require('@playwright/test')

class PractisePage
{
    constructor(page)
    {
        this.page = page
        this.radiobuttonExampleHeader = page.locator('#radio-btn-example legend')
        this.Radio1Option = page.locator("[value='radio1']")
        this.Radio2Option = page.locator("[value='radio2']")
        this.Radio3Option = page.locator("[value='radio3']")

        this.CheckboxExampleHeader = page.locator('#checkbox-example legend')
        this.Option1 = page.locator("[id='checkBoxOption1']")
        this.Option2 = page.locator("[id='checkBoxOption2']")
        this.Option3 = page.locator("[id='checkBoxOption3']")

    }

    async verify_RadioButtonExample_header_presence()
    {
        await expect(this.radiobuttonExampleHeader).toBeVisible()
    }

    async click_RadioButton_option(locator)
    {
        await locator.click()
    }

    async verify_radiobutton_checked(locator)
    {
        await expect(locator).toBeChecked()
    }

    async verify_CheckBoxExample_header_presence()
    {
        await expect(this.CheckboxExampleHeader).toBeVisible()
    }

}
module.exports = {PractisePage}