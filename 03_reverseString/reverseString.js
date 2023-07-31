const reverseString = function (string) {
    /*
    let n = string.length, j = n - 1, ans = ``;
    while (j >= 0) {
        ans += string[j--];
    }
    */
    return string.split("").reverse().join("");
    // split method takes two arguments and returns a new array.
    // 1st : (optional) A string or regular expression used for splitting
    // If skipped array with original string as the only element is returned
    // 2nd : An integer that limits the items in array
    // items after the limit are excluded.

    // join method of arrays takes an optional argument and returns a string
    // joins using this separator. Default separator is ','
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
