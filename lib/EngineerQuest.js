const inquirer = require("inquirer")


const engineerQuestions = (i) => {
    let index = i + 1;
    index = String(index)

    return inquirer
        .prompt([
            {
                type: "index",
                name: 'name',
                message: "What is the name of Employee #" + index,

            },
            {
                type: "index",
                name: 'email',
                message: "What is the email of Employee #" + index,

            },
            {
                type: "index",
                name: 'github',
                message: "What is the github of Employee #" + index,

            },

        ])

}

module.exports = engineerQuestions;