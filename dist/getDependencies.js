"use strict";

var fullDeps = require('./fullDeps');

var getDependencies = function getDependencies(dirs) {
  var json = fullDeps(dirs).map(function (item, index) {
    if (item) {
      return Object.keys(item.dependencies);
    }
  });
  return [].concat.apply([], json);
};

module.exports = getDependencies;
//# sourceMappingURL=getDependencies.js.map
