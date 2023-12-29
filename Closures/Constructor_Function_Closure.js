// Closure using Constructor function.
function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count = count + 1;
    console.log(count);
  };
  this.decrementCounter = function () {
    count = count - 1;
    console.log(count);
  };
}
console.log("*********************");
var counter1 = new Counter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

console.log("*************************");

var counter2 = new Counter();
counter2.incrementCounter();
counter2.decrementCounter();
counter2.incrementCounter();
counter2.decrementCounter();
