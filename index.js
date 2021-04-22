// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type : "input",
        name : "title",
        message : "Enter application name."
    },
    {
        type : "input",
        name : "description",
        message : "Enter description for the application"
    },
    {
        type : "input",
        name : "instructions",
        message : "Enter instructions to install the application."

    },
    {
        type : "input",
        name : "usage",
        message : "Enter Usage information"
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
       message : "Enter contribution guidelines."
    },
    {
        type : "input",
        name : "test",
        message : "Enter test instructions."
    },
    {
        type : "input",
        name : "github",
        message : "Enter GitHub username."
    },
    {
        type : "input",
        name : "email",
        message : "Enter email address." 
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
