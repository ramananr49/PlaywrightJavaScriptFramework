class DashboardPage
{
    constructor(page)
    {
        this.page = page
        this.cardTile = page.locator(".card-body")
        this.cardTitles = page.locator(".card-body h5 b")
        this.cartTab = page.locator("[routerlink='/dashboard/cart']")
        
    }


    async searchTheProductAddToCart(product_Name)
    {
        const titles = await this.cardTitles.allTextContents()
        console.log(titles)
    
        const products = await this.cardTile
        const count = await products.count()
        for(let i=0; i<count; i++)
        {
            if(await products.nth(i).locator('h5 b').textContent() === product_Name)
            {
                await products.nth(i).locator("text= Add To Cart").click()
                break
            }
        }
    }
    
    async navigateToCartTab()
    {
        await this.cartTab.click()
    }
}
module.exports = {DashboardPage}