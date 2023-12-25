// How Function works in JS and Variable Environment explaination.

var x = 1;
a();
b();
console.log(x);
function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 20;
  console.log(x);
}

// First of all to execute the JS Program, it creates the execution Context.It will contain two components, first component is Memory Component and Code Component.

// In memory Component, first of all the memory will be allocated to the variable x and functions a and b.Before executing a single line the memory will be allocated to them.
// In Code Component, First line will execute and the value 1 will be allocated to the variable x.
// In Second Line, a() function will execute and the execution context of a will be created. In first phase, the memory will be allocated to x and undefined will be store there. After that, the value 10 will be store to the variable x and will be logged onto the console.And the execution context of a () will be vanished.
// In third line, b() function will execute and the execution context of b will be created. In first phase, the memory will be allocated to x and undefined will be store there. After that, the value 20 will be store there and will be logged onto the console. And the execution context of b()will be vanished.
