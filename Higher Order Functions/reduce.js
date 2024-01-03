// reduce method

const third = [5, 1, 3, 2, 6];

// Finding the sum of the values of the array.

const sum = third.reduce(function (sum, value) {
  return sum + value;
}, 0);

// Finding the maximum of the values of an array

const maximum = third.reduce(function (max, value) {
  return max > value ? max : value;
}, -Infinity);

console.log("Maximum Value : " + maximum);
