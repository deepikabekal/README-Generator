# README-Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
An application to generate a professional README file using Node.js from the command line.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Preview](#preview)
* [User Story](#userstory)
* [Acceptance Criteria](#acceptancecriteria)
* [Contributing](#contributing)
* [Questions](#questions)
* [Credits](#credits)

## Installation
1. Make sure Node.js is installed by running the below command in terminal. If not, install [Node.Js](https://nodejs.org/en/)
```
node -v
```
2. Clone this repo using ssh on your local machine.
```
git clone git@github.com:deepikabekal/README-Generator.git
```
3. Open terminal and make sure to cd to the root of the repo.
4. Open the repo in your text editor.
5. Install all the dependencies.
```
npm install
```

## Usage
1. In the text editor terminal run the following command
```
node index.js
```
2. Answer all the questions. 

## Preview

## User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Contributing
1. Fork the repo.
2. Add feature or make changes.
3. Make a pull request for review.

## Credits
* [npm](https://docs.npmjs.com/) Documentation.
* [Inquirer](https://www.npmjs.com/package/inquirer) Package.
* [coding-boot-camp](https://github.com/coding-boot-camp/potential-enigma/blob/master/readme-guide.md) for README template.
* [lukas-h](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) for Markdown License Badges.
* [MDN Web Docs](https://developer.mozilla.org/en-US/) for Javascript Guide.


