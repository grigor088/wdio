const Page = require("./page")

class PastebinPage extends Page {

    open(path) {
        return super.open('')
    }

    get pasteText(){
        return $('#postform-text')
    }

    get getSelectMinuteSelector(){
        return $$('.select2-selection__arrow')[1]

    }

    get scroll(){
        const selectEl = $$('.select2-selection__arrow')[1]
        selectEl.scrollIntoView({block:"center"})
    }

    get selectMinuteClick(){
        const selectEl = $$('.select2-selection__arrow')[1]
        selectEl.click()
    }

    get arrowDown() {
        return browser.keys("ArrowDown")
    }
    get scrollForPasteName(){
        const selectEl = $("#postform-name")
        selectEl.scrollIntoView({block:"center"})
    }

    get pasteNameElement () {
        return $("#postform-name")
    }

    get syntaxHighlighting() {
        return $$('.select2-selection__arrow')[0]
    }

    get getPasteExperation() {
        return $('.select2-search__field')
    }

    get bashBtn() {
        return $(".left a");
    }

    get bashText() {
        const btnText = this.bashBtn.getText
        return btnText;
    }

    get getCodeFromSecondPage() {
        const classOfSecondPage = $(".de1");
        return classOfSecondPage.getText;
    }

}

module.exports = new PastebinPage();