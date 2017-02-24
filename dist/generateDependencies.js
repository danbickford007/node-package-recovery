"use strict";

var fs = require('fs');

var generateDependencies = function generateDependencies(packages) {
  return new Promise(function (resolve, reject) {
    var finalData = '';
    packages.forEach(function (dir, index) {
      if (dir.indexOf('.') !== 0) {
        var packageJsonFile = './node_modules/' + dir + '/package.json';
        if (fs.existsSync(packageJsonFile)) {
          var json = JSON.parse(fs.readFileSync(packageJsonFile));
          var comma = index < packages.length - 1 ? '", \n' : '"\n';
          finalData = finalData + ('    "' + json.name + '": "' + json.version + comma);
        }
      }
    });
    resolve(finalData);
  });
};

module.exports = generateDependencies;
//# sourceMappingURL=generateDependencies.js.map
