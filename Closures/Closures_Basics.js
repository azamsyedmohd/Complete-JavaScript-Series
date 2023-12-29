// Basics of Closure

// Closure is basically refers to the combination of a function with the lexical environment of its parent. In other words, you can say that the function whenever executes outside of its lexical environment remembers its surroundings.

function outer() {
  function inner() {
    console.log(value);
  }
  let value = 50;
  return inner;
}
var close = outer();
close();
