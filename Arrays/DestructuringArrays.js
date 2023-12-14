// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays and objects into distinct variables.

const example = ["Syed Mohd Azam", "Front End Developer", "MCA", 27, true];

const [a, b, c, d, e] = example;

console.log(a); // "Syed Mohd Azam"
console.log(b); // "Front End Developer"
console.log(c); // "MCA"
console.log(d); // 27
console.log(e); // true

const [first, ...rest] = example;

console.log(first);
console.log(rest);
