// Closures in JavaScript
function z() {
  var a = 50;
  function x() {
    var b = 10;
    function y() {
      console.log(a, b);
    }
    b = 100;
    return y;
  }
  return x;
}
var a = z();
a()(); // 100

// A closure is the combination of a function bundled together (enclosed) with references to its surroundings state(lexical environment) of its parent.In other words, closure gives an access to the outer's function scope from an inner function.

// This function y(){} makes a closure with x for the variable a. After executing so much lines of code even x() also been removed from call stack but y () remembers its closure or where it was present.
