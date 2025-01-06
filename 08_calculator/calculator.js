const add = function(m, n) {
  return m + n;
};

const subtract = function(m, n) {
  return m - n;
};

const sum = function(arr) {
  return arr.reduce((total, current) => total += current, 0);
};

const multiply = function (arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((total, current) => total *= current, 1);
};

const power = function(m, n) {
	let out = m
  for (let i = 0; i < n-1; ++i)
    out *= m;
  return out;
};

const factorial = function(m) {
  let out = 1;
  for (m; m > 0; --m)
    out *= m;
  return out;
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
