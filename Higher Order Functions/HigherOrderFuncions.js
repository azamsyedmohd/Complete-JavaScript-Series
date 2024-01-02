// Higher Order Functions
// Higher Order Function are those function which takes a function as a parameter or returns the function as a value.

const radius = [3, 1, 2, 4];

const calculateArea = function (input) {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(Math.PI * input[i] * input[i]);
  }
  return output;
};

const calculateCircumference = function (input) {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(Math.PI * 2 * input[i]);
  }
  return output;
};

const calculateDiameter = function (input) {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(2 * input[i]);
  }
  return output;
};

console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
console.log(calculateDiameter(radius));
