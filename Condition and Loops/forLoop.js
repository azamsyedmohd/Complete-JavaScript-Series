// loops are the statements that we can use to control the flow of the program and do some repetitive tasks.

// for loop

for (var a = 0; a < 10; a++) {
  console.log("Loop Iteration", a + 1);
}
// you have an array and you have to square each element of that array.

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var index = 0; index < num.length; index++) {
  console.log(num[index] * num[index]);
}

console.log("The value of a is ", a);
console.log("The value of index is ", index);

// While loop

// A while loop evaluates the condition inside the parenthesis().
// If the condition is true, the code inside the while loop block is executed.
// The condition is evaluated again.
// This process remains continue until the condition is false.
// Once the condition becomes false, the loop terminates.

// Syntax  of while loop condition

// while (condition) {
//   Code of while condition
// }

// We have to print 1 to 10 using the while loop.

let whileVariable = 1;
while (whileVariable < 10) {
  console.log(whileVariable);
  whileVariable++;
}
console.log("The value of while variable is ", whileVariable);
