// undefined vs not-defined

console.log(a); // undefined
var a;
console.log(a); // undefined
if (a === undefined) {
  console.log("a is undefined");
} else {
  console.log("a is not undefined");
}
a = 10;
if (a === undefined) {
  console.log("a is undefined");
} else {
  console.log("a is not undefined");
}
// console.log(x); // x is not defined

// JavaScript is a loosely typed language

console.log("**********************************");

console.log(b); // undefined
var b = 7;
console.log(b); // 7
b = "Front End Development";
console.log(b); // "Front End Development"
b = true;
console.log(b); // true
