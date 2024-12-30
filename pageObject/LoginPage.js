const {expect} = require('@playwright/test')

class LoginPage
{

    constructor(page)
    {
        this.page = page
        this.loginTitle = page.locator("h1.login-title")
        this.usernameTxtbox = page.locator("#userEmail")
        this.passwordTxtbox = page.locator("#userPassword")
        this.loginButton = page.locator("[value='Login']")
        this.forgotpasswordLink = page.getByRole("link", {name:"Forgot password?"})
        this.registerButton = page.locator("a.btn1")
        this.registerhereLink = page.locator("a.text-reset")
    }

    async navigateToApp()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/")
    }

    async valid_Login(username, password)
    {
        await this.usernameTxtbox.fill("testacc01@gmail.com")
        await this.passwordTxtbox.fill("Learning@123")
        await this.loginButton.click()
        await this.page.waitForLoadState('networkidle')
    }

    async click_forgot_password_link()
    {
        await this.forgotpasswordLink.click()
    }

    async click_register_button()
    {
        await this.registerButton.click()
    }

    async verify_login_header()
    {
        await expect(this.loginTitle).toHaveText("Log in")
        console.log("Verified Log in Header")
    }

    async click_register_here_link()
    {
        await this.registerhereLink.click()
    }

}

module.exports = {LoginPage}