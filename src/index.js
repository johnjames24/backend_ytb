import main from "./lib/lib";
import express from "express";


const PORT = process.env.PORT || 5000;
var app = express();

app.get('/yt/:title/:artist', async function(req, res) {
    var {title, artist} = req.params;
    res.json(await main(decodeURIComponent(title), decodeURIComponent(artist)));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));