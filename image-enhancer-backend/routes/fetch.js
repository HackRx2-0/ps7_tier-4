const express = require('express')
const router = express.Router()
const AWS = require('aws-sdk');
const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

AWS.config.loadFromPath('./config.json')
var async = require('async');

const s3Client = new AWS.S3({})



router.get("/fetch-base64s", async (req, res) => {
  let params = { Bucket: "hackrx-image-enhancer" };
 
  var payload = {
    list: [],
    objects: []
  };

  // Send your response after all requests have completed
  var callback = function (err) {
    res.json({payload: payload.objects});
  }

  s3Client.listObjects(params, function (err, data) {
    payload.list = data.Contents;
    // GET objects in parallel
    async.each(data.Contents, function (file, cb) {
      s3Client.getObject({  Bucket: "hackrx-image-enhancer", Key: file.Key }, function (err, resp) {
        payload.objects.push(resp.Body.toString());
        cb();
      })
    }, callback);
  });
});


module.exports = router;