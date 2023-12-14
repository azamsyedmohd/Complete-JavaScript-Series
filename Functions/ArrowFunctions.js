const testOne = function () {
  console.log("Function One!");
};

const testTwo = function () {
  console.log("Function Two!");
};

const testThree = function () {
  console.log("Function Three!");
};

console.log(testOne());
console.log(testTwo());
console.log(testThree());

// Arrow Functions

const arrowOne = () => {
  console.log("Arrow Function without parameter(s)");
};

const arrowTwo = (num) => {
  console.log(
    "Arrow function with one parameter and the value of parameter is : ",
    num
  );
};

const arrowThree = (num1, num2) => {
  console.log(
    "Arrow Function with two parameters and the sum of parameters is :",
    num1 + num2
  );
};

console.log(arrowOne());
console.log(arrowTwo(5));
console.log(arrowThree(10, 20));

// Arrow Function in the Single line

const functionOne = () => console.log("Hey! I am learning Arrow Functions");

const functionTwo = (parameter) =>
  console.log("The value of the parameter is :", parameter);

const functionThree = (parameter1, parameter2) =>
  console.log(
    "The sum of the given two parameters is : ",
    parameter1 + parameter2
  );

console.log(functionOne());
console.log(functionTwo(25));
console.log(functionThree(50, 60));
