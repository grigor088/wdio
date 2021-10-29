import Page from "./page";

class BookPage extends Page{

    open(){
        return super.open('/?ref_=nav_signin&')
    }

    get seeMoreButton(){
        return $('.a-cardui-footer').click()

    }

    get scrollDown(){
        return $('.a-cardui-footer').scrollIntoView()
    }

}

export default new BookPage()