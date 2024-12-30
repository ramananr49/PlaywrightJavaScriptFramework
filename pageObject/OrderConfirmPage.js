const {expect} = require('@playwright/test')

class OrderConfirmPage
{
    constructor(page)
    {
        this.page = page
        this.thankouMessage = page.locator("h1.hero-primary")
        this.orderidText = page.locator(".em-spacer-1 label.ng-star-inserted")
        this.orderHistoryPageLink = page.locator("label[routerlink='/dashboard/myorders']")
    }

    async verify_thankyou_message()
    {
        expect(await this.thankouMessage).toHaveText(" Thankyou for the order. ")
    }

    async get_orderID()
    {
        const OrderIDText = await this.orderidText.textContent()
        const orderID = OrderIDText.split(" ")[2]
        console.log(orderID)
        return orderID
    }

    async navigate_to_OrderHistoryPage()
    {
        await this.orderHistoryPageLink.click()
    }

}
module.exports = {OrderConfirmPage}