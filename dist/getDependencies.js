"use strict";

var fullDeps = require('./fullDeps');
var _ = require('lodash');

var getDependencies = function getDependencies(dirs) {
  var json = fullDeps(dirs).map(function (item, index) {
    if (item) {
      return Object.keys(item.dependencies);
    }
  });
  return _.without([].concat.apply([], json), undefined);
};

module.exports = getDependencies;
//# sourceMappingURL=getDependencies.js.map
