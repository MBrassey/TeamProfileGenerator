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
    return "Enter a Number!";
  }
  return true;
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
        message: "Enter employee ID: ",
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
      console.log(data);
    });
};

function init() {
  promptUser();
}

init();
