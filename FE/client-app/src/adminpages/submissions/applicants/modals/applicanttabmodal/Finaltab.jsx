import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Card } from "flowbite-react";
import "../tabmodal.css";

const Finaltab = (props) => {
  const [open, setOpen] = useState(false);
  const { handleCloseModal } = props;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleDownload(id) {
    // logic to download data for the row with the specified ID
  }

  function handleSubmit() {
    // Add code here to submit the data
    setOpen(false);
  }

  const downloadStyle = {
    color: "maroon",
  };

  const columns = [
    { field: "documentname", headerName: "DocumentName", width: "180" },
    { field: "sentby", headerName: "Sent By", width: "175" },
    { field: "datesent", headerName: "Date Sent", width: "200" },
    {
      field: "action",
      headerName: "Action",
      width: "100",
      renderCell: (params) => (
        <Button style={downloadStyle} onClick={() => handleDownload(params.id)}>
          Download
        </Button>
      ),
    },
  ];

  const rows = [
    {
      id: "1",
      documentname: "HAU-IRB FORM 3.7(A): Final Report Form",
      sentby: "Bentong Rodriguez",
      datesent: "January 28, 2023",
    },
  ];
  const closeStyle = {
    color: "maroon",
    borderColor: "maroon",
  };

  const submitStyle = {
    color: "white",
    backgroundColor: "maroon",
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        classes={{ header: "custom-header" }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <div className="review">
        <Card className="reviewertab">
          <div className="flex items-center mt-2 space-x-2">
            <h1 className="text-white ml-[1.3rem]">
              Enter your protocol number:
            </h1>
            <input></input>
            <div class="flex items-center border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                class="w-4 h-4 ml-[3rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-checkbox-1"
                class="w-full py-4 ml-2 text-sm font-medium text-white dark:text-gray-300"
              >
                HAU
              </label>
            </div>
            <div class="flex items-center border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                class="w-4 h-4 ml-[1rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-checkbox-1"
                class="w-full py-4 ml-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Others
              </label>
            </div>
          </div>
          <input
            class="ml-[1.3rem] mt-5 block text-sm text-white cursor-pointer dark:text-gray-400 focus:outline-none dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
            multiple
          />
          <div className="flex items-center justify-start mt-5 space-x-2">
            <h1 className="text-white ml-[1.3rem] mr-[6rem]">
              Type of review:
            </h1>
            <select
              id="review"
              class="bg-gray-50 w-half border border-gray-300 text-gray-900 text-sm focus:ring-maroon focus:border-maroon p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-maroon dark:focus:border-maroon"
            >
              <option selected>Choose type of review</option>
              <option value="NS">Full board review</option>
              <option value="NS">expedited review</option>
            </select>
          </div>

          <div className="text-white ">
            <div className="flex items-center justify-start mt-5 space-x-2">
              <h1 className="text-white ml-[1.3rem] mr-[8.1rem]">Assign To:</h1>
              <select
                id="review"
                class="bg-gray-50 w-half border border-gray-300 text-gray-900 text-sm focus:ring-maroon focus:border-maroon p-1 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-maroon dark:focus:border-maroon"
              >
                <option selected>Choose the reviewer</option>
                <option value="SC">Almond Rosos</option>
                <option value="NS">Myra Cuyagbo</option>
                <option value="NS">Stephanie David</option>
              </select>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex items-end justify-end space-x-2 pb-[2rem]">
        <Button
          style={closeStyle}
          onClick={handleCloseModal}
          variant="outlined"
        >
          Close
        </Button>
        <Button onClick={handleOpen} style={submitStyle} variant="contained">
          Forward
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to submit?</DialogTitle>
        <DialogContent>{/* Add any additional content here */}</DialogContent>
        <DialogActions className="space-x-4">
          <Button variant="outlined" style={closeStyle} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ width: "100px" }}
            style={submitStyle}
            onClick={handleSubmit}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Finaltab;
