const S3 = require('aws-sdk/clients/s3');
const express = require('express');
const app = express();
const fs = require('fs');

// Create an S3 client
const s3 = new S3({
    accessKeyId: 'AKIASURSMXDX3A2STR44',
    secretAccessKey: '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',
    region: 'ap-southeast-1'
});

const BUCKET_NAME = 'hauodocs';

app.post('/files', (req, res) => {
    const file = req.body.file;
    const fileName = file.name;
    const folderName = req.headers.filefolder;
    
    const fileContent = fs.readFileSync(file.path);
    
    // Define the file parameters
    const params = {
      Bucket: BUCKET_NAME,
      Key: folderName + "/" + fileName,
      Body: fileContent,
    };
    
    // Check if the folder exists
    s3.headObject({ Bucket: BUCKET_NAME, Key: folderName }, (err, metadata) => {
      if (err && err.code === 'NotFound') {
        // If the folder doesn't exist, create one
        s3.putObject({ Bucket: BUCKET_NAME, Key: folderName }, (err, data) => {
          if (err) {
            res.send(err);
          }
          // If the folder is created successfully, upload the file
          s3.upload(params, (err, data) => {
            if (err) {
              res.send(err);
            }
            res.send(data);
          });
        });
      } else {
        // If the folder already exists, upload the file
        s3.upload(params, (err, data) => {
          if (err) {
            res.send(err);
          }
          res.send(data);
        });
      }
    });
  });  

  app.get('/files/:key', (req, res) => {
    // Define the file parameters
    const params = {
      Bucket: BUCKET_NAME,
      Key: req.params.key
    };
  
    // Retrieve the file
    s3.getObject(params, (err, data) => {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.send(data.Body);
    });
  });

  app.delete('/files/:key', (req, res) => {
    // Define the file parameters
    const params = {
      Bucket: BUCKET_NAME,
      Key: req.params.key
    };
  
    // Delete the file
    s3.deleteObject(params, (err, data) => {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.send(data);
    });
  });

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});