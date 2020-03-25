"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ytSearch = require("yt-search");

var _ytSearch2 = _interopRequireDefault(_ytSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

///Converts Spotify info to youtube
var Bridge = function () {
    function Bridge() {
        _classCallCheck(this, Bridge);
    }

    _createClass(Bridge, null, [{
        key: "_findYoutube",
        value: function _findYoutube(keyword) {
            return new Promise(function (resolve, reject) {
                (0, _ytSearch2.default)(keyword, function (err, r) {
                    if (err) reject(err);else resolve(r);
                });
            });
        }
    }, {
        key: "getYoutubeEqual",
        value: async function getYoutubeEqual(title, auther) {
            var data = await Bridge._findYoutube(title + " - " + auther);

            if (data["videos"].length !== 0) return data["videos"][0]["videoId"];else throw new Error(title + " - " + auther + " not found!!");
        }
    }]);

    return Bridge;
}();

exports.default = Bridge;