const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

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
      },
      {
        type: "input",
        message: "Email:",
        name: "email",
      },
      {
        type: "list",
        name: "role",
        message: "Position:",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then(function (data) {
      console.log(data);
    });
};

function init() {
  promptUser();
}

init();
