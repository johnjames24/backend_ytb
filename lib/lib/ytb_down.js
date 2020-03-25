"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _youtubeDl = require("youtube-dl");

var _youtubeDl2 = _interopRequireDefault(_youtubeDl);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var YtDownloader = function () {
    function YtDownloader() {
        _classCallCheck(this, YtDownloader);
    }

    _createClass(YtDownloader, null, [{
        key: "getMusicStreamer",
        value: function getMusicStreamer(id) {
            _youtubeDl2.default.getInfo('https://www.youtube.com/watch?v=' + id, [], console.log);

            return (0, _youtubeDl2.default)('https://www.youtube.com/watch?v=' + id, []);
        }
    }]);

    return YtDownloader;
}();

exports.default = YtDownloader;