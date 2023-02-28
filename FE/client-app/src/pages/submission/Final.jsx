import React, { useState } from "react";
import FormData from "form-data";

const Final = () => {
  const [firstFile, setFirstFile] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData();
    if (firstFile) {
      form.append("firstFile", firstFile);
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
  return (
    <form onSubmit={handleSubmit}>
      <div className="sub-containerr">
        <div className="sub-title">
          <h1 class="text-lg font-bold">Final Review</h1>
          <hr />
          <br />
          <div className="files">
            <div className="form">
              <article className="upload">
                <label
                  class="block mb-5 text-lg font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  1. HAU-IRB 3.7(A): Final Report Form
                </label>
                <input
                  class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="multiple_files"
                  type="file"
                  multiple
                  onChange={(event) => {
                    setFirstFile(event.target.files[0]);
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
                    type="submit"
                    class="inline-flex items-center py-2.5 px-[3rem] text-xs font-medium text-center text-white bg-maroon hover:bg-red-800 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Final;
