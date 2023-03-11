import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import Adminsidebar from "../Adminsidebar";
import "./transfer.css";

const AdminTransfer = () => {
  const [file, setFile] = useState(null);
  const [reviewType, setReviewType] = useState("");
  const [sendTo, setSendTo] = useState("");
  const [comment, setComment] = useState("");

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleReviewTypeChange = (event) => {
    setReviewType(event.target.value);
  };

  const handleSendToChange = (event) => {
    setSendTo(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("File:", file);
    console.log("Review type:", reviewType);
    console.log("Send to:", sendTo);
    console.log("Comment:", comment);
  };

  const submitStyle = {
    color: "white",
    backgroundColor: "maroon",
  };

  return (
    <Adminsidebar>
      <div className="transfer">
        <Box sx={{ py: 10 }}>
          <Box sx={{ maxWidth: "600px", margin: "0 auto", px: 2 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                borderWidth: 2,
                borderColor: "maroon",
                borderRadius: 2,
                p: 4,
              }}
            >
              <InputLabel htmlFor="file-upload">Transfer Files</InputLabel>
              <input
                multiple
                type="file"
                id="file-upload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                style={{ width: "100%" }}
              />

              <FormControl sx={{ width: "100%" }}>
                <InputLabel>Review Type</InputLabel>
                <Select value={reviewType} onChange={handleReviewTypeChange}>
                  <MenuItem value="Type A">Exempt from Review</MenuItem>
                  <MenuItem value="Type A">Full Board Review</MenuItem>
                  <MenuItem value="Type B">Expedited Review</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Send To"
                value={sendTo}
                onChange={handleSendToChange}
                sx={{ width: "100%" }}
              />

              <TextField
                label="Comment"
                multiline
                rows={4}
                value={comment}
                onChange={handleCommentChange}
                sx={{ width: "100%" }}
              />

              <Button
                type="submit"
                variant="contained"
                style={submitStyle}
                sx={{ width: "100%", height: "3rem" }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </Adminsidebar>
  );
};

export default AdminTransfer;
