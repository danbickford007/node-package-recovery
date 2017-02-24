'use strict';

var fs = require('fs'),
    _ = require('lodash');

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

var getDependencies = function getDependencies(dirs) {
  var json = fullDeps(dirs).map(function (item, index) {
    if (item) {
      return Object.keys(item.dependencies);
    }
  });
  return [].concat.apply([], json);
};

var getPackages = function getPackages(dependencies, dirs) {
  var deps = dirs.map(function (item) {
    if (item) {
      if (dependencies.indexOf(item) < 0) {
        return item;
      }
    }
  });
  return _.without(deps, undefined);
};

var packager = function packager() {
  var finalData = '';
  return new Promise(function (resolve, reject) {
    fs.readdir('./node_modules', function (err, dirs) {
      if (err) {
        console.log(err);
        return;
      }
      var packages = getPackages(getDependencies(dirs), dirs);
      packages.forEach(function (dir, index) {
        if (dir.indexOf('.') !== 0) {
          var packageJsonFile = './node_modules/' + dir + '/package.json';
          if (fs.existsSync(packageJsonFile)) {
            var data = fs.readFileSync(packageJsonFile);
            if (err) {
              console.log(err);
            } else {
              var json = JSON.parse(data);
              var comma = index < packages.length - 1 ? '", \n' : '"\n';
              finalData = finalData + ('    "' + json.name + '": "' + json.version + comma);
            }
          }
        }
      });
      resolve(finalData);
    });
  });
};

module.exports = packager;
//# sourceMappingURL=packager.js.map
