// Call Bind and Apply Example

const insideFunction = {
  firstName: "Syed",
  middleName: "Muhammad",
  lastName: "Azam",
  printFullName: function () {
    console.log(this);
    console.log(this.firstName + " " + this.middleName + " " + this.lastName);
  },
};

const outsideFunction = function () {
  console.log(this);
  console.log(this.firstName + this.middleName + this.lastName);
};

const exampleObject = {
  firstName: "Shah",
  middleName: "Rukh",
  lastName: "Khan",
};
