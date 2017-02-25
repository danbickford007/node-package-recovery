#!/usr/bin/env node

const lister = require('./lister')
const Write = require('./write')
const Edit = require('./edit')

console.log('Checking node_modules: ')

let command = process.argv[2]

switch (command) {
  case 'list':
    lister()
    break
  case 'write':
    let write = new Write()
    write.start()
    break
  case 'new':
    let writeNew = new Write('')
    writeNew.start()
    break
  case 'edit':
    let edit = new Edit('')
    edit.start()
    break
  default:
    console.log('Help:')
    console.log('available commands:')
    console.log('list = list all node modules')
    console.log('edit = recreate the dependencies in package.json')
    console.log('write = write a package.npr.json file')
    console.log('new = write a new package.json file - will overwrite! = be careful!')
}
