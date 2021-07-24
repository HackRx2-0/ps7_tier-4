const express = require('express')
const router = express.Router()
const AWS = require('aws-sdk');
const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({storage: storage});
var uuid = require('uuid');
AWS.config.loadFromPath('./config.json')

const s3Client = new AWS.S3({});

router.post('/upload', upload.single("file"),(req,res) => {
    const uploadParams = {
        Bucket: 'hackrx-image-enhancer', 
        Key: uuid.v4(), // pass key
        Body: null, // pass file body
    };
    const params = uploadParams;
    const { content } = req.body;
    uploadParams.Body = content;
    s3Client.upload(params, (err, data) => {
        if (err) {
            res.status(500).json({error:"Error -> " + err});
        }

        res.json({message: 'File uploaded successfully'});
    });
});

module.exports = router
