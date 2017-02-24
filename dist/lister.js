'use strict';

var packager = require('./packager');

module.exports = function () {
  console.log('Available modules: \n');
  packager().then(function (data) {
    console.log(data);
  });
};
//# sourceMappingURL=lister.js.map
