const S3 = require("aws-sdk/clients/s3");
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

app.use(cors());
app.use(bodyParser.json());

// Create an S3 client
const s3 = new S3({
    accessKeyId: "AKIASURSMXDX3A2STR44",
    secretAccessKey: "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",
    region: "ap-southeast-1",
});

const BUCKET_NAME = "hauodocs";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

const deleteFiles = (files) => {
    files.forEach((file) => {
        fs.unlink(file.path, (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
};

const uploadFiles = (files, folderName) => {
    files.forEach((file) => {
        const fileName = file.filename;
        const fileContent = fs.readFileSync(file.path);

        console.log(fileName);

        // Define the file parameters
        const params = {
            Bucket: BUCKET_NAME,
            Key: folderName + "/" + fileName,
            Body: fileContent,
        };

        // Upload the file
        s3.upload(params, (err, data) => {
            if (err) {
                console.error(err);
            }
        });
    });
};

//Upload a file to the S3 bucket
app.post("/files", upload.any(), (req, res) => {
    const folderName = req.headers.filefolder;
    if (!req.files) {
        res.status(400).send({ message: "No files were uploaded." });
        return;
    }

    const files = Object.values(req.files);

    console.log(files);
    // Check if the folder exists
    s3.headObject({ Bucket: BUCKET_NAME, Key: folderName }, (err, metadata) => {
        if (err && err.code === "NotFound") {
            // If the folder doesn't exist, create one
            s3.putObject(
                { Bucket: BUCKET_NAME, Key: folderName },
                (err, data) => {
                    if (err) {
                        res.send(err);
                    }
                    // If the folder is created successfully, upload all the files
                    uploadFiles(files, folderName);
                    res.send({
                        success: true,
                        message: "All files are uploaded successfully.",
                        files: files,
                    });
                }
            );
            deleteFiles(req.files);
        } else {
            // If the folder already exists, upload all the files
            uploadFiles(files, folderName);
            res.send({
                success: true,
                message: "All files are uploaded successfully.",
                files: files,
            });
            deleteFiles(req.files);
        }
    });
});

// Download File from the S3 bucket
app.get("/files/:key", (req, res) => {
    // Define the file parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: req.params.key,
    };

    // Retrieve the file
    s3.getObject(params, (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }

        res.send(data.Body);
    });
});

// Delete file from the S3 bucket
app.delete("/files/:key", (req, res) => {
    // Define the file parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: req.params.key,
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
    console.log("Server listening on port 8080");
});
