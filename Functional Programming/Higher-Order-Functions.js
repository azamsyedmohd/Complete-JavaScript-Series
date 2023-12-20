// Higher Order Functions

// Higher Order Function is a function that receives a function as an argument or returns the function as output.

const arrayOne = [1, 2, 3, 4, 5];

const squaredArrayOne = [];

for (const value of arrayOne) {
  squaredArrayOne.push(value * value);
}

console.log(squaredArrayOne);

// map() --> higher order function

// map() will loop through every element of your array and will perform specific operations that you have provided.
// map() returns an array.

const arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredArrayTwo = arrayTwo.map((value) => value * value);

console.log(squaredArrayTwo);

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrToDollor = 80;
const dollortransactions = transactions.map((inr) =>
  Number((inr / inrToDollor).toFixed(1))
);
console.log(dollortransactions);
// forEach() --> a higher order function.

// forEach() will loop through every element of your array and will perform specific operations that you have provided.
// Instead of map, forEach() does not return any value, it only performs the operations which has given to it.

const values = [1, 2, 3, 4, 5];
const tripple = [];
values.forEach((value) => tripple.push(value * value * value));
console.log(tripple);

// filter() --> a higher order function

// filter() method returns a new array and it contains only those elements of given array that satisfies the condition provided in callback function.

// Problem :-> You have to check for even numbers in an array and put them in separate array.

const numbers = [1, 2, 20, 35, 12, 17, 46];
const filtered = [];
for (const value of numbers) {
  if (value % 2 === 0) filtered.push(value);
}
console.log("Filtered Array is : ", filtered);

// using filter() method

const filteredValues = numbers.filter((value) => value % 2 === 0);
console.log("Filtered Values using filter() method : ", filteredValues);

// find() --> a higher order function returns the first element of an array that satisfies the condition.

const realValues = [1000, 3000, 4000, 2000, -898, 3800, -4500];

const findValue = realValues.find((value) => value < 0);
