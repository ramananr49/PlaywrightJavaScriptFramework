const { CartPage } = require("./cartPage")
const { DashboardPage } = require("./DashboardPage")
const { ForgotPasswordPage } = require("./ForgotPasswordPage")
const { LoginPage } = require("./LoginPage")
const { MyOrdersPage } = require("./MyOrdersPage")
const { OrderConfirmPage } = require("./OrderConfirmPage")
const { OrderSummaryPage } = require("./OrderSummaryPage")
const { PaymentPage } = require("./PaymentPage")
const { RegisterPage } = require("./RegisterPage")

class POManager
{
    constructor(page)
    {
        this.page = page
        this.loginpage = new LoginPage(this.page)
        this.dashboardPage = new DashboardPage(this.page)
        this.cartPage = new CartPage(page)
        this.paymentpage = new PaymentPage(page)
        this.orderconfirmpage = new OrderConfirmPage(page)
        this.myorderspage = new MyOrdersPage(page)
        this.ordersummarypage = new OrderSummaryPage(page)
        this.forgotpasswordpage = new ForgotPasswordPage(page)
        this.registerpage = new RegisterPage(page)
    }

    get_loginpage()
    {
        return this.loginpage
    }

    get_dashboardpage()
    {
        return this.dashboardPage
    }

    get_cartpage()
    {
        return this.cartPage
    }

    get_paymentpage()
    {
        return this.paymentpage
    }

    get_orderconfirmpage()
    {
        return this.orderconfirmpage
    }

    get_myorderspage()
    {
        return this.myorderspage
    }

    get_ordersummarypage()
    {
        return this.ordersummarypage
    }

    get_forgotpasswordpage()
    {
        return this.forgotpasswordpage
    }

    get_registerpage()
    {
        return this.registerpage
    }
}
module.exports = {POManager}