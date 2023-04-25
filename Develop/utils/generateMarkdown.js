// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

    `;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `[${license}](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `## [License](#table-of-contents)
    
    This application is covered with the following license:
    
    ${renderLicenseLink(license)}`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

### Table-of-Contents

[Description](#description) \n
[Installation](#installation) \n
[Usage](#usage) \n
[Contributing](#contributing) \n
[Test](#test) \n
[Questions](#questions) \n

### [Description](#table-of-contents)

${data.description}

### [Installation](#table-of-contents)

${data.installation}

### [Usage](#table-of-contents)

${data.usage}

### [Contributing](#contributing)

${data.confirmContributors}

### [Test](#test)

${data.test}

${renderLicenseSection(data.license)}

### [Questions](#questions)

If you have any questions, please feel free to reach out to me at the following links.

[GitHub](https://github.com/${data.github}) \n
[Email: ${data.email}](mailto:${data.email})


`;
}

module.exports = generateMarkdown;
