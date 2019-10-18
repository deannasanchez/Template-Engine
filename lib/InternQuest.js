const inquirer = require("inquirer")


const internQuestions = (i) =>{
    let index = i+1;
    index = String(index)
    
    return inquirer
  .prompt([
    {
      name: 'name',
      message: "What is the name of Employee #" + index,
      
    },
    {
        name: 'email',
        message: "What is the email of Employee #" + index ,
        
      },
      {
        name: 'school',
        message: "What is the school of Employee #" + index,
        
      },
      
  ])
  
}
 
module.exports = internQuestions;
