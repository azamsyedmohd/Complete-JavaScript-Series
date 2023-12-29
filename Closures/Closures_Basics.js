// Basics of Closure

// Closure is basically refers to the combination of a function with the lexical environment of its parent. In other words, you can say that the function whenever executes outside of its lexical environment remembers its surroundings.

function outest() {
  var x = "HTML & CSS";
  function outer(y) {
    function inner() {
      console.log(x);
      console.log(y);
      console.log(z);
    }
    let z = "React";
    return inner;
  }
  return outer;
}
let z = 100;
outest()("JavaScript")();
