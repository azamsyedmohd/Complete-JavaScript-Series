// reduce method

const third = [5, 1, 3, 2, 6];

// Finding the sum of the values of the array.

const sum = third.reduce(function (sum, value) {
  return sum + value;
}, 0);
