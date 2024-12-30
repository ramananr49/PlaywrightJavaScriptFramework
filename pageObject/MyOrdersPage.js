class MyOrdersPage
{
    constructor(page)
    {
        this.page = page
        this.datatable = page.locator("tbody")
        this.datarow = page.locator("tbody tr")
    }

    async search_order_and_click_view(OrderID)
    {
        await this.datatable.waitFor();
        const rows = await this.datarow
        const rowCount = await rows.count()
        console.log(rowCount)
    
        for(let j=0; j<rowCount; j++)
        {
            const roworderID = await rows.nth(j).locator("th").textContent()
            console.log(roworderID)
            if (OrderID.includes(roworderID))
            {
                await rows.nth(j).locator("button").first().click()
                break
            }
        }
    }
    



}
module.exports = {MyOrdersPage}