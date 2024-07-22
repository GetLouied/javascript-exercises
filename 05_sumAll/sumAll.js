const sumAll = function(num1, num2) {
    let start, end;

    if (num1 < 0 || num2 < 0 || typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return "ERROR";
    } else if (num1 - Math.floor(num1) !== 0 || num2 - Math.floor(num2) !== 0) {
        return "ERROR";
    }

    if (num1 < num2) {
        start = num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    }

    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
