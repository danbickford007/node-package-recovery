'use strict';

var fs = require('fs');

module.exports = function () {
  var finalData = '';
  return new Promise(function (resolve, reject) {
    fs.readdir('./node_modules', function (err, dirs) {
      if (err) {
        console.log(err);
        return;
      }
      dirs.forEach(function (dir, index) {
        if (dir.indexOf('.') !== 0) {
          var packageJsonFile = './node_modules/' + dir + '/package.json';
          if (fs.existsSync(packageJsonFile)) {
            var data = fs.readFileSync(packageJsonFile);
            if (err) {
              console.log(err);
            } else {
              var json = JSON.parse(data);
              var comma = index < dirs.length - 1 ? '", \n' : '"\n';
              finalData = finalData + ('    "' + json.name + '": "' + json.version + comma);
            }
          }
        }
      });
      resolve(finalData);
    });
  });
};
//# sourceMappingURL=packager.js.map
