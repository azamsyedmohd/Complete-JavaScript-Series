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
