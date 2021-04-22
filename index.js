// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");
// TODO: Create an array of questions for user input
const questions = [
    {
        type : "input",
        name : "title",
        message : "Enter application name.",
        validate : titleInput => {
            if (titleInput)
            {
                return true;
            }
            else
            {
                console.log("Enter application name.");
                return false;
            }
        }
    },
    {
        type : "input",
        name : "description",
        message : "Enter description for the application",
        validate : descInput => {
            if (descInput)
            {
                return true;
            }
            else
            {
                console.log("Enter description for the application");
                return false;
            }
        }
    },
    {
        type : "input",
        name : "instructions",
        message : "Enter instructions to install the application.",
        validate : instructionInput => {
            if (instructionInput)
            {
                return true;
            }
            else
            {
                console.log("Enter instructions to install the application.");
                return false;
            }
        }

    },
    {
        type : "input",
        name : "usage",
        message : "Enter Usage information",
        validate : usageInput => {
            if (usageInput)
            {
                return true;
            }
            else
            {
                console.log("Enter Usage information");
                return false;
            }
        }
    },
    {
        type : "checkbox",
        name : "license",
        message : "Choose License for your application.",
        choices : ["Apache 2.0 License", "The MIT License", "Mozilla Public License 2.0", "Open Database License (ODbL)", "Public Domain Dedication and License (PDDL)"]
    },
    {
       type : "input",
       name : "contributing",
       message : "Enter contribution guidelines.",
       validate : contributorInput => {
           if (contributorInput)
           {
               return true;
           }
           else
           {
               console.log("Enter contribution guidelines.");
               return false;
           }
       }
    },
    {
        type : "input",
        name : "test",
        message : "Enter test instructions.",
        validate : testInput => {
            if (testInput)
            {
                return true;
            }
            else
            {
                console.log("Enter test instructions.");
                return false;
            }
        }
    },
    {
        type : "input",
        name : "github",
        message : "Enter GitHub username.",
        validate : githubInput => {
            if (githubInput)
            {
                return true;
            }
            else
            {
                console.log("Enter GitHub username.");
                return false;
            }
        }
    },
    {
        type : "input",
        name : "email",
        message : "Enter email address.",
        validate : emailInput => {
            if (emailInput)
            {
                return true;
            }
            else
            {
                console.log("Enter email address");
                return false;
            }
        }
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init () {
    return inquirer.prompt(questions);
}


// Function call to initialize app
init()
.then (data => console.log(data));
