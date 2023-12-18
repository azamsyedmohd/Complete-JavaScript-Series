// for-in loop

// In JavaScript,the for-in loop allows you to loop through the properties of an object.

// The statements of code within the loop body will be executed once for each property of the object.

const colors = {
  primary: "Blue",
  secondary: "Red",
  tertiary: "White",
};

for (var color in colors) {
  console.log(color + " --> " + colors[color]);
}

//console.log(color);
console.log(colors);
