const {expect} = require('@playwright/test')

class RegisterPage
{
    constructor(page)
    {
        this.page = page
        this.registerTitle = page.locator("h1.login-title")
        this.loginhereLink = page.locator("a.text-reset")
        this.firstnameTextbox = page.locator("#firstName")
        this.lastnameTextbox = page.locator("#lastName")
        this.emailTextbox = page.locator("#userEmail")
        this.phoneNoTextbox = page.locator("#userMobile")
        this.occupationDropdown = page.locator("select.custom-select")
        this.maleRadioBtn = page.locator('[value="Male"]')
        this.femaleRadioBtn = page.locator('[value="Female"]')
        this.passwordTextbox = page.locator('#userPassword')
        this.confirmpasswordTextbox = page.locator('#confirmPassword')
        this.requiredCheckBox = page.locator('[formcontrolname="required"]')
        this.registerButton = page.locator('[value="Register"]')
        this.registertoastMsg = page.locator(".toast-message")
    }

    //  Dynamic Locator
    get_genderLocator(gender)
    {
        return this.page.locator()
    }

    async verify_register_header()
    {
        await expect(this.registerTitle).toHaveText("Register")
        console.log("Verified Register Header")
    }

    async click_loginhere_link()
    {
        await this.loginhereLink.click()
    }

    async fill_and_click_register(fname, lname, email, phoneNo, occupation, gender, password)
    {
        await this.firstnameTextbox.fill(fname)
        await this.lastnameTextbox.fill(lname)
        await this.emailTextbox.fill(email)
        await this.phoneNoTextbox.fill(phoneNo)
        await this.occupationDropdown.selectText(occupation)
        if (gender === "Male")
        {
            await this.maleRadioBtn.click()
        }
        else if(gender === "Female") 
        {
            await this.femaleRadioBtn.click()
        }
        await this.passwordTextbox.fill(password)
        await this.confirmpasswordTextbox.fill(password)
        await this.requiredCheckBox.click()
        await this.registerButton.click()
    }

    async verify_user_already_exist_Toastmsg()
    {
        const toastMsg = await this.registertoastMsg.textContent()
        await expect(toastMsg).toContain("User already exisits with this Email Id!")
    }
    
}
module.exports = {RegisterPage}