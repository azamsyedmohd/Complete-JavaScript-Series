// Call bind and apply methods

let name = {
  firstName: "Syed",
  middleName: "Muhammad",
  lastName: "Azam",
  printFullName: function () {
    console.log(this);
    console.log(this.firstName + " " + this.middleName + " " + this.lastName);
  },
};
const printFullName = function () {
  console.log(this);
  console.log(this.firstName + this.middleName + this.lastName);
};
name.printFullName();
printFullName();
