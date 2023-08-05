const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, element) => total + element, 0);
};

const multiply = function(array) {
  return array.reduce((product, element) => product * element, 1);
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function (a) {
  if (a == 0) return 1;
  return a * factorial(a - 1);
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
