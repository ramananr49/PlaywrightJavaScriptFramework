const {expect} = require("@playwright/test")

class OrderSummaryPage
{
    constructor(page)
    {
        this.page = page
        this.orderIDText = page.locator(".col-text")
    }

    async verify_orderid(orderID)
    {
        const orderidTxt = await this.orderIDText.textContent()
        expect(orderID.includes(orderidTxt)).toBeTruthy()
    }
    
}
module.exports = {OrderSummaryPage}