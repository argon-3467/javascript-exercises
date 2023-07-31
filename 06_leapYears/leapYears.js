const leapYears = function(year) {
    /*
    if (year % 4)
        return false;
    else {
        if (year % 100)
            return true;
        else
            return !(year % 400);
    }
    */
    return year % 4 === 0 && (year % 100 != 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
