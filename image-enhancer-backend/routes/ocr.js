const express = require('express')
const router = express.Router()
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json')
var rekognition = new AWS.Rekognition({ apiVersion: '2016-06-27' });

router.post('/ocr',  async (req, res) => {
    const { image } = req.body
    var textract = new AWS.Textract({ apiVersion: "2018-06-27" });
    //var textract = new AWS.Textract();
    const myBuffer = Buffer.from(image, 'base64');
    var params = {
      Document: {
        /* required */
        'Bytes': myBuffer
        // S3Object: {
        //   Bucket: "717577",
        //   Name: "Picture2.png"
        // }
      }
    };
  
    const data = await textract.detectDocumentText(params).promise()
    const { Blocks } = data
    const finalText = []
    Blocks.forEach((b) => {
        finalText.push(b.Text)
    })
    console.log(finalText)
    res.send({finalText})

})


module.exports = router
