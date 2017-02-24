#!/usr/bin/env node
'use strict';

var lister = require('./lister');
var Write = require('./write');

console.log('Checking node_modules: ');

var command = process.argv[2];

switch (command) {
  case 'list':
    lister();
    break;
  case 'write':
    var write = new Write();
    write.start();
    break;
  default:
    console.log('Help:');
    console.log('available commands:');
    console.log('list = list all node modules');
    console.log('write = write a package.nmp.json file');
}
//# sourceMappingURL=app.js.map
