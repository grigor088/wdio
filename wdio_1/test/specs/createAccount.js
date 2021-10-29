// describe('create account ', function (){
//     it("registration form", async function (){
//         browser.url('https://account.magento.com/applications/customer/create/')
//         const registrationForm = await $('#form-validate')
//         const firstName = await registrationForm.$('input[name="firstname"]').setValue('Grigor')
//         const lastname = await registrationForm.$('input[name="lastname"]').setValue('Harutyunyan')
//         const companyName = await registrationForm.$('#self_defined_company').setValue('Epam')
//
//         const companyTypeSelect = await registrationForm.$('#company_type')
//         await companyTypeSelect.selectByAttribute('value', 'deployment')
//
//         const email = `Grigor${new Date().getTime()/ 1000}@epam.com`
//         await registrationForm.$('#email_address').setValue(email)
//
//         const myRoleSelect = await registrationForm.$('#individual_role')
//         await myRoleSelect.selectByAttribute('value', 'technical/developer')
//
//         const myCountrySelect = await registrationForm.$('#country')
//         await myCountrySelect.selectByAttribute('value', 'AM')
//
//         const password = `Grig${new Date().getTime()/ 1000}`
//         await registrationForm.$('#password').setValue(password)
//
//         await registrationForm.$('#password-confirmation').setValue(password)
//         await browser.pause(5000)
//
//         const checkbox = await registrationForm.$('#agree_terms').click()
//         await browser.pause(7000)
//         // const rechapta = await registrationForm.$('#recaptcha-anchor').click()
//     })
// })