const removeFromArray = function (arr, ...args) {
    /* This modifies original array
    for (let i = 0; i < args.length; i++) {
        let ele = args[i];
        let index = arr.indexOf(ele);
        if (index == -1)
            continue;
        arr.splice(index, 1);
    }
    return arr;
    */
    
    /* Doesn't modify the original array
    const newArr = [];
    arr.forEach(element => {
        if (!args.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
    */
    
    return arr.filter(element => {
        return !args.includes(element);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
