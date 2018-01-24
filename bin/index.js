#! /usr/bin/env node

const yargs     = require('yargs')
const commands  = require('./commands')

yargs
  .command(commands.create)
  .help()
  .wrap(120)
  .argv
