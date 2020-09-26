const puppeteer = require("puppeteer")

let test = "https://instagram.com"

class create{

    constructor(delays,mode,reset,manual="") {
        this.delays = delays;
        this.mode = mode;
        this.reset = reset;
        this.manual = manual;

    }

async createAccount(){

    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--disable-extensions-except=./exts/jk.crx,./exts/lk.crx'
        ]
    });
    const page = await browser.newPage();
    await page.goto('https://example.com');



}


}
module.exports = { create }