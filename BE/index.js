const S3 = require("aws-sdk/clients/s3");
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
require("dotenv").config();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);
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

// Upload a file to the S3 bucket
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
                    uploadFiles(files, folderName, res);
                }
            );
            deleteFiles(req.files);
        } else {
            // If the folder already exists, upload all the files
            uploadFiles(files, folderName, res);
            deleteFiles(req.files);
        }
    });
});

function uploadFiles(files, folderName, res) {
    const uploadedFiles = files.map((file) => {
        const params = {
            Bucket: BUCKET_NAME,
            Key: `${folderName}/${file.originalname}`,
            Body: fs.readFileSync(file.path),
        };

        s3.upload(params, (err, data) => {
            if (err) {
                console.log(`Error uploading ${file.originalname}:`, err);
            } else {
                console.log(`File uploaded successfully: ${file.originalname}`);
            }
        });

        return {
            downloadLink: `/files/${folderName}/${file.originalname}`,
            filename: file.originalname,
            fieldname: file.fieldname,
        };
    });

    res.send({
        success: true,
        message: "All files are uploaded successfully.",
        files: uploadedFiles,
    });
}

// Download File from the S3 bucket
app.get("/files/*", (req, res) => {
    // Extract the folder and file name from the URL
    const filePath = decodeURIComponent(req.path.substr(7)); // Remove the "/files/" part from the path

    // Define the file parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: filePath,
    };

    // Retrieve the file name and set the Content-Disposition header to include the file name
    const fileName = filePath.split("/").pop();
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);

    // Retrieve the file
    s3.getObject(params)
        .createReadStream()
        .on("error", (err) => {
            return res.status(500).send(err);
        })
        .pipe(res);
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
