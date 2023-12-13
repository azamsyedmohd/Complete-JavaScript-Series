// Hoisting is basically a concept in JavaScript to execute a particular program ora module.To execute a particular program in JavaScript, we generally divide the process into two phases.
// First phase is Memory Execution Phase
// Second is Code Execution phase.
// In first phase, we generally collects all variables and functions and we assign memory to it.
// In Second Phase, we generally executes the code line by line since JavaScript is a synchronous and single threaded language.
// The process of declaration of all the variables and functions are done initially and this process is called hoisting.
console.log(a); // undefined
greet(); // it will execute

var a = "Hi";
function greet() {
  console.log("Hello from Syed Mohd Azam");
}
