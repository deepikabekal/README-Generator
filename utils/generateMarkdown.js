//variables declarations
var licenseBadge = []; //array of license badges of the user selected license
var licenseLink = []; //array of license link of the user selected license
var userChoice = false; //license selected or not
//array of all the license user can choose from
var licenseArr = [
  {
    name : "Apache 2.0 License",
    badge : "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
    link : "https://opensource.org/licenses/Apache-2.0"
  },
  {
    name : "Boost Software License 1.0",
    badge : "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)",
    link : "https://www.boost.org/LICENSE_1_0.txt"
  },
  {
    name : "GNU GPL v3",
    badge : "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    link : "https://www.gnu.org/licenses/gpl-3.0"
  },
  {
    name : "IBM Public License Version 1.0",
    badge : "![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)",
    link : "https://opensource.org/licenses/IPL-1.0"
  },
  {
    name : "ISC License (ISC)",
    badge : "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)",
    link : "https://opensource.org/licenses/ISC"
  },
  {
    name : "The MIT License",
    badge : "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    link : "https://opensource.org/licenses/MIT"
  },
  {
    name : "Mozilla Public License 2.0",
    badge : "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
    link : "https://opensource.org/licenses/MPL-2.0"
  },
  {
    name : "Attribution License (BY)",
    badge : "![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)",
    link : "https://opendatacommons.org/licenses/by/"
  }

]


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license.length === 0)
  {
    return "";
  }
  userChoice = true;
  licenseArr.forEach(item => {
    for (var i= 0 ; i < license.length ; i++)
    {
      if (item.name === license[i])
      {
        licenseBadge.push(item.badge);
      }
    }
  }) 

  return `${licenseBadge.join(" ")}`
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //console.log("license",license);
  if (license.length === 0)
  {
    return "";
  }

  licenseArr.forEach(item => {
    for (var i= 0 ; i < license.length ; i++)
    {
      if (item.name === license[i])
      {
        licenseLink.push(item.link);
      }
    }
  })

  //console.log("license link", licenseLink);

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length === 0)
  {
    return "";
  }
  //console.log("data", license);
  renderLicenseLink(license)  
  return `
  ## License
  Licensed under the following:
  * ${licenseLink.join("\n * ")}`

}

// adding the License section to the table of contents if the userChoice is true
function addLicense () {
  if (userChoice)
  {
    return `* [License](#license)`;
  }
  else
  {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  ${addLicense()}

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
  * [GitHub](https://www.github.com/${data.username})
  * [Email](${data.email})

  ${renderLicenseSection(data.license)}
`;
}

module.exports = {generateMarkdown,licenseArr};
