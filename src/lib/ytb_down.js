import youtubedl from "youtube-dl";
import fs from "fs";

class YtDownloader{
    static getMusicStreamer(id){
        return youtubedl('https://www.youtube.com/watch?v=' + id, ["-x", "--audio-format=mp3"])
    }
}

export default YtDownloader;