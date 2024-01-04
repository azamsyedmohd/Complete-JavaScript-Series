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

// Difference between parameters and arguments in function

// parameters are the local variables provided to the function ad its scope is accessible throughout the function, whereas the arguments are the valus provided to the function when it is invoked.

function sum(one, two) {
  console.log("Sum is : ", one + two);
}

sum(7, 5);

// In this example, one and two are the parameters where 7 and 5 are the arguments.

// First Class Functions or First Class Citizens --> In JavaScript, functions are treated as values sincefunctions are considered as values do we can pass a function to another function as an argument and can also return the function from another function as a value. This ability make functions in JavaScript be first class functions and first class citizens.

const one = function () {
  console.log("one called");
};
function higher(callback) {
  callback();
}
higher(one);

function highest() {
  return function () {
    console.log("returned function");
  };
}
const returnFunction = highest();
returnFunction();
