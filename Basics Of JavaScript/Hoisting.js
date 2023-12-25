// Hoisting
console.log(getName);
getName();
console.log(x);
var x = 7;
function getName() {
  console.log("Namaste JavaScript");
}
console.log(getName);
getName();
console.log(x);
