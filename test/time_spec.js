var home_page = require("../page/home_page.js");

describe("Проверка вычисления оставшегося рабочего времени", function () {

    beforeEach(function () {

        browser.driver.get("http://workhourglass.com");
        browser.ignoreSynchronization = true;

        home_page.setStartDate(1, 12, 2016);
        home_page.setEndDate(31, 12, 2016);
        home_page.setHoursWorked(8);
        home_page.emptyClick();
        //set holidays ...
        //set work days ...
    });

    it("за день", function () {
        home_page.setHoursWorked(5);
        expect(home_page.getDayHours()).toEqual(5);
    });

    it("за месяц", function () {
        expect(home_page.getMonthHours()).toEqual(176);
    });

    it("за неделю", function () {
        expect(home_page.getWeekHours()).toEqual(16);
    });

    it("за год", function () {
        expect(home_page.getYearHours()).toEqual(176);
    });

});