const shell     = require('shelljs')
const inquirer  = require('inquirer')
const services  = require('../services')

const clone = new services.Clone()
const setup = new services.Setup()

const Arguments = {
  SEED: 'seed',
  NAME: 'name',
  DESCRIPTION: 'description',
  IDENTIFIER: 'identifier',
  REMOTE: 'remote'
}


function execute(argv) {
  if (!clone._isGitUrl(argv[Arguments.SEED])) {
    throw 'Invalid seed repo Url!'
    return
  }

  inquirer
    .prompt(
      [{
        type: 'input',
        name: Arguments.NAME,
        message: 'Enter your project name, prefer avoiding spaces as separators',
        default: 'new-project',
        when: answers => argv[Arguments.NAME] === undefined
      },
      {
        type: 'input',
        name: Arguments.DESCRIPTION,
        message: 'Enter a brief and meaningful project description',
        default: 'new project description',
        when: answers => argv[Arguments.DESCRIPTION] === undefined
      },
      {
        type: 'input',
        name: Arguments.IDENTIFIER,
        message: 'Enter your unique App Identifier',
        default: 'new-project.foobar.com',
        when: answers => argv[Arguments.IDENTIFIER] === undefined
      },
      {
        type: 'confirm',
        name: 'hasRemote',
        message: 'Do you want to add a Git repo remote now?',
        when: answers => argv[Arguments.REMOTE] === undefined
      },
      {
        type: 'input',
        name: Arguments.REMOTE,
        message: 'Enter your project repo remote Url',
        default: 'git@github.com:chrisweight/new-project.git',
        when: answers => answers.hasRemote,
        validate: value => cloner._isGitUrl(value)
          ? true
          : 'Please enter a valid Git URL'
      }]
    )
    .then(answers => {
      // 1. Clone repo      
      clone
        .clone(
          argv[Arguments.SEED],
          answers[Arguments.NAME],
          answers[Arguments.REMOTE]
        )

      // 2. Setup project
      setup
        .setProjectValues(
          answers[Arguments.NAME] || argv[Arguments.NAME],
          answers[Arguments.DESCRIPTION] || argv[Arguments.DESCRIPTION],
          answers[Arguments.IDENTIFIER] || argv[Arguments.IDENTIFIER],
          answers[Arguments.REMOTE] || argv[Arguments.REMOTE] || null
        )
        
      // 3. Install dependencies
        .then(result => clone.installDeps())
        .catch(error => console.error(error))

    })
    .catch(error => console.error(error))
}


module.exports = {
  command: '$0',
  desc: 'Clone an Ionic seed repo, apply project settings, install dependencies, go!',
  builder: yargs => {
    yargs
      .options({
        [Arguments.SEED]: {
          describe: 'Seed repo Url to clone',
          type: 'string',
          default: 'git@github.com:chrisweight/cjw-ionic-seed.git',
        },
        [Arguments.NAME]: {
          describe: 'The new project name',
          type: 'string',
        },
        [Arguments.DESCRIPTION]: {
          describe: 'A meaningful description of the project',
          type: 'string',
        },
        [Arguments.IDENTIFIER]: {
          describe: 'The application identifier to use',
          type: 'string',
        },
        [Arguments.REMOTE]: {
          describe: 'The project repo remote Url, must be a valid Git Url',
          type: 'string',
        }
      })
  },
  handler: execute
}
