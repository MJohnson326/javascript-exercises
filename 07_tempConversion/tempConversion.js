const convertToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * (5/9))// F to C math conversion
  return Math.round(celsius*10)/10 //rounds to one decimal place
  
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit =((celsius * (9/5))+32)// C to F math conversion
  return Math.round(fahrenheit *10)/10 // rounds to one decimal place
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
