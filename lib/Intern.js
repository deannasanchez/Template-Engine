const Employee = require("./Employee")

class Intern extends Employee {
  constructor(school) {
    super(name, id, "Intern");
    this.school = school;
  }
  getSchool() {
    
  }
  getRole() {
    return 'Intern';
}

}