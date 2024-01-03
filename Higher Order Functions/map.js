// map method

const first = [5, 1, 3, 2, 6];

// Double -- [10,2,6,4,12]

// Tripple -- [15,3,9,6,18]

// Binary -- ["101","001","011","010","110"]

// First Way
const double = function (value) {
  return value * 2;
};

const tripple = function (value) {
  return value * 3;
};

const binary = function (value) {
  return value.toString(2);
};

console.log(first.map(double));
console.log(first.map(tripple));
console.log(first.map(binary));

// Second Way

console.log("**********************");
console.log(first.map((val) => val * 2));
console.log(first.map((val) => val * 3));
console.log(first.map((val) => val.toString(2)));
