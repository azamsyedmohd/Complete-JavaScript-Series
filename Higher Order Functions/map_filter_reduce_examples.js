// map filter and reduce examples

const users = [
  { firstName: "Salman", lastName: " Khan", age: 54 },
  { firstName: "Amir", lastName: " Khan", age: 57 },
  { firstName: "ShahRukh", lastName: " Khan", age: 55 },
  { firstName: "Irfan", lastName: " Khan", age: 53 },
];

// list of full names

console.log(users.map(({ firstName, lastName }) => firstName + lastName));
