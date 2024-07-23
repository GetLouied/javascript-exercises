const convertToCelsius = function(temperature) {
  let tempInCelsius = (5/9)* (temperature - 32);

  return Number(tempInCelsius.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  let tempInFahrenheit = ((9/5) * temperature) + 32;

  return Number(tempInFahrenheit.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
