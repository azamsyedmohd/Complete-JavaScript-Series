// Example of Closure

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
