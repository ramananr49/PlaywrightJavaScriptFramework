const {expect} = require('@playwright/test')
class CartPage
{
    constructor(page)
    {
        this.page = page
        this.checkoutButton = page.locator("text=Checkout")
        this.cartProducts = page.locator(".items")
    }
    
    getProductLocator(product_Name)
    {
        return this.page.locator("h3:has-text('"+product_Name+"')")
    }

    async verify_product_is_Displayed(product_Name)
    {
        const productLocator = this.getProductLocator(product_Name)
        await this.cartProducts.waitFor()
        const isVisible = await productLocator.isVisible()
        await expect(isVisible).toBeTruthy()
    }

    async navigate_to_Checkout()
    {
        await this.checkoutButton.click()
    }

}
module.exports = {CartPage}