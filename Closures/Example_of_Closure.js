// Example of Closure

// Closure is the combination of a function with the lexical environment of its parent to access the variables and functions of the parent.In other words, the closure allows us to access the outside environment of the parent.

function outer() {
  var firstValue = 25;
  var secondValue = "Google";
  function inner() {
    console.log(firstValue);
  }
  console.log(secondValue);
  return inner;
}
const get = outer();
get();
