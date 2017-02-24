"use strict";

var fs = require('fs');

var fullDeps = function fullDeps(dirs) {
  return dirs.map(function (dir, index) {
    if (dir.indexOf('.') !== 0) {
      var packageJsonFile = './node_modules/' + dir + '/package.json';
      if (fs.existsSync(packageJsonFile)) {
        return JSON.parse(fs.readFileSync(packageJsonFile));
      }
    }
  });
};

module.exports = fullDeps;
//# sourceMappingURL=fullDeps.js.map
