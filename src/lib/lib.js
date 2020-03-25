import Bridge from "./bridge";
import youtubedl from "youtube-dl";

async function main(title, artist){
    var youtubeId = await Bridge.getYoutubeEqual(title, artist);
    return new Promise((resolve, reject) => {
        youtubedl.getInfo('https://www.youtube.com/watch?v=' + youtubeId, [], (err, info) => {
            if (err) resolve({
                error : err
            });        
            resolve(info);
        });
    });
}

export default main;