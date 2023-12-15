// Non-Primitive Data Types

// Non-Primitive Data Types are the values which are stored in the heap and their address are passed to the variable. Since variables do  not directly store the actual values they only store the address only, which act like pointers. These pointers actually refer to that memory in the heap.In this way,we can extract the values from the heap memory in the case of non-primitive data values.

// For example:-

const exampleObject = {
  name: "Syed Mohd Azam",
  age: 27,
  qualification: "MCA",
};

const anotherObject = exampleObject;

console.log(exampleObject);
console.log(anotherObject);

// updating the key 'age'

anotherObject.age = 29;

console.log(exampleObject);
console.log(anotherObject);

// adding the key 'designation'

exampleObject.designation = "Software Engineer";
console.log(exampleObject);
console.log(anotherObject);
