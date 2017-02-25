'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');
var packager = require('./packager');
var _ = require('lodash');

var Edit = function () {
  function Edit() {
    _classCallCheck(this, Edit);

    this.data = '';
  }

  _createClass(Edit, [{
    key: 'start',
    value: function start() {
      var _this = this;

      packager().then(function (data) {
        _this.edit(data);
      });
    }
  }, {
    key: 'edit',
    value: function edit(data) {
      var packJson = fs.readFileSync('package.json');
      var pack = JSON.parse(packJson.toString());
      var deps = pack.dependencies;
      var attempt = '{' + data + '}';
      var merged = _.merge(deps, JSON.parse(attempt));
      pack.dependencies = merged;
      fs.writeFile('package.json', JSON.stringify(pack, null, 2), function (err) {
        if (err) {
          return console.log(err);
        }

        console.log('package.json dependencies was edited!');
      });
    }
  }]);

  return Edit;
}();

module.exports = Edit;
//# sourceMappingURL=edit.js.map
