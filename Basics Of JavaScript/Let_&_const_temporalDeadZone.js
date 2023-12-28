// let and const in temporal dead zone.

// let and const declarations are hoisted but they are hoisted differently from var declarations. They are hoisted in temporal dead zone.
console.log(b); // undefined
console.log(a); // ReferenceError: cannot access before initialisation a.
let a = 10;
var b = 100;
