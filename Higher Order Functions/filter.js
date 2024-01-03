// filter method

const second = [5, 1, 3, 2, 6];

// filter out odd values

// First Way

const isOdd = function (value) {
  return value % 2 === 1;
};

const isEven = function (value) {
  return value % 2 === 0;
};

console.log(second.filter(isOdd));
console.log(second.filter(isEven));
// Second Way

console.log(second.filter((value) => value % 2 === 1));
console.log(second.filter((value) => value % 2 === 0));
