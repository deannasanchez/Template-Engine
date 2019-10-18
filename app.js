const fs = require("fs");
const inquirer = require("inquirer");
const ManagerQuest = require("./lib/ManagerQuest");
const InternQuest = require("./lib/InternQuest");
const EngineerQuest = require("./lib/EngineerQuest")
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


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
        switch (employeetype.role) {
            case "Intern":
                employeeAns = await InternQuest(i);
                employees.push(new Intern(employeeAns.name, i+2, employeeAns.email, employeeAns.school));
                break;
            case "Engineer":
                employeeAns = await EngineerQuest(i);
                employees.push(new Engineer(employeeAns.name, i+2, employeeAns.email, employeeAns.github));
                break;
            
        }
        
        i++;
    }
    return writeFileAsync("index.html", generateHTML(employees));
}
questionsEm();

function generateHTML(employees) {
    console.log(employees)
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>

    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Team Generator</h1>
            <p class="lead">This is the Team!</p>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${employeeAns.name}</h5>
                        <p class="card-text">ID: ${employeeAns.id}</p>
                        <p class="card-text">Role: ${employeeAns.title}</p>
                        <p class="card-text">Email: ${employeeAns.email}</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${employeeAns.name}</h5>
                        <p class="card-text">ID: ${employeeAns.id}</p>
                        <p class="card-text">Role: ${employeeAns.title}</p>
                        <p class="card-text">Email: ${employeeAns.email}</p>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${employeeAns.name}</h5>
                        <p class="card-text">ID: ${employeeAns.id}</p>
                        <p class="card-text">Role: ${employeeAns.role}</p>
                        <p class="card-text">Email: ${employeeAns.email}</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${employeeAns.name}</h5>
                        <p class="card-text">ID: ${employeeAns.id}</p>
                        <p class="card-text">Role: ${employeeAns.role}</p>
                        <p class="card-text">Email: ${employeeAns.email}</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${employeeAns.name}</h5>
                        <p class="card-text">ID: ${employeeAns.id}</p>
                        <p class="card-text">Role: ${employeeAns.role}</p>
                        <p class="card-text">Email: ${employeeAns.email}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>
</html>`;
}