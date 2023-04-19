// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "None":
      badge = "";
      break;
    case "Apache License 2.0":
      badge = "[![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)]";
      break;
    case "GNU General Public License v3.0":
      badge = "[![License: GNU General Public](https://img.shields.io/badge/License-GNU%20General%20Public-blue.svg)]";
      break;
    case "MIT License":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)]";
      break;
    case 'BSD 2-Clause "Simplified" License':
      badge = "[![License: BSD-2-Clause](https://img.shields.io/badge/License-BSD%202%20Clause-blue.svg)]";
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      badge = "[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203%20Clause-blue.svg)]";
      break;
    case "Boost Software License 1.0":
      badge = "[![License: BSL-1](https://img.shields.io/badge/License-BSL%201-blue.svg)]";
      break;
    case "Eclipse Public License 2.0":
      badge = "[![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-Eclipse%20Public%20License%202.0-blue.svg)]";
      break;
    case "GNU Affero General Public License v3.0":
      badge = "[![License: AGPL-3.0-only](https://img.shields.io/badge/License-AGPL%203.0%20only-blue.svg)]";
      break;
    case "GNU General Public License v2.0":
      badge = "[![License: GPL-2.0](https://img.shields.io/badge/License-GPL%202.0-blue.svg)]";
      break;
    case "GNU Lesser General Public License v2.1":
      badge = "[![License: LGPL-2.1](https://img.shields.io/badge/License-LGPL%202.1-blue.svg)]";
      break;
    case "Mozilla Public License 2.0":
      badge = "[![License: MPL-2.0](https://img.shields.io/badge/License-MPL%202.0-blue.svg)]";
      break;
    case "The Unlicense":
      badge = "[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)]";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "None":
      link = "";
      break;
    case "Apache License 2.0":
      link = "(https://opensource.org/license/apache-2-0/)";
      break;
    case "GNU General Public License v3.0":
      link = "(https://opensource.org/license/gpl-3-0/)";
      break;
    case "MIT License":
      link = "(https://opensource.org/license/mit/)";
      break;
    case 'BSD 2-Clause "Simplified" License':
      link = "(https://opensource.org/license/bsd-2-clause/)";
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      link = "(https://opensource.org/license/bsd-3-clause/)";
      break;
    case "Boost Software License 1.0":
      link = "(https://opensource.org/license/bsl1-0-html/)";
      break;
    case "Eclipse Public License 2.0":
      link = "(https://opensource.org/license/epl-2-0/)";
      break;
    case "GNU Affero General Public License v3.0":
      link = "(https://opensource.org/license/agpl-v3/)";
      break;
    case "GNU General Public License v2.0":
      link = "(https://opensource.org/license/gpl-2-0/)";
      break;
    case "GNU Lesser General Public License v2.1":
      link = "(https://opensource.org/license/lgpl-2-1/)";
      break;
    case "Mozilla Public License 2.0":
      link = "(https://opensource.org/license/mpl-2-0/)";
      break;
    case "The Unlicense":
      link = "(https://opensource.org/license/unlicense/)";
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}
## Description 
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
GitHub Profile: [github.com/${data.github}](https://github.com/${data.github})<br>
For further questions, you can reach me at ${data.email}
`;
}

module.exports = generateMarkdown;

