const palindromes = function (str) {
    let stringArray = str.toLowerCase().replace(/[^A-Za-z0-9\s]/g, '').split(' ');
    let palArray = stringArray.join('');
    let checkArray = palArray.slice().split('').reverse().join('');
    return palArray === checkArray;

};

// Do not edit below this line
module.exports = palindromes;
