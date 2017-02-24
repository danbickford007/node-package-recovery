#!/usr/bin/env node
'use strict';

var filer = require('./filer');

console.log('Checking node_modules: ');

var command = process.argv[2];

switch (command) {
  case 'list':
    filer();
    break;
  default:
    console.log('Help:');
    console.log('available commands:');
    console.log('list = list all node modules');
}
//# sourceMappingURL=app.js.map
