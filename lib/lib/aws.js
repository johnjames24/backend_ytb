"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _awsSdk = require("aws-sdk");

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _KEY = "AKIA6BUZB5TBO6BPLKQ5";
var _SECRET = "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";

_awsSdk2.default.config.update({
    accessKeyId: _KEY,
    secretAccessKey: _SECRET
});

var s3 = new _awsSdk2.default.S3();

var _BUCKET_NAME = "music-table";

var AWSBridge = function () {
    function AWSBridge() {
        _classCallCheck(this, AWSBridge);
    }

    _createClass(AWSBridge, null, [{
        key: "uploadTos3",
        value: function uploadTos3(music, name) {
            // var body = music.pipe(zlib.createGzip());

            // s3.upload({Bucket : _BUCKET_NAME, Key: name, Body : body, ContentType : "audio/mp3"})
            //     .on('httpUploadProgress', function(evt) { console.log(evt); })
            //     .send((err, data) => console.log(err, data));

            //music.pipe(fs.createWriteStream('myvideo.mp3'));
        }
    }, {
        key: "checkIfExists",
        value: async function checkIfExists(spotifyId) {
            var params = {
                Bucket: _BUCKET_NAME,
                Key: spotifyId + ".mp3"
            };
            try {
                await s3.headObject(params).promise();
                return true;
            } catch (err) {
                return false;
            }
        }
    }]);

    return AWSBridge;
}();

exports.default = AWSBridge;