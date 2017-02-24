'use strict';

var fs = require('fs'),
    _ = require('lodash');

var getDependencies = function getDependencies(dirs) {
  var deps = dirs.map(function (dir, index) {
    if (dir.indexOf('.') !== 0) {
      var packageJsonFile = './node_modules/' + dir + '/package.json';
      if (fs.existsSync(packageJsonFile)) {
        var data = fs.readFileSync(packageJsonFile);
        var json = JSON.parse(data);
        return Object.keys(json.dependencies);
      }
    }
  });
  return [].concat.apply([], deps);
};

var getPackages = function getPackages(dependencies, dirs) {
  var deps = dirs.map(function (dir, index) {
    if (dir.indexOf('.') !== 0) {
      var packageJsonFile = './node_modules/' + dir + '/package.json';
      if (fs.existsSync(packageJsonFile)) {
        var data = fs.readFileSync(packageJsonFile);
        var json = JSON.parse(data);
        if (dependencies.indexOf(json.name) < 0) {
          return json.name;
        }
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
      var dependencies = getDependencies(dirs);
      var packages = getPackages(dependencies, dirs);
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
