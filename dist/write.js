'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');

var Write = function () {
  function Write() {
    _classCallCheck(this, Write);

    this.data = '';
  }

  _createClass(Write, [{
    key: 'start',
    value: function start() {
      var _this = this;

      new Promise(function (resolve, reject) {
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
                  var comma = index < dirs.length - 1 ? ', \n' : '\n';
                  _this.data = _this.data + ('    "' + json.name + '": ' + json.version + comma);
                }
              }
            }
          });
          resolve();
        });
      }).then(function () {
        _this.write();
      });
    }
  }, {
    key: 'organizeFile',
    value: function organizeFile(data) {
      return '{\n  "name": "",\n  "dependencies":{\n' + data + '  }\n}';
    }
  }, {
    key: 'write',
    value: function write() {
      var content = this.organizeFile(this.data);
      fs.writeFile('package.smp.json', content, function (err) {
        if (err) {
          return console.log(err);
        }

        console.log('The file was saved!');
      });
    }
  }]);

  return Write;
}();

module.exports = Write;
//# sourceMappingURL=write.js.map
