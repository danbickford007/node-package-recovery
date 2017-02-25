'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');
var packager = require('./packager');

var Write = function () {
  function Write() {
    var modifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.smp';

    _classCallCheck(this, Write);

    this.modifier = modifier;
    this.data = '';
  }

  _createClass(Write, [{
    key: 'start',
    value: function start() {
      var _this = this;

      packager().then(function (data) {
        _this.write(data);
      });
    }
  }, {
    key: 'organizeFile',
    value: function organizeFile(data) {
      return '{\n  "name": "' + process.cwd().split('/').pop() + '",\n  "version": "0.0.1",\n  "dependencies":{\n' + data + '  }\n}';
    }
  }, {
    key: 'write',
    value: function write(data) {
      var _this2 = this;

      var content = this.organizeFile(data);
      fs.writeFile('package' + this.modifier + '.json', content, function (err) {
        if (err) {
          return console.log(err);
        }

        console.log('package' + _this2.modifier + '.json was saved!');
      });
    }
  }]);

  return Write;
}();

module.exports = Write;
//# sourceMappingURL=write.js.map
