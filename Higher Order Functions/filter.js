// filter method

const second = [5, 1, 3, 2, 6];

// filter out odd values

// First Way

const isOdd = function (value) {
  return value % 2 === 1;
};

console.log(second.filter(isOdd));
