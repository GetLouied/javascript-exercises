const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((add), 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current, 1);
};

const power = function(num1, power1) {
	return num1 ** power1;
};

const factorial = function(num) {
	let factorArray = []
  for (let i = num; i > 0; i--) {
    factorArray.push(i);
  }
  return factorArray.reduce((product, current) => product * current, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
