const fs = require("fs");

function generateHTML(data) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
  <title>DevTeam</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <style>
    :root {
        --Azure: #2994cb;
        --Absinthe: #a3de9e;
        --Sky: #394b59;
        --Anthracite: #2a2a2a;
        --Jet: #141414;
        --Night: #181818;
        --Stone: #6c757d;
        --Zinc: #cfd2d0;
        --Absinthe-alpha: rgba(163, 222, 158, 0.8);
        --Shadow-Alpha: rgba(0, 0, 0, 0.5);
      }
      body {
        background-color: var(--Zinc);
      }
        .container{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .name {
            font-size: 20px;
            font-family: "Aldrich", sans-serif;
            color: var(--Zinc);
        }
        .card {
            flex: 1 0 300px;
            box-sizing: border-box;
          }
        .cardbody{
            font-family: "Play", sans-serif;
            background-color: var(--Anthracite);
            border-radius: 5px;
            border-width: 1px;
            box-shadow: var(--Absinthe-Alpha);
            color: var(--Absinthe);
            font-size: 18px;
            padding: 20px 30px;
            margin: 12px;
        }
        #head {
            background-color: var(--Anthracite);
            color: var(--Sky);
            font-family: "Aldrich", sans-serif;
          }
        #tab {
            background-color: var(--Sky);
        }
    </style>
  <div class="jumbotron" id="head" >
    <h1 class="text-center" ><i class="fa fa-terminal"></i> Development Team</h1>
    </div>
    <div class='container'>
    ${makeCards(data)}
    </div>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </body>
  </html>
  `;
}
function makeCards(data) {
  return data
    .map((data) => {
      let position = data.getRole();
      switch (position) {
        case "Manager":
          return makeManagerCard(data);
          break;
        case "Engineer":
          return makeEngineerCard(data);
          break;
        case "Intern":
          return makeInternCard(data);
          break;
      }
    })
    .join("\n");
}
function makeManagerCard(data) {
  console.log(data);
  let mangerCard = `
              <div class="card cardbody">
                <div class="card-header" id="tab"><p class="name">
                             ${data.name}</p>
                            <div><i class="fa fa-user-tie"></i> ${data.getRole()}</div>
                            </div>
                <div class="card-body">
                  <form role="form">			
                    <div class="form-group">
                        <label for="reserve-unique-id" id="reserve-unique-id">ID: ${
                          data.id
                        } </label>
                    </div>
                    <div class="form-group">
                      <label for="reserve-email" id="reserve-email">Email: <a href="mailto:${
                        data.email
                      }">${data.email}</a></label>
                    </div>
                    <div class="form-group">
                        <label for="reserve-phone" id="github">Office Number: ${
                          data.officeNumber
                        }</label>
                    </div>
                    </form>
                </div>
              </div>
`;
  return mangerCard;
}
function makeEngineerCard(data) {
  const githubUser = data.github.split("/")[3];
  let engineerCard = `
                <div class="card cardbody">
                      <div class="card-header" id="tab"><p class="name">
                                   ${data.name}</p>
                                  <div><i class="fa fa-user-ninja"></i> ${data.getRole()}</div>
                                  </div>
                      <div class="card-body">
                        <form role="form">			
                          <div class="form-group">
                              <label for="reserve-unique-id" id="reserve-unique-id">ID: ${
                                data.id
                              } </label>
                          </div>
                          <div class="form-group">
                          <label for="reserve-email" id="reserve-email">Email: <a href="mailto:${
                            data.email
                          }">${data.email}</a>
                          </div>
                          <div class="form-group">
                              <label for="reserve-phone" id="github">Github: <a href="${
                                data.github
                              }">${githubUser}</a></label>					
                          </div>				
                          </form>
                      </div>
                    </div>
    `;
  return engineerCard;
}
function makeInternCard(data) {
  let internCard = `
              <div class="card cardbody">
                <div class="card-header" id="tab"><p class="name">
                             ${data.name}</p>
                            <div><i class="fa fa-user-graduate"></i> ${data.getRole()}</div>
                            </div>
                <div class="card-body">
                  <form role="form">			
                    <div class="form-group">
                        <label for="reserve-unique-id" id="reserve-unique-id">ID: ${
                          data.id
                        } </label>
                    </div>
                    <div class="form-group">
                    <label for="reserve-email" id="reserve-email">Email: <a href="mailto:${
                      data.email
                    }">${data.email}</a>
                    </div>
                    <div class="form-group">
                        <label for="reserve-phone" id="github">School: ${
                          data.school
                        }</label>					
                    </div>				
                    </form>
                </div>
              </div>
`;
  return internCard;
}

// Write the File to Disk
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "HTML created!",
      });
    });
  });
};

module.exports = { generateHTML, writeFile };
