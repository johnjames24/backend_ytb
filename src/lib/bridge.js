import yts from "yt-search";

///Converts Spotify info to youtube
class Bridge{
    static _findYoutube(keyword){
        return new Promise((resolve, reject) => {
            yts(keyword, (err, r) => {
                if (err) reject(err);
                else resolve(r);
            });
        });
    }

    static async getYoutubeEqual(title, auther){
        var data = await Bridge._findYoutube(`${title} - ${auther}`);

        if (data["videos"].length !== 0)
            return data["videos"][0]["videoId"];
        else
            throw new Error(`${title} - ${auther} not found!!`)
    }
}

export default Bridge;