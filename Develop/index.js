const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'Other', 'N/A'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the command to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user needs to know about contributing to the repo?',
        name: 'contribution',
    }
]).then(({
    title,
    description,
    installation,
    instructions,
    credit,
    license,
    username,
    email,
    usage,
    contribution
})=>{ const template = 

`# ${title}

## Description 
${description}

## Usage 
${usage}

## Installation commands
${installation}

## Contribution 
${contribution}

## Instructions 
${instructions}

## Credits 
${credit}

## License 
${license}

# Contact
* GitHub: 
${username}
* Email: 
${email}`;
        
createNewFile(title,template);
});


function createNewFile(fileName, data){
    fs.writeFile(`./${fileName}.md`, data, (err)=> {
        if (err) {
            console.log(err)
        }
        console.log('Your README file was generated!');
    })
}