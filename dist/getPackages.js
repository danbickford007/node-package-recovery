"use strict";

var _ = require('lodash');

var sort = function sort(deps) {
  return deps.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};

var getPackages = function getPackages(dependencies, dirs) {
  var deps = dirs.map(function (item) {
    if (item) {
      if (dependencies.indexOf(item) < 0) {
        return item;
      }
    }
  });
  return _.without(sort(deps), undefined);
};

module.exports = getPackages;
//# sourceMappingURL=getPackages.js.map
