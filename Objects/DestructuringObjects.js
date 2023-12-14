// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays and objects into distinct variables.

const objectExample = {
  name: "Syed Mohd Azam",
  age: 25,
  gender: "Male",
  address: {
    country: "England",
    city: "London",
  },
};

const {
  name: nameOfObject,
  age: ageOfObject,
  gender: genderOfObject,
  address: { country: countryOfObject, city: cityOfObject },
} = objectExample;

console.log(nameOfObject);
console.log(ageOfObject);
console.log(genderOfObject);
console.log(countryOfObject);
console.log(cityOfObject);
