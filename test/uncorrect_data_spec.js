var home_page = require("../page/home_page.js");

describe("Проверка некорректных установок", function () {

    beforeEach(function () {
        browser.driver.get("http://workhourglass.com");
        browser.ignoreSynchronization = true;
    });

    // различные варианты с некорректными данными
    //...

    describe("начало рабочего времени после его фактического завершения", function () {
        beforeEach(function () {
            home_page.setStartDate(22, 2, 2017);
            home_page.setEndDate(31, 12, 2016);
        });

        it("должно быть 0 часов в день", function () {
            expect(home_page.getDayHours()).toEqual(0);
        });

        it("должно быть 0 часов в неделю", function () {
            expect(home_page.getWeekHours()).toEqual(0);
        });

        it("должно быть 0 часов в месяц", function () {
            expect(home_page.getMonthHours()).toEqual(0);
        });

        it("должно быть 0 часов в год", function () {
            expect(home_page.getYearHours()).toEqual(0);
        });
    });
});