#!/usr/bin/env node

let filer = require('./filer')

console.log('Checking node_modules: ')

let command = process.argv[2]

switch (command) {
  case 'list':
    filer()
    break
  default:
    console.log('Help:')
    console.log('available commands:')
    console.log('list = list all node modules')
}
