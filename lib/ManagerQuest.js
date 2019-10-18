const inquirer = require("inquirer")


 function managerQues(){
return inquirer.prompt([  
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  }, 

  {
      type: "input",
      name: "numEmployees",
      message: "How many employee's do you have?"
    }
  ])
  }

  module.exports = managerQues;