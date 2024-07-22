const removeFromArray = function(array, ...args) {
    let result = array.filter((argument) => {
        return !args.includes(argument);
    });
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
