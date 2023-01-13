const sumAll = function(num1, num2) {
    // 2 parameters with lowest and highest value
    // create variable out of lowest value and increment up to the highest value and return
    let base = 0;
    let upper = 0;
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (Number.isInteger(num1) === false || Number.isInteger(num2) === false) {
        return "ERROR";
    }

    if (num1 < num2) {
        base = num1;
        upper = num2;
    } else {
        base = num2;;
        upper = num1
    }
    let finalNum = 0;
    for (n = base; base <= upper; base++) {
        finalNum += base;
    }
    return finalNum;
};

// Do not edit below this line
module.exports = sumAll;
