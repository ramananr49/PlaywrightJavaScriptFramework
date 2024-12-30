const {expect} = require('@playwright/test')

class ForgotPasswordPage
{
    constructor(page)
    {
        this.page = page
        this.enternewpasswordHeader = page.locator("h3.card-title")
        this.emailTextbox = page.locator('input[type="email"]')
        this.passwordTextbox = page.locator('input#userPassword')
        this.confirmpasswordtextbox = page.locator('input#confirmPassword')
        this.saveNewPasswordButton = page.getByRole("button", {name:'Save New Password'})
        this.toastMsgText = page.locator(".toast-title")
        this.registerLink = page.locator("[href*='register']")
    }

    async verify_the_EnterNewPassword_header()
    {
        await expect(this.enternewpasswordHeader).toHaveText("Enter New Password")
        console.log("Verified Enter New Password Header")
    }

    async valid_forgotpassword(email, password)
    {
        await this.emailTextbox.fill("testacc01@gmail.com")
        await this.passwordTextbox.fill("Learning@123")
        await this.confirmpasswordtextbox.fill("Learning@123")
        await this.saveNewPasswordButton.click()
    }

    async verify_password_change_successMsg(expectedText)
    {
        expect(await this.toastMsgText).toHaveText(expectedText)
    }

    async click_register_link()
    {
        this.registerLink.click()
    }
}
module.exports = {ForgotPasswordPage}