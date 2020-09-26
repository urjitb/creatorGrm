const puppeteer = require("puppeteer")

let test = "https://instagram.com"



class create {

    constructor(delays,mode,reset,manual="") {
        this.delays = delays;
        this.mode = mode;
        this.reset = reset;
        this.manual = manual;
}



async createAccount(){
    const browser = await puppeteer.launch({
        headless: false,
        args: [ '--window-size=720,1280',
            '--disable-webgl',
            '--disable-gpu-sandbox',
            '--disable-extensions-except=C:\\Users\\delus\\WebstormProjects\\creatorGrm\\exts\\hr,C:\\Users\\delus\\WebstormProjects\\creatorGrm\\exts\\cd,C:\\Users\\delus\\WebstormProjects\\creatorGrm\\exts\\cy'
        ]
    });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/85.0.4183.92 Mobile/15E148 Safari/604.1')
    await page.setViewport({ width: 0, height: 0 });
    await page._client.send('Emulation.clearDeviceMetricsOverride');
    await page.goto('https://instagram.com/');
    await page.waitForSelector('input[name=username]');
    await page.type('input[name=username]','test',{delay: 20})
    }


}
module.exports = { create }