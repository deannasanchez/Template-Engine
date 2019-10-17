const Employee = require("./Employee")

class Manager extends Employee {
  constructor(name, id, title) {
    super(id, 0, "bwom");
    this.officeNumber = officeNumber;
  }
  getRole() {
    console.log('Manager');
  }
}