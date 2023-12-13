// What is an Expression ?

// In any programming language, an expression is considered a statement which executes and gives a value.

var sum = 4 + 5;

// First of all the expression (4+5) is executed then its value is stored in variable sum.

console.log(sum); // it will log the value 9 on the console.

// Function Expression is basically a way to write a function definition or declaration and stored in a variable as a value, since JavaScript follows functional paradigm, whole function definition and declaration is considered as a value and it can be stored in a variable.

var add = function (a, b) {
  console.log(a + b); // it will log the value 7 on the console.
  return a + b;
};

console.log(add(3, 4)); // it will log the value 7 on the console.
