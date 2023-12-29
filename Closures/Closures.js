// Closures in JavaScript
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

// A closure is the combination of a function bundled together (enclosed) with references to its surroundings state(lexical environment) of its parent.In other words, closure gives an access to the outer's function scope from an inner function.
