import AWS from "aws-sdk";
import zlib from "zlib";

const _KEY = "AKIA6BUZB5TBO6BPLKQ5";
const _SECRET = "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";

AWS.config.update({
    accessKeyId: _KEY,
    secretAccessKey: _SECRET
});

const s3 =  new AWS.S3();

const _BUCKET_NAME = "music-table";


class AWSBridge{
    static uploadTos3(music, name){
        var body = music.pipe(zlib.createGzip());

        s3.upload({Bucket : _BUCKET_NAME, Key: name, Body : body})
            .on('httpUploadProgress', function(evt) { console.log(evt); })
            .send((err, data) => console.log(err, data));
    }

    static async checkIfExists(spotifyId){
        const params = {
            Bucket: _BUCKET_NAME,
            Key: `${spotifyId}.mp3` 
        }
        try {
                await s3.headObject(params).promise()
                return true;
            } catch (err) {
                return false;
        }
    }
}

export default AWSBridge;