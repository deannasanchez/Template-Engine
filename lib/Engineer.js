const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(github) {
    super(name, id, "Engineer");
    this.github = github;
  }
  getGithubl() {
    
  }
  getRole() {
    return 'Engineer';
}

}