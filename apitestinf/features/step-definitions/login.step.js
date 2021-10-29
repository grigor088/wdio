const {When, Then, Given} = require('@wdio/cucumber-framework')
import LoginPage from '../pageobjects/login.page';
import BookPage from '../pageobjects/book.page';

Given(/^I am in sign in page$/, async function (){
    await LoginPage.open()
})

When(/^I login with my account$/,async function (){

    await LoginPage.moveToSignIn
    await LoginPage.signInClick
    await LoginPage.login('grigor.harutyunyan.16.1998@gmail.com', 'grigor9800')

})

Then(/^I shall be in a Ebay header page$/, async function (){
    const url = browser.getUrl()
    await console.log('url is :', url)
})

Then(/^I Wont see Shop Laptops and Tablets page$/, async function (){
    await BookPage.open()
    await BookPage.scrollDown
    await BookPage.seeMoreButton
    await browser.pause(4000)
})
