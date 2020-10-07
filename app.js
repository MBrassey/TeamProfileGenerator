// Imports
const inquirer = require("inquirer");
const isGithubUrl = require("is-github-url");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { generateHTML, writeFile } = require("./src/generateHTML");
const arg = process.argv[2];
const version = "1.0.0";

// Initialize Arrays
const employees = [];
//const engineers = [];
//const interns = [];
//const managers = [];

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
const numberValidator = async (input) => {
  if (isNaN(input) || input == "") {
    return "Expecting a number!";
  }
  return true;
};
const githubValidator = async (input) => {
  if (!isGithubUrl(input) || input == "") {
    return "Expecting a GitHub URL!";
  }
  return true;
};
const schoolValidator = async (input) => {
  if (input !== input.toUpperCase()) {
    return "Expecting Capitalized University Initials";
  } else {
    return true;
  }
};

// Additional Functions
const endQuestions = () => {
  console.log("End of questions!");

  inquirer
    .prompt([
      {
        type: "confirm",
        name: "add",
        message: "Add Another Employee?",
        default: false,
      },
    ])
    .then(function (yn) {
      //console.log(yn.add);
      if (yn.add) {
        promptUser();
      } else {
        generate(employees);
      }
    });
};
function generate(employees) {
  console.log("Generating HTML ...");
  const html = generateHTML(employees);
  //console.log(html);
  return writeFile(html);
}

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
        validate: numberValidator,
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
                validate: numberValidator,
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
              // console.log(manager);
              employees.push(manager);
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
                message: "GitHub URL:",
                name: "github",
                validate: githubValidator,
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
              // console.log(engineer);
              employees.push(engineer);
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
                validate: schoolValidator,
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
              // console.log(intern);
              employees.push(intern);
            })
            .then(function () {
              endQuestions();
            });
          break;
      }
    });
};

// Initialize Application
function init() {
  // Display Argument Data
  if (arg === "-h") {
    console.log(`
    Usage: node app.js [ -h | -v | -l | -a ]
    [options]
    -h          Display this message.
    -v          Show version.
    -l          Show license info.
    -a          What is TeamProfileGenerator?
`);
  } else if (arg === "-v") {
    console.log("TeamProfileGenerator Version: " + version + ".");
  } else if (arg === "-l") {
    console.log(
      "Published under the Creative Commons Zero v1.0 Universal License."
    );
  } else if (arg === "-a") {
    console.log(
      "Dev team profile generator written in Node.js following the Test Driven Development model with jest."
    );
  } else {
    promptUser();
  }
}

init();
