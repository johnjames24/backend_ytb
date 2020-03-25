"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bridge = require("./bridge");

var _bridge2 = _interopRequireDefault(_bridge);

var _youtubeDl = require("youtube-dl");

var _youtubeDl2 = _interopRequireDefault(_youtubeDl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function main(title, artist) {
    var youtubeId = await _bridge2.default.getYoutubeEqual(title, artist);
    return new Promise(function (resolve, reject) {
        _youtubeDl2.default.getInfo('https://www.youtube.com/watch?v=' + youtubeId, [], function (err, info) {
            if (err) resolve({
                error: err
            });
            resolve(info);
        });
    });
}

exports.default = main;