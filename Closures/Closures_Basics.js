// Basics of Closure

// Closure is basically refers to the combination of a function with the lexical environment of its parent. In other words, you can say that the function whenever executes outside of its lexical environment remembers its surroundings.

function outer(param) {
  function inner() {
    console.log(param, value);
  }
  let value = "React";
  return inner;
}
var close = outer("JavaScript");
close();
