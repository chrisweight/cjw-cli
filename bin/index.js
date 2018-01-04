#! /usr/bin/env node

const shell = require('shelljs')
const yargs = require('yargs')
const {
    Cloner
} = require('./cloner')

const repo = 'git@github.com:chrisweight/cjw-ionic-seed.git'

const argv = yargs
    .usage('Usage: $0 -p [string] -r [string]')
    .example('$0 -p new-project-name -r git@github.com:/user/project-repo.git')
    .describe('p', 'The new directory and project name')
    .describe('r', 'An optional remote repo URL to add as origin')
    .nargs('p', 1)
    .demandOption(['p'])
    .epilog('copyright 2018')
    .argv

let cloner = new Cloner()

cloner.clone(
    repo,
    argv.p,
    argv.r
)