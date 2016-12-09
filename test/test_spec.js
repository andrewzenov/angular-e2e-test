var home_page = require("../page/home_page.js");

describe("Проверка коректности вычислений оставшегося времени", function () {

    beforeEach(function () {
        browser.driver.get("http://workhourglass.com");
        browser.ignoreSynchronization = true;
        browser.driver.findElement(by.css("#live")).click();
        browser.ignoreSynchronization = false;
    });

    it("проверка передачи work_days",function () {
       // var lng=home_page.getWorkDays().days.length();
       // console.log(lng);
    });




});