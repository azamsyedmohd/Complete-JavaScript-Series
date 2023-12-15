// Truthy and Falsy Values

// We can check what are the truthy and falsy values by using Boolean() function which takes one parameter and returns the corresponding boolean values.

// Numbers

console.log("**************************");
console.log(Boolean(78)); // true
console.log(Boolean(-78)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-0)); //false
console.log(Boolean(Infinity)); //true
console.log(Boolean(-Infinity)); //true
console.log(Boolean(NaN)); // false

// Strings

console.log("*****************************");
console.log(Boolean("")); // false
console.log(Boolean("Syed Mohd Azam")); // true
console.log(Boolean("NaN")); // true
console.log(Boolean("Infinity")); // true
console.log(Boolean("-Infinity")); // true
console.log(Boolean("78")); // true
console.log(Boolean("-56")); // true
console.log(Boolean("[]")); // true

// Boolean Values

console.log("*******************");
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false

// null and undefined values

console.log("******************");
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// Array and Objects values

console.log("******************");
console.log(Boolean([])); // true
console.log(Boolean(["Syed Mohd Azam", null, undefined, 78])); // true
console.log(Boolean({})); // true
console.log(Boolean({ first: "One", second: "Second" })); // true
