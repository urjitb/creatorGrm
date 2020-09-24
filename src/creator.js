const webdriver = require("selenium-webdriver")

let test = "https://test.com?"

class create{

    constructor(delays,mode,reset,manual="") {
        this.delays = delays;
        this.mode = mode;
        this.reset = reset;
        this.manual = manual;
2
    }

createAccount(){

const driver = new webdriver.Builder().forBrowser("chrome").build()
console.log(test + this.delays.toString() +this.mode+this.reset)

}


}
module.exports = { create }