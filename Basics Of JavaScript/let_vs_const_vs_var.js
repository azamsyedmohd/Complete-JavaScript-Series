// let var and const declarations.

// variable declaration with var keyword.
console.log(a);
var a;
console.log(a);
a = 25;
console.log(a);
a = "JavaScript";
console.log(a);

// let declaration
// console.log(b); // Reference Error: Cannot access before initialisation.
let b;
console.log(b); // undefined
b = 50;
console.log(b); //50

// variable declared with const keyword.

// const c; // Syntax Error: Missing Initialiser with const keyword.
// console.log(c); // Reference Error: Cannot access before initialisation.
const c = 100;
// const c = 45; // Syntax Error: Cannot redeclare variable with const keyword.
c = 345; // TypeError : Assignment to const variable.
console.log(c);
