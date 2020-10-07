const { conditionalExpression } = require("@babel/types");
const inquirer = require("inquirer");

// Import Classes
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// Initialize Arrays
const employees = [];
const engineers = [];
const interns = [];
const managers = [];

// Validation
const nameValidator = async (input) => {
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

  if (!regName.test(input)) {
    return "Enter first and last name!";
  } else {
    return true;
  }
};
const emailValidator = async (input) => {
  if (
    // E-mail Address Regex
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      input
    )
  ) {
    return true;
  } else {
    return "Enter an e-mail address!";
  }
};
const idValidator = async (input) => {
  if (isNaN(input) || input == "") {
    return "Enter office Number!";
  }
  return true;
};

// Support Functions
const endQuestions = () => {
  console.log("End of questions!");
  //console.log(data);
};

// Get Employee Data
const promptUser = () => {
  console.log(`
    [ Team Profile Generator ]
  `);
  inquirer
    .prompt([
      {
        type: "input",
        message: "Name:",
        name: "name",
        validate: nameValidator,
      },
      {
        type: "input",
        message: "Email:",
        name: "email",
        validate: emailValidator,
      },
      {
        type: "input",
        message: "Enter employee ID:",
        name: "id",
        validate: idValidator,
      },
      {
        type: "list",
        message: "Position:",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then(function (data) {
      switch (data.role) {
        case "Manager":
          inquirer
            .prompt([
              {
                type: "input",
                message: "Office number:",
                name: "office",
              },
            ])
            .then(function (managerData) {
              const manager = new Manager(
                data.name,
                data.id,
                data.email,
                managerData.office,
                "Manager"
              );
              console.log(manager);
              //employees.push(manager);
            })
            .then(function () {
              endQuestions();
            });
          break;
        case "Engineer":
          inquirer
            .prompt([
              {
                type: "input",
                message: "GitHub username:",
                name: "github",
              },
            ])
            .then(function (engineerData) {
              const engineer = new Engineer(
                data.name,
                data.id,
                data.email,
                engineerData.github,
                "Engineer"
              );
              console.log(engineer);
              //employees.push(engineer);
            })
            .then(function () {
              endQuestions();
            });
          break;
        case "Intern":
          inquirer
            .prompt([
              {
                type: "input",
                message: "School:",
                name: "school",
              },
            ])
            .then(function (internData) {
              const intern = new Intern(
                data.name,
                data.id,
                data.email,
                internData.school,
                "Intern"
              );
              console.log(intern);
              //employees.push(intern);
            })
            .then(function () {
              endQuestions();
            });
          break;
      }
    });
};

function init() {
  promptUser();
}

init();
