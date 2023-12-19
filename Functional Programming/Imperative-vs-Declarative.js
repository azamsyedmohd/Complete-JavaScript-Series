// Imperative vs Declarative way.

// We will have a number and we have to check whether the square of that number is even or odd.

// Imperative way ofwriting code --> It is the way of writing code in which you focus on what to do to get the result, you define the steps to achieve the result.

const num = 5;
const aSquared = num * num;
let isEven;

if (aSquared % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

console.log(isEven);

// Declarative way of coding --> This is the way of writing the code which is result oriented, only focus on result not focus how we get the result.

const evenOdd = (num) => ((num * num) % 2 === 0 ? "Even" : "Not Even");

console.log(evenOdd(5)); // Not Even
console.log(evenOdd(24)); // Even
