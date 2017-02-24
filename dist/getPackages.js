"use strict";

var _ = require('lodash');

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

module.exports = getPackages;
//# sourceMappingURL=getPackages.js.map
