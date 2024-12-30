const {test, expect} = require('@playwright/test')
const { POManager } = require('../pageObject/POManager')
const { OrderConfirmPage } = require('../pageObject/OrderConfirmPage')

const jsonString = JSON.stringify(require('../testData/EndtoEnd_TestData.json'))
const dataset = JSON.parse(jsonString)

test('Validate that order placed Successfully', async ({page})=>
{
    const poManager = new POManager(page)
    const loginpage = poManager.get_loginpage()
    await loginpage.navigateToApp()
    await loginpage.valid_Login(dataset.username, dataset.password)

    const dashboardpage = poManager.get_dashboardpage()
    await dashboardpage.searchTheProductAddToCart(dataset.productName)
    await dashboardpage.navigateToCartTab()
    
    const cartpage = poManager.get_cartpage()
    await cartpage.verify_product_is_Displayed(dataset.productName)
    await cartpage.navigate_to_Checkout()

    const paymentpage = poManager.get_paymentpage()
    await paymentpage.search_country_and_Select(dataset.country)
    await paymentpage.verify_email(dataset.username)
    await paymentpage.place_the_Order()

    const orderconfirmpage = poManager.get_orderconfirmpage()
    await orderconfirmpage.verify_thankyou_message()
    const orderID = await orderconfirmpage.get_orderID()
    console.log(orderID)
    await orderconfirmpage.navigate_to_OrderHistoryPage()

    const myorderspage = poManager.get_myorderspage()
    await myorderspage.search_order_and_click_view(orderID)

    const ordersummarypage = poManager.get_ordersummarypage()
    await ordersummarypage.verify_orderid(orderID)

})