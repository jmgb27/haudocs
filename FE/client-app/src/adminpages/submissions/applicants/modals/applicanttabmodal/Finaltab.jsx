import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../tabmodal.css";

const Finaltab = (props) => {
  const [open, setOpen] = useState(false);
  const { handleCloseModal } = props;
  const [protocolNumber, setProtocolNumber] = React.useState("");
  const [reviewType, setReviewType] = React.useState("");
  const [isCheckedHau, setIsCheckedHau] = React.useState(false);
  const [isCheckedOthers, setIsCheckedOthers] = React.useState(false);
  const [assignTo, setAssignTo] = React.useState("");

  const handleProtocolNumberChange = (event) => {
    setProtocolNumber(event.target.value);
  };

  const handleReviewTypeChange = (event) => {
    setReviewType(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    if (event.target.name === "Hau") {
      setIsCheckedHau(event.target.checked);
    } else if (event.target.name === "Others") {
      setIsCheckedOthers(event.target.checked);
    }
  };

  const handleAssignToChange = (event) => {
    setAssignTo(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleDownload(id) {
    // logic to download data for the row with the specified ID
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      protocolNumber,
      reviewType,
      assignTo,
      isCheckedHau,
      isCheckedOthers,
    });
  };
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
      <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isCheckedHau}
              onChange={handleCheckboxChange}
              name="Hau"
            />
          }
          label="Hau"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isCheckedOthers}
              onChange={handleCheckboxChange}
              name="Others"
            />
          }
          label="Others"
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextField
          label="Protocol Number"
          value={protocolNumber}
          onChange={handleProtocolNumberChange}
        />
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel>Review Type</InputLabel>
            <Select value={reviewType} onChange={handleReviewTypeChange}>
              <MenuItem value="Type A">Full Board Review</MenuItem>
              <MenuItem value="Type B">Expedited Review</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormControl sx={{ minWidth: 120, marginBottom: "2rem" }}>
          <InputLabel>Assign To</InputLabel>
          <Select value={assignTo} onChange={handleAssignToChange}>
            <MenuItem value="Person A">Person A</MenuItem>
            <MenuItem value="Person B">Person B</MenuItem>
            <MenuItem value="Person C">Person C</MenuItem>
          </Select>
        </FormControl>
      </Box>
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
