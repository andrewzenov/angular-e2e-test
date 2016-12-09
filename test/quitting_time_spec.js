var home_page = require("../page/home_page.js");

describe("Проверка вычисления оставшегося рабочего времени с учетом изменения quitting time", function () {

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

    describe("Рабочее время заканчивается в 6:0 pm", function () {

        beforeEach(function () {
          home_page.setQuittingTime(4,0,'pm');
        });

        it("за день", function () {
            // home_page.setHoursWorked(5);
            expect(home_page.getDayHours()).toEqual(8);
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
});