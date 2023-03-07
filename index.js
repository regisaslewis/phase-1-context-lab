/* Your Code Here */

const createEmployeeRecord = function (arr) {
    const emp = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return emp;
}

const createEmployeeRecords = function (dudes) {
    return dudes.map(e => createEmployeeRecord(e));
}

const createTimeInEvent = function (stamp) {
    let obj = {
        type: "TimeIn",
        hour: Number(stamp.slice(11, 15)),
        date: stamp.slice(0, 10)
    };
    this.timeInEvents.push(obj);
    return this;
}

const createTimeOutEvent = function (stamp) {
    let obj = {
        type: "TimeOut",
        hour: Number(stamp.slice(11, 15)),
        date: stamp.slice(0, 10)
    };
    this.timeOutEvents.push(obj);
    return this;
}

const hoursWorkedOnDate = function (dateStamp) {
    for (let i = 0; i < this.timeInEvents.length; i++) {
        if (this.timeInEvents[i].date === dateStamp) {
            return (this.timeOutEvents[i].hour - this.timeInEvents[i].hour) / 100;
        }
    }
}

const wagesEarnedOnDate = function (dateStamp) {
    let workHours = hoursWorkedOnDate.call(this, dateStamp);
    return workHours * this.payPerHour;
}

const findEmployeeByFirstName = function (srcArray, nameString) {
    for (let emp of srcArray) {
        if (emp.firstName === nameString) {
            return emp;
        }
    }
}

const calculatePayroll = function (arr) {
    let payrollTotal = [];
    for (let i = 0; i < arr.length; i++) {
        payrollTotal.push(allWagesFor.call(arr[i]));
    }
    return payrollTotal.reduce((a, b) => a + b, 0);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
