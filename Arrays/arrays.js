// Similar to variable, an array also stores data but it is used to store multiple data items.
// It enables storing multiple values under same variable name and we can perform various operations on them by using different methods and properties also every value gets a sequential index starting at 0.
// In JavScript, arrays can store values of different types whereas in statically typed language array will store such type of values, that type a arry has.

var arrayExample = [
  24,
  "Ferrari",
  true,
  null,
  undefined,
  ["Syed", "Mohd", "Azam"],
];

console.log(arrayExample);

// Accessing the elements

console.log(arrayExample[0]);
console.log(arrayExample[1]);
console.log(arrayExample[2]);
console.log(arrayExample[3]);
console.log(arrayExample[4]);
console.log(arrayExample[5]);

arrayExample[6] = "Added New Element";

console.log(arrayExample);

arrayExample[6] = "Modified New Element";

console.log(arrayExample);

delete arrayExample[6];

console.log(arrayExample);
