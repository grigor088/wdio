import Page from './page';

class LoginPage extends Page {

    get moveToSignIn(){
        return $('#nav-link-accountList-nav-line-1').moveTo()
    }
    get signInClick(){
        return $('#nav-flyout-ya-signin').click()
    }
    emailInput(email){
        return $('#ap_email').setValue(email)
    }
    get continueBtn(){
        return  $('.a-button-input').click()
    }
    passwordInput(password){
        return $('#ap_password').setValue(password)
    }
    get signInSubmit(){
        return $('#signInSubmit').click()
    }

    async login (email, password) {
        await this.emailInput(email)
        await this.continueBtn
        await this.passwordInput(password);
        await this.signInSubmit;
    }

    open () {
        return super.open('');
    }
}

export default new LoginPage();
