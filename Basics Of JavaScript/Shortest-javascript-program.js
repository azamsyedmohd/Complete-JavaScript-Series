// Shortest JavaScript Program is Empty file.

// As we know that whenever we execute JavaScript Program, JavaScript Engine creates an Execution Context.

// Whenever the execution contet is created, it also activates "this" which refers to an global object, and in the browser mode it also termed as window object.

// All the variables and functions are considered as the keys of that global object.

// All the variables and functions defined in global object can be called by three ways:-

// First way is this.key where key is variable or function_name.
// Second way is window.key where key is the variable or function_name.
// Third way is you can call by their names.

var a = 67;

console.log(this.a); //67
console.log(window.a); //67
console.log(a); //67

console.log(x); // x is not defined
// If the variable and function is not there in global object or window object then it is considered as not defined.
