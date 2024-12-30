const {test, expect} = require('@playwright/test')
const { POManager } = require('../pageObject/POManager')

const jsonString = JSON.stringify(require('../testData/LoginFunctionality_TestData.json'))
const dataset = JSON.parse(jsonString)

for ( const data of dataset)
{
    test(`Valid Login with parameterised testdata for ${data.username}`, async ({page})=>
        {
            const poManager = new POManager(page)
            const loginpage = poManager.get_loginpage()
            await loginpage.navigateToApp()
            await loginpage.valid_Login(data.username, data.password)
            console.log("Login Successful")
        })
}

test('Verify the Forgot Password functionality', async ({page}) =>
{
    const poManager = new POManager(page)
    const loginpage = poManager.get_loginpage()
    await loginpage.navigateToApp()
    await loginpage.click_forgot_password_link()
    const forgotpasswordpage = poManager.get_forgotpasswordpage()
    await forgotpasswordpage.verify_the_EnterNewPassword_header()
    await forgotpasswordpage.valid_forgotpassword("testacc01@gmail.com", "Learning@123")
    await forgotpasswordpage.verify_password_change_successMsg("Password Changed Successfully")
})

test('Verify the different navigation to Register page', async ({page}) =>
{
    const poManager = new POManager(page)
    const loginpage = poManager.get_loginpage()
    await loginpage.navigateToApp()
    await loginpage.click_register_button()
    const registerpage = poManager.get_registerpage()
    await registerpage.verify_register_header()
    await registerpage.click_loginhere_link()
    await loginpage.verify_login_header()
    await loginpage.click_register_here_link()
    await registerpage.verify_register_header()
    await registerpage.click_loginhere_link()
    await loginpage.verify_login_header()
    await loginpage.click_forgot_password_link()
    const forgotpasswordpage = poManager.get_forgotpasswordpage()
    await forgotpasswordpage.verify_the_EnterNewPassword_header()
    await forgotpasswordpage.click_register_link()
    await registerpage.verify_register_header()
})

const jsonStr1 = JSON.stringify(require('../testData/registerUserAlready_TestData.json'))
const data1 = JSON.parse(jsonStr1)
console.log(data1)
test('verify register functionality for existing user', async ({page}) =>
{
    const poManager = new POManager(page)
    const loginpage = poManager.get_loginpage()
    await loginpage.navigateToApp()
    await loginpage.click_register_button()
    const registerpage = poManager.get_registerpage()
    await registerpage.verify_register_header()
    await registerpage.fill_and_click_register(data1.firstname, data1.lastname, data1.email, data1.PhoneNo, data1.occupation, data1.Gender, data1.password)
    await registerpage.verify_user_already_exist_Toastmsg()
}) 