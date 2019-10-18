const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(name, id, github) {
    super(name, id, "Engineer");
    this.github = github;
  }
  getGithubl() {
    
  }
//   getRole() {
//     return 'Engineer';
// }

}

module.exports = Engineer;