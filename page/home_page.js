var work_days = require("./pageElement/work_days.js");


var home_page = function () {

    this.setStartDate = function (day, month, year) {
        var value = day + "." + month + "." + year;
        var elem = element(by.model("refTimeRaw"));
        elem.clear();
        elem.sendKeys(value);
        this.emptyClick();
    };

    this.setEndDate = function (day, month, year) {
        var value = day + "." + month + "." + year;
        var elem = element(by.model("endTimeRaw"));
        elem.clear();
        elem.sendKeys(value);
        this.emptyClick();
    };

    this.setHoursWorked = function (value) {
        var elem = element(by.model("workHoursInDayRaw"));
        elem.clear();
        elem.sendKeys(value);
        this.emptyClick();
    };

    this.emptyClick = function () {
        element(by.id("boxes")).click();
    };

    this.changeUpdateLive = function () {
        element(by.model("liveupdate")).click();
    };

    this.setQuittingTime = function (hour, minute, meridianAMorPM) {
        element(by.model('endHourOfDayRaw')).click();
        var hour = element(by.name('hour'));
        // hour.click();
        // hour.clear();
        hour.sendKeys(hour);
        var minute = element(by.name('minute'));
        // minute.click();
        // hour.clear();
        minute.sendKeys(minute);
        var meridian = element(by.name('meridian'));
        minute.click();
        hour.clear();
        minute.sendKeys(meridianAMorPM);
        this.emptyClick();
    };

    this.getWorkDays = function () {
        return work_days;
    };

    this.getDayHours = function () {
        return element(by.css("#boxes .first .timebox .ng-binding")).getText().then(function (text) {
            return +text;
        });
    };

    this.getWeekHours = function () {
        return element(by.css("#boxes .box:nth-child(2) b")).getText().then(function (text) {
            return +text;
        });
    };

    this.getMonthHours = function () {
        return element(by.css("#boxes .box:nth-child(3) b")).getText().then(function (text) {
            return +text;
        });
    };

    this.getYearHours = function () {
        return element(by.css("#boxes .last b")).getText().then(function (text) {
            return +text;
        });
    };

    var work_days = function () {
        return require("./pageElement/work_days.js");
    };
};

module.exports = new home_page();