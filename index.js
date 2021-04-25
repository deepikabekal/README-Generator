// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {generateMarkdown,licenseArr} = require ('./utils/generateMarkdown');
const fileName = "./dist/README.md";
const choicesArr = []; //array to display License choices for the user to select
licenseArr.forEach(item => choicesArr.push(item.name));  //push the License names in to the array  



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
                console.log("Invalid entry. Try again!");
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
                console.log("Invalid entry. Try again!");
                return false;
            }
        }
    },
    {
        type : "input",
        name : "installation",
        message : "Enter instructions to install the application.",
        validate : instructionInput => {
            if (instructionInput)
            {
                return true;
            }
            else
            {
                console.log("Invalid entry. Try again!");
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
                console.log("Invalid entry. Try again!");
                return false;
            }
        }
    },
    {
        type : "checkbox",
        name : "license",
        message : "Choose License for your application.",
        choices : choicesArr
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
               console.log("Invalid entry. Try again!");
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
                console.log("Invalid entry. Try again!");
                return false;
            }
        }
    },
    {
        type : "input",
        name : "username",
        message : "Enter GitHub username.",
        validate : githubInput => {
            if (githubInput)
            {
                return true;
            }
            else
            {
                console.log("Invalid entry. Try again!");
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
                console.log("Invalid entry. Try again!");
                return false;
            }
        }
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, readmePage) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(fileName, readmePage, err => {
            if (err) 
            {
                reject(err);
                return;
            }

            resolve("README file is created! You can find your README.md file in 'dist' folder.")
            
        });
    });
    
};

// TODO: Create a function to initialize app
function init () {
    return inquirer.prompt(questions);
}


// Function call to initialize app
init()
.then (data => {
    return generateMarkdown(data);
})
.then (readmePage => {
    return writeToFile(fileName, readmePage);
})
.then (writeFileResponse => {
    console.log(writeFileResponse);
})
.catch (err => {
    console.log(err);
})
