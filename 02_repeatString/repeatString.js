const repeatString = function (string, num) {
    if (num < 0)
        return "ERROR";
    let ans = ``;
    while (num--) {
        ans += `${string}`;
    }
    return ans;
};

// Do not edit below this linef
module.exports = repeatString;
