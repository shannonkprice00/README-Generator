// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write any installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write usage information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Write contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Write test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license is used for your project?',
        choices: [
            'None',
            'Apache License 2.0', 
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log('Successfully created README.md!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const fileName = "README.md";
        writeToFile(fileName, data);
    })
}

// Function call to initialize app
init();
