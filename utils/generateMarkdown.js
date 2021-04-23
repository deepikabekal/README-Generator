
const licenseArr = [
  {
    name : "Apache 2.0 License",
    badge : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
    link : "(https://opensource.org/licenses/Apache-2.0)"
  },
  {
    name : "Boost Software License 1.0",
    badge : "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]",
    link : "(https://www.boost.org/LICENSE_1_0.txt)"
  },
  {
    name : "GNU GPL v3",
    badge : "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    link : "(https://www.gnu.org/licenses/gpl-3.0)"
  },
  {
    name : "IBM Public License Version 1.0",
    badge : "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]",
    link : "(https://opensource.org/licenses/IPL-1.0)"
  },
  {
    name : "ISC License (ISC)",
    badge : "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]",
    link : "(https://opensource.org/licenses/ISC)"
  },
  {
    name : "MIT",
    badge : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    link : "(https://opensource.org/licenses/MIT)"
  },
  {
    name : "Mozilla Public License 2.0",
    badge : "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]",
    link : "(https://opensource.org/licenses/MPL-2.0)"
  },
  {
    name : "Attribution License (BY)",
    badge : "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]",
    link : "(https://opendatacommons.org/licenses/by/)"
  }

]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [Test](#test)
  [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions
  If you have any queries please contact me at,
  https://www.github.com/${data.username}
  [Email](${data.email})
`;
}

module.exports = generateMarkdown;
