const moment = require('moment');

//const objRoster1 = { "Id": 1, "Employee": 1, "Department": 1, "StartTime": 1508450400, "EndTime": 1508479200 };

function isOverlapped(shiftOne, shiftTwo) {
    // Compare startTime to endTime of shift
        // if startime is lessThan endTime - Shifts overlap
    console.log('here is shift one: ', shiftOne);
    const startTime1 = moment(shiftOne.StartTime).format('dddd, MMMM Do YYYY, h:mm:ss a');
    const endTime1 = moment(shiftOne.EndTime).format('dddd, MMMM Do YYYY, h:mm:ss a');

    console.log('Here is shift one start time: ', startTime1);
    console.log('Here is shift one end time: ', endTime1);

    const startTime2 = moment(shiftTwo.StartTime).format('dddd, MMMM Do YYYY, h:mm:ss a');
    const endTime2 = moment(shiftTwo.EndTime).format('dddd, MMMM Do YYYY, h:mm:ss a');

    console.log('Here is shift one start time: ', startTime2);
    console.log('Here is shift one end time: ', endTime2);

    if(startTime2 === startTime1 || endTime2 === endTime1 ) {
        return true;
    } else if(startTime2 > startTime1) {
        // Then EndTime1 must be less than startTime2
        if(endTime1 > startTime2) {
            return true;
        } else {
            return false;
        }
    } else if (startTime2 < startTime1) {
        if(endTime2 > startTime1) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(Date.now());
console.log(Date.now() + (300 * 60));
let result = isOverlapped(
    { "StartTime": Date.now(), "EndTime": moment(Date.now()).add(5, 'h') },
    { "StartTime": moment(Date.now()).add('30', 'm'), "EndTime": moment(Date.now()).add(4, 'h') }
    );
console.log('Are the shifts overlapped: ', result);

const currDate = Date.now();
result = isOverlapped(
    { "StartTime": currDate, "EndTime": moment(currDate).add(3, 'h') },
    { "StartTime": moment(currDate).add('3', 'h').subtract(2, 'm'), "EndTime": moment(currDate).add(4, 'h') }
    );
console.log('Are the shifts overlapped: ', result);

result = isOverlapped(
    { "StartTime": currDate, "EndTime": moment(currDate).add(3, 'h') },
    { "StartTime": moment(currDate).subtract(5, 'm'), "EndTime": moment(currDate).add(6, 'h') }
    );
console.log('Are the shifts overlapped: ', result);