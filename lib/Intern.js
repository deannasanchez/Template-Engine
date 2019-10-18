const Employee = require("./Employee")

class Intern extends Employee {
  constructor(name, id, school) {
    super(name, id, "Intern");
    this.school = school;
  }
  getSchool() {
    
  }
  getRole() {
    return 'Intern';
}

}

module.exports = Intern;