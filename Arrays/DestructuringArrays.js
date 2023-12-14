// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays and objects into distinct variables.

const example = ["Syed Mohd Azam", "Front End Developer", "MCA", 27, true];

const [a, b, c, d, e] = example;

console.log(a); // "Syed Mohd Azam"
console.log(b); // "Front End Developer"
console.log(c); // "MCA"
console.log(d); // 27
console.log(e); // true

const [first, ...rest] = example;

console.log(first);
console.log(rest);

const [
  firstElement,
  secondElement,
  thirdElement,
  fourthElement,
  ...fifthElement
] = ["HTML", "CSS", "JavaScript", "React"];

console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);
console.log(fourthElement);
console.log(fifthElement);

// Examples of destructuring of elements.
console.log("****************");
const arrayOne = ["JavaScript", "React", "Front End Development", 27, true];
const [one, two] = arrayOne;
console.log(one);
console.log(two);

const [elemOne, elemTwo, ...rem] = arrayOne;
console.log(elemOne); // 'JavaScript'
console.log(elemTwo); // 'React'
console.log(rem); // ['Front End Development',27,true]
console.log("****************");
const newArray = [...arrayOne, "Extra Element"];
console.log(newArray);
