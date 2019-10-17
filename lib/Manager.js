const Employee = require("./Employee")

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, "Manager");
    this.officeNumber = officeNumber;
  }
  // getRole() {
  //   return 'Manager';
  // }
}