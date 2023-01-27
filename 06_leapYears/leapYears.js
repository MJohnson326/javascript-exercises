const leapYears = function(year) { //parameter is a year

if ((year %4===0) &&((year % 100 !==0)|| ((year % 400)===0))){// divisible by 4 but non centurn unless divided by 400
    return true
}else {
    return false}
}


 

// Do not edit below this line
module.exports = leapYears;
