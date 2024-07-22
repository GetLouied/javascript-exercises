const reverseString = function(string) {
    let reversedString = [];
    let arrayString = string.split("");
    let i = 0;

    while (i < arrayString.length) {
        reversedString.push(arrayString.pop());
    }

    return reversedString.join("");

};

// Do not edit below this line
module.exports = reverseString;
