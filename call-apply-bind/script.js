// Call bind and apply methods

// Object Created and Stored
const name = {
  firstName: "Syed",
  middleName: "Muhammad",
  lastName: "Azam",
  printFullName: function () {
    console.log(this);
    console.log(this.firstName + " " + this.middleName + " " + this.lastName);
  },
};
// Another object created and stored

const exampleObject = {
  firstName: "Great",
  middleName: "Steve",
  lastName: "Jobs",
};
// StandAlone function created and stored
const writeFullName = function () {
  console.log(this);
  console.log(this.firstName + this.middleName + this.lastName);
};

name.printFullName();
writeFullName();

// call method

name.printFullName.call(exampleObject);
writeFullName.call(exampleObject);
