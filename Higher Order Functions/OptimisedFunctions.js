// Optimised way
const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

const calculateArea = function (radius, area) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(area(radius[i]));
  }
  return output;
};

const calculateCircumference = function (radius, circumference) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(circumference(radius[i]));
  }
  return output;
};

const calculateDiameter = function (radius, diameter) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(diameter(radius[i]));
  }
  return output;
};

console.log(calculateArea(radius, area));
console.log(calculateCircumference(radius, circumference));
console.log(calculateDiameter(radius, diameter));
