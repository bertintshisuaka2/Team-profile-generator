//linking to different team profile types
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//required modules
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

//other links
const templateGenerator = require('./src/teamTemplateGenerator');
const outputDirectory = path.resolve(__dirname, "dist");
const outputPath = path.join(outputDirectory, "teamGenerator.html");



//array for the team
const teamProfileArray = [];

//this function is what starts the prompts
function runTeamGenerator() {

    function creatingTheTeam() {
        inquirer.prompt([{
            type: "list", 
            message: "Please select which type of employee you want to add: ",
            name: "addingEmployee",
            choices: ["Manager", "Engineer", "Intern", "All Done Adding Employees."]
        }]).then(function (input) {
            switch(input.addingEmployee) {
                case "Manager":
                    managerAdder();
                    break;
                case "Engineer":
                    engineerAdder();
                    break;
                case "Intern":
                    internAdder();
                    break;    
                default: 
                    buildingTheHTML();
            }
        })
    }

    //helper functions 
function managerAdder() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Please enter the manager's name: "
        },
        {
            type: "input",
            name: "managerID",
            message: "Please enter the manager's ID: "
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Please enter the manager's email: "
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Please enter the manager's office number: "
        }
    ]).then(managerInfo => {
        const managerFinal = new Manager(managerInfo.managerName, managerInfo.managerID, managerInfo.managerEmail, managerInfo.managerOfficeNumber);
        teamProfileArray.push(managerFinal);
        creatingTheTeam();
    });
}

function engineerAdder() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please enter the engineer's name: "
        },
        {
            type: "input",
            name: "engineerID",
            message: "Please enter the engineer's ID: "
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Please enter the engineer's email: "
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "Please enter the engineer's GitHub username: "
        }
    ]).then(engineerInfo => {
        const engineerFinal = new Engineer(engineerInfo.engineerName, engineerInfo.engineerID, engineerInfo.engineerEmail, engineerInfo.engineerGitHub);
        teamProfileArray.push(engineerFinal);
        creatingTheTeam();
    });
}

function internAdder() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Please enter the intern's name: "
        },
        {
            type: "input",
            name: "internID",
            message: "Please enter the intern's ID: "
        },
        {
            type: "input",
            name: "internEmail",
            message: "Please enter the intern's email: "
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter the intern's school: "
        }
    ]).then(internInfo => {
        const internFinal = new Intern(internInfo.internName, internInfo.internID, internInfo.internEmail, internInfo.internSchool);
        teamProfileArray.push(internFinal);
        creatingTheTeam();
    });
}

function buildingTheHTML() {

  fs.writeFileSync(outputPath, templateGenerator(teamProfileArray), err => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log(`
        -----------------------
        TEAM BUILDING COMPLETED!
        _______________________
        `);
    }
  });
}


    creatingTheTeam();    
}

//calling the initialized app
runTeamGenerator();

