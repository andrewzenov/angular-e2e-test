var work_days = function () {

    this.Sun = element(by.model("workdays0"));

    this.Mon = element(by.model("workdays1"));

    this.Tue = element(by.model("workdays2"));

    this.Wed = element(by.model("workdays3"));

    this.Thu = element(by.model("workdays4"));

    this.Fri = element(by.model("workdays5"));

    this.Sat = element(by.model("workdays6"));

    this.days = [this.Sun, this.Mon, this.Sun, this.Tue, this.Wed, this.Thu, this.Fri, this.Sat];

    this.isWorkDay = function (dayOfWeek) {
        return dayOfWeek.checked;
    };

    this.changeCheckBox = function (dayOfWeek) {
        dayOfWeek.click();
    };

    this.clearAllMarks = function () {

        for (day in this.days) {
            if (this.isWorkDay(day)) {
                this.changeCheckBox(day);
            }
        }
    };
};

module.exports = new work_days();