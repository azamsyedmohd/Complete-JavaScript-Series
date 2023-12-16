console.log(value); // undefined
var value = 34;
const emptyVariable = null;
console.log(emptyVariable); // null
console.log(amplifier); // amplifier is not efined

// Note :-> The main difference between not defined , undefined and null is that whenever we did not declared any variable and we are trying to use the value of that variable then it gives the error that is "variable_name is not defined". And when we use the variable declared with var before initialisation then at that time the valueof that variable is undefined.And whenever we want to store the value which is indicating that the variable has no value then there is special empty value which is value itself but shows there is no value in the variable and that value is called null.

// Array.isArray(value) is a method which takes a value as a parameter and returns true if the value is array otherwise it returns false.

const arrayValue = [
  "Aligarh Muslim University",
  "JawaharLal Nehru University",
  "Delhi University",
  "Banaras Hindu University",
];

console.log(Array.isArray(arrayValue)); // true
console.log(Array.isArray(["Shah Rukh Khan", "Amir Khan", "Salman Khan "])); // true
