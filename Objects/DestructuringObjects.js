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

// Examples of destructuring of objects
console.log("***************************");

const exampleOne = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
};

const { name, age, address } = exampleOne;

console.log(name);
console.log(address);
console.log(age);

// Example of Nested Destructuring

const exampleTwo = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
  department: {
    name: "Sales",
    Shift: "Morning",
    address: {
      city: "Bangalore",
      street: "7th Residency Rd",
      zip: 560001,
    },
  },
};

const {
  name: nameOfExampleTwo,
  address: addressOfExampleTwo,
  age: ageOfExampleTwo,
  department: {
    name: nameOfDepartment,
    Shift: ShiftOfDepartment,
    address: {
      city: cityOfDepartment,
      street: streetOfDepartment,
      zip: zipOfDepartment,
    },
  },
} = exampleTwo;

console.log("*************************************");
console.log(nameOfExampleTwo);
console.log(addressOfExampleTwo);
console.log(ageOfExampleTwo);
console.log(nameOfDepartment);
console.log(ShiftOfDepartment);
console.log(cityOfDepartment);
console.log(streetOfDepartment);
console.log(zipOfDepartment);

console.log("******************");

const exampleClone = {
  name: "Syed Mohd Azam",
  qualification: "MCA",
  age: 27,
  address: {
    country: "India",
    city: "Aligarh",
    university: "Aligarh Muslim University",
    department: "Computer Science Department",
  },
};

const referenceObject = exampleClone;
const cloneObject = { ...exampleClone };
console.log(referenceObject);
console.log(cloneObject);

console.log("*************************");

const exampleObject = {
  name: "Syed Mohd Azam",
  qualification: "MCA",
  age: 27,
  address: {
    country: "India",
    city: "Aligarh",
    university: "Aligarh Muslim University",
    department: "Computer Science Department",
  },
};

const {
  name: nameOfExampleObject,
  qualification: qualificationOfExampleObject,
  age: ageOfExampleObject,
  address: { ...remain },
} = exampleObject;
console.log(nameOfExampleObject);
console.log(qualification);
console.log(remain);
