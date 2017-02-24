"use strict";

var fs = require('fs');
var generateDependencies = require('./generateDependencies');
var getDependencies = require('./getDependencies');
var getPackages = require('./getPackages');

var packager = function packager() {
  return new Promise(function (resolve, reject) {
    fs.readdir('./node_modules', function (err, dirs) {
      if (err) {
        console.log(err);
        reject(err);
      }
      var packages = getPackages(getDependencies(dirs), dirs);
      generateDependencies(packages).then(function (data) {
        resolve(data);
      });
    });
  });
};

module.exports = packager;
//# sourceMappingURL=packager.js.map
