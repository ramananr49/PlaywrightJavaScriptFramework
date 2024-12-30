const {expect} = require('@playwright/test')

class PaymentPage
{
    constructor(page)
    {
        this.page = page
        this.countryTextbox = page.locator("[placeholder='Select Country']")
        this.optiondropdown = page.locator(".ta-results")
        this.emailGreyText = page.locator("[style*='lightgray']")
        this.placeOrderbutton = page.locator("a.action__submit")
    }

    async search_country_and_Select(Country)
    {
        await this.countryTextbox.pressSequentially(Country)
        const dropdown = await this.optiondropdown
        await dropdown.waitFor()
        const options = await dropdown.locator("button").count()
        for(let i=0; i<options; i++)
        {
            const countrytxt = await dropdown.locator("button").nth(i).textContent()
            if(countrytxt.trim() === Country)
            {
                await dropdown.locator("button").nth(i).click()
                break
            }
        }
    }

    async verify_email(email)
    {
        expect(await this.emailGreyText).toHaveText(email)
    }

    async place_the_Order()
    {
        await this.placeOrderbutton.click()
    }


}
module.exports = {PaymentPage}