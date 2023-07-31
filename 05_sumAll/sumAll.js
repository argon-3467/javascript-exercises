const sumAll = function(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number')
        return 'ERROR';
    if (num1 < 0 || num2 < 0)
        return 'ERROR';
    // swap to make num1 small
    if (num1 > num2) {
        // using temp variable
        // [num1, num2] = [num2, num1];
        num1 = num2 / (num2 = num1, 1);
    }
    return (num2 - num1) * (num2 + num1 + 1) / 2 + num1;
};

// Do not edit below this line
module.exports = sumAll;
