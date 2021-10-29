
const pastebin = require('../pageobjects/pastebin.page');

describe('PasteBin', () => {

    it('should  open page', async () => {
        await pastebin.open()
    });
    it("write text", async function (){
        await pastebin.pasteText.setValue('git config --global user.name  "New Sheriff in Town"\n' +
            'git reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n' +
            'git push origin master --force')
    })
    it("select 10 minute", async function (){
        await pastebin.getSelectMinuteSelector
        await pastebin.scroll
        await pastebin.selectMinuteClick
        await pastebin.arrowDown
        await pastebin.arrowDown
        await browser.keys("Enter");
    })


    it('should syntax highlighting choose bash', async function () {
        await  pastebin.syntaxHighlighting
        await pastebin.syntaxHighlighting.scrollIntoView({block: "center"})
        await pastebin.syntaxHighlighting.click()
        await pastebin.getPasteExperation.setValue("Bash")
        await browser.keys("Enter")
        await browser.pause(2000)

    });
    it ("should add paste Name", async () => {
        await pastebin.pasteNameElement
        await pastebin.scrollForPasteName
        await pastebin.pasteNameElement.setValue( 'how to gain dominance among developers')
        await browser.keys('Enter')
        await browser.pause(2000)

    })

    it('should verify browser title ', async function () {
        expect(browser.getTitle()).toHaveTextContaining("Pastebin.com - #1 paste tool since 2002!")
    });
    it('get syntax text ', async function (){

        //await pastebin.bashText;
        expect(pastebin.bashText).toHaveText('Bash');
    })

    it('should check the code text', async function () {
        expect(pastebin.getCodeFromSecondPage).toHaveText("git config --global user.name  \"New Sheriff in Town\"\\n' +\n" +
            "            'git reset $(git commit-tree HEAD^{tree} -m \"Legacy code\")\\n' +\n" +
            "            'git push origin master --force")
    });

});

