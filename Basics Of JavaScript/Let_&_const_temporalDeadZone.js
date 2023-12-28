// let and const in temporal dead zone.

// let and const declarations are hoisted but they are hoisted differently from var declarations. They are hoisted in temporal dead zone.
console.log(b); // undefined
// console.log(a); // ReferenceError: cannot access before initialisation a.
let a = 10;
var b = 100;

// Temporal ead zone is the time where let and constant variables are hoisted to the time where they are initialised.

// Whenever you want to execute the variable declared with let and const during temporal dead zone it gives you the error called Reference Error.
console.log(x); // Reference Error : x is not defined.

// Second case is that whenever we are unable to find the variable in both temporal dead zone and global object then we say that variable is not defined and it comes under the Reference Error.
