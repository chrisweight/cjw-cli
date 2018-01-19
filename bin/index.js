#! /usr/bin/env node

const shell = require('shelljs')
const yargs = require('yargs')
const inquirer = require('inquirer')

const {
    Cloner
} = require('./cloner')
const {
    Setup
} = require('./setup')

const DEFAULT_REPO = `git@github.com:chrisweight/cjw-ionic-seed.git`

const cloner = new Cloner()
const setup = new Setup()

let repo = DEFAULT_REPO;

// Remove the first two default args added by process.
process.argv.splice(0, 2);

const _seedUrl = process.argv[0]

if (!!_seedUrl && cloner._isGitUrl(_seedUrl)) {
    repo = _seedUrl
} 

console.log(`Using ${repo} as seed...`)


// -- 


const questions = [{
        type: 'input',
        name: 'projectName',
        message: 'Enter your project name',
        default: 'new project'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Enter a brief and meaningful project description',
        default: 'new project description'
    },
    {
        type: 'input',
        name: 'appIdentifier',
        message: 'Enter your unique App Identifier',
        default: 'new-project.chrisweight.com'
    },
    {
        type: 'confirm',
        name: 'hasRepo',
        message: 'Do you want to add a Git repo remote now?'
    },
    {
        type: 'input',
        name: 'repoUrl',
        message: 'Enter your project repo remote Url',
        default: 'git@github.com:chrisweight/new-project.git',
        when: answers => answers.hasRepo,
        validate: (value) => cloner._isGitUrl(value) ?
            true : 'Please enter a valid Git URL'
    }
]

// --

inquirer
    .prompt(questions)
    .then(answers => {
        cloner.clone(repo, answers.projectName, answers.repoUrl)

        setup.setProjectValues(
                answers.projectName,
                answers.projectDescription,
                answers.appIdentifier,
                answers.repoUrl
            )
            .then(result => cloner.installDeps())
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))