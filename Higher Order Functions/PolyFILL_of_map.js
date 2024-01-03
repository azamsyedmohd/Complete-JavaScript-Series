// Polyfill of map

const radius = [2, 3, 4, 5];

// Calculate the area of all the radii of given array.

const area = function (rad) {
  return Math.PI * rad * rad;
};
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.map(area));
console.log(radius.calculate(area));
