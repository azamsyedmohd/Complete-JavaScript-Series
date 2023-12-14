// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays and objects into distinct variables.

const example = ["Syed Mohd Azam", "Front End Developer", "MCA", 27, true];

const [a, b, c, d, e] = example;

console.log(a); // "Syed Mohd Azam"
console.log(b); // "Front End Developer"
console.log(c); // "MCA"
console.log(d); // 27
console.log(e); // true

const [first, ...rest] = example;

console.log(first); // "Syed Mohd Azam"
console.log(rest); // ["Front End Developer","MCA",27,true]

const [
  firstElement,
  secondElement,
  thirdElement,
  fourthElement,
  ...fifthElement
] = ["HTML", "CSS", "JavaScript", "React"];

console.log(firstElement); // "HTML"
console.log(secondElement); // "CSS"
console.log(thirdElement); // "JavaScript"
console.log(fourthElement); // "React"
console.log(fifthElement); // [] (empty array with no elements)

// Examples of destructuring of elements.
console.log("****************");
const arrayOne = ["JavaScript", "React", "Front End Development", 27, true];
const [one, two] = arrayOne;
console.log(one); // "JavaScript"
console.log(two); // "React"

const [elemOne, elemTwo, ...rem] = arrayOne;
console.log(elemOne); // 'JavaScript'
console.log(elemTwo); // 'React'
console.log(rem); // ['Front End Development',27,true]
console.log("****************");
const newArray = [...arrayOne, "Extra Element"];
console.log(newArray);
