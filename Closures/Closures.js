// Closures in JavaScript
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
z(); // 100

// A closure is the combination of a function bundled together (enclosed) with references to its surroundings state(lexical environment) of its parent.In other words, closure gives an access to the outer's function scope from an inner function.

// This function y(){} makes a closure with x for the variable a. After executing so much lines of code even x() also been removed from call stack but y () remembers its closure or where it was present.
