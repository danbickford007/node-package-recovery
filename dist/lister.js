'use strict';

var packager = require('./packager');

module.exports = function () {
  packager().then(function (data) {
    console.log(data);
  });
};
//# sourceMappingURL=lister.js.map
