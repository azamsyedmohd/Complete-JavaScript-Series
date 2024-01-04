// Functions in JavaScript

// Function Statement and Function Declaration

function language() {
  console.log("JavaScript Language!");
}

language();

// Function Expression --> Anonymous function stored ina variable is called function expression.

var value = function () {
  console.log("Function Expression!");
};

value();

// The difference between function declaration and function expression is hoisting because whenever we declare the function using function declaration or function statement then the memory is assigned to the function initially before a single line of code is executed.But in the case of function expression, first of all the undefined value is provided to the variable until the declaration of function is executed through function expression.

// Anonymous function --> A function without a name is called Anonymous function and anonymous function is used whenever we use a function as a value.

var anonymous = function () {
  console.log("Anonymous function");
};

anonymous();
