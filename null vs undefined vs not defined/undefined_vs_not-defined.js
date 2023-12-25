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
console.log(x); // x is not defined
