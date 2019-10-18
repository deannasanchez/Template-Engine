const fs = require("fs");
const inquirer = require("inquirer");
const ManagerQuest = require("./lib/ManagerQuest");
const InternQuest = require("./lib/InternQuest");
const EngineerQuest = require("./lib/EngineerQuest")


async function questionsEm() {
    var employees = []
    let managerAns = await ManagerQuest();
    // employees.push(new ManagerQuest(1, managerAns.name));
    let i = 0;
    while (i < parseInt(managerAns.numEmployees)) {
        let employeetype = await inquirer.prompt([
            {
            type: "list",
            name: "role",
            message: "What is the employee role",
            choices: ["Engineer", "Intern"]
        }
    ])
        console.log(employeetype)
        switch (employeetype.Role) {
            case "Intern":
                employeeAns = await InternQuest(i);
                employees.push(new Intern(i+2, employeeAns.name, employeeAns.email, employeeAns.school));
                break;
            case "Engineer":
                employeeAns = await EngineerQuest(i);
                employees.push(new Engineer(i+2, employeeAns.name, employeeAns.email, employeeAns.github));
                break;
        }
        i++;
    }
}
questionsEm();

