// for-in loop

// In JavaScript,the for-in loop allows you to loop through the properties of an object.

// The statements of code within the loop body will be executed once for each property of the object.

const colors = {
  primary: "Blue",
  secondary: "Red",
  tertiary: "White",
};

for (const color in colors) {
  console.log(color + " --> " + colors[color]);
}

const colorsArray = ["Yellow", "Green", "Pink", "Orange"];

for (const color in colorsArray) {
  console.log(color + " --> ", colorsArray[color]);
}
