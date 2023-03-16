import React, { useState, useContext, useEffect } from "react";
import FormData from "form-data";
import { useNavigate } from "react-router-dom";
import { StatusContext } from "../application/StatusContext";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

const Continuing = () => {
  const navigate = useNavigate();
  const { handleStatusChange } = useContext(StatusContext);
  const [firstFile, setFirstFile] = useState(null);
  const [secondFile, setSecondFile] = useState(null);
  const [thirdFile, setThirdFile] = useState(null);
  const [fourthFile, setFourthFile] = useState(null);
  const [fifthFile, setFifthFile] = useState(null);
  const [sixthFile, setSixthFile] = useState(null);
  const [seventhFile, setSeventhFile] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData();
    if (firstFile) {
      form.append("firstFile", firstFile);
    }
    if (secondFile) {
      form.append("secondFile", secondFile);
    }
    if (thirdFile) {
      form.append("thirdFile", thirdFile);
    }
    if (fourthFile) {
      form.append("fourthFile", fourthFile);
    }
    if (fifthFile) {
      form.append("fifthFile", fifthFile);
    }
    if (sixthFile) {
      form.append("sixthFile", sixthFile);
    }
    if (seventhFile) {
      form.append("seventhFile", seventhFile);
    }

    try {
      const response = await fetch("http://localhost:3000/files", {
        method: "POST",
        headers: {
          filefolder: "folder",
        },
        body: form,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmSubmit = () => {
    setShowConfirmation(false);
    navigate("/application");
    handleStatusChange("Your application is in process for Continuing review");
    handleSubmit();
  };

  useEffect(() => {
    // Check if at least one file has been uploaded
    const hasUploadedFile = [
      firstFile,
      secondFile,
      thirdFile,
      fourthFile,
      fifthFile,
      sixthFile,
      seventhFile,
    ].some((file) => file !== null);
    setIsButtonDisabled(!hasUploadedFile);
  }, [
    firstFile,
    secondFile,
    thirdFile,
    fourthFile,
    fifthFile,
    sixthFile,
    seventhFile,
  ]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setShowConfirmation(true);
      }}
    >
      <div className="sub-containerr">
        <div className="sub-title">
          <h1 class="text-lg font-bold">Continuing Review</h1>
          <hr />
          <br />
          <div className="files">
            <div className="form">
              <article className="upload">
                <label
                  class="block mb-5 text-lg font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  1. HAU-IRB 3.1(A): Progress Report Form
                </label>
                <input
                  class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="multiple_files"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={(event) => {
                    setFirstFile(event.target.files[0]);
                  }}
                />
              </article>
              <article className="upload">
                <label
                  class="block mb-5 text-lg font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  2. HAU-IRB FORM 3.2(A): Early Termination Report Form
                </label>
                <input
                  class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={(event) => {
                    setSecondFile(event.target.files[0]);
                  }}
                />
              </article>
              <article className="upload">
                <label
                  class="block mb-5 text-lg font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  3. HAU-IRB FORM 3.3(A): Amendment Review Form
                </label>
                <input
                  class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={(event) => {
                    setThirdFile(event.target.files[0]);
                  }}
                />
              </article>
              <article className="ncip">
                <label
                  class="block mb-5 text-lg font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  4. HAU-IRB FORM 3.4(A): Protocol Deviation/Violation Report
                  Form
                </label>
                <input
                  class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={(event) => {
                    setFourthFile(event.target.files[0]);
                  }}
                />
              </article>
              <article className="upload">
                <label
                  class="block mb-5 text-lg font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  5. HAU-IRB FORM 3.5(A): Serious Adverse Event Form
                </label>
                <input
                  class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={(event) => {
                    setFifthFile(event.target.files[0]);
                  }}
                />
              </article>
              <article className="upload">
                <label
                  class="block mb-5 text-lg font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  6. HAU-IRB FORM 3.5(B): Reportable Negative Events Form
                </label>
                <input
                  class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={(event) => {
                    setSixthFile(event.target.files[0]);
                  }}
                />
              </article>
              <article className="upload">
                <label
                  class="block mb-5 text-lg font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  7. HAU-IRB FORM 3.6(A): Application for Continuing Review
                </label>
                <input
                  class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={(event) => {
                    setSeventhFile(event.target.files[0]);
                  }}
                />
              </article>
              <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" class="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                  ></textarea>
                </div>
                <div class="flex space-x-4 items-center justify-end px-3 py-2 border-t dark:border-gray-600">
                  <button
                    className={`inline-flex items-center py-2.5 px-[3rem] text-xs font-medium text-center text-white bg-maroon hover:bg-red-800 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 ${
                      isButtonDisabled ? "btn-disabled" : ""
                    }`}
                    type="submit"
                    id="sub"
                    disabled={isButtonDisabled}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <Dialog
                open={showConfirmation}
                onClose={() => setShowConfirmation(false)}
              >
                <DialogTitle>Confirm Submit</DialogTitle>
                <DialogContent>
                  <Typography variant="body1">
                    Are you sure you want to submit the form?
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button
                    sx={{ color: "maroon" }}
                    onClick={() => setShowConfirmation(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    sx={{ color: "maroon" }}
                    onClick={handleConfirmSubmit}
                    autoFocus
                  >
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Continuing;
