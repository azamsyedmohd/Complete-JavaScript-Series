// Object is an unordered collection of key-value pairs.

var person = {
  firstName: "Adam",
  lastName: "Smith",
  age: 25,
  ownsCars: false,
};

console.log(person);

// Dot notation

console.log(person.age);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.ownsCars);

console.log("***************");

// Bracket Notation

var age = "age";
var firstName = "firstName";
var lastName = "lastName";
var ownsCars = "ownsCars";
console.log(person[age]);
console.log(person[firstName]);
console.log(person[lastName]);
console.log(person[ownsCars]);

console.log("*********************");

console.log(person["age"]);
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["ownsCars"]);
