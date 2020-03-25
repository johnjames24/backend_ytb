"use strict";

var _lib = require("./lib/lib");

var _lib2 = _interopRequireDefault(_lib);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 5000;
var app = (0, _express2.default)();

app.get('/yt/:title/:artist', async function (req, res) {
    var _req$params = req.params,
        title = _req$params.title,
        artist = _req$params.artist;

    res.json((await (0, _lib2.default)(decodeURIComponent(title), decodeURIComponent(artist))));
});

app.listen(PORT, function () {
    return console.log("Listening on " + PORT);
});