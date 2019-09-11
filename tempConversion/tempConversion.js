const ftoc = function(farenheit) {
  var celcius = (farenheit - 32) * (5 / 9);
  return roundToOneDecimal(celcius);
}

const ctof = function(celcius) {
  var farenheit = (celcius * (9 / 5)) + 32;
  return roundToOneDecimal(farenheit);
}

function roundToOneDecimal(num) {
  return Math.round(num * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
