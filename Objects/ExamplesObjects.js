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

var captainAmerica = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 38,
  isAvenger: true,
  friends: ["Bucky Barnes", "Bruce Banner", "Tony Stark"],
  address: {
    state: "New York",
    city: {
      name: "Brooklyn",
      pincode: 123456,
    },
  },
};

console.log(captainAmerica.address.city.name);

captainAmerica.isAvenger = false;

console.log(captainAmerica);

captainAmerica.movies = ["Age of Ultron", "Civil War", "First Avenger"];

console.log(captainAmerica);

delete captainAmerica.age;
