import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const Continuing = (props) => {
  const { handleCloseModal } = props;

  function handleDownload(id) {
    // logic to download data for the row with the specified ID
  }

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
      documentname: "HAU-IRB FORM 3.1(A): Progress Report Form",
      sentby: "Bentong Rodriguez",
      datesent: "January 28, 2023",
    },
    {
      id: "2",
      documentname: "HAU-IRB FORM 3.2(A): Early Termination Report Form",
      sentby: "Bentong Rodriguez",
      datesent: "January 28, 2023",
    },
    {
      id: "3",
      documentname: "HAU-IRB FORM 3.3(A): Amendment Review Form",
      sentby: "Bentong Rodriguez",
      datesent: "January 28, 2023",
    },
    {
      id: "4",
      documentname:
        "HAU-IRB FORM 3.4(A): Protocol Deviation/Violation Report Form",
      sentby: "Bentong Rodriguez",
      datesent: "January 28, 2023",
    },
    {
      id: "5",
      documentname: "HAU-IRB FORM 3.5(A): Serious Adverse Event Form",
      sentby: "Bentong Rodriguez",
      datesent: "January 28, 2023",
    },
    {
      id: "6",
      documentname: "HAU-IRB FORM 3.5(B): Reportable Negative Events Form ",
      sentby: "Bentong Rodriguez",
      datesent: "January 28, 2023",
    },
    {
      id: "7",
      documentname: "HAU-IRB FORM 3.6(A) Application for Continuing Review",
      sentby: "Bentong Rodriguez",
      datesent: "January 28, 2023",
    },
  ];

  const closeStyle = {
    color: "maroon",
    borderColor: "maroon",
  };

  const downloadStyle = {
    color: "maroon",
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
      <div className="flex items-end justify-end mt-[1rem]">
        <Button
          onClick={handleCloseModal}
          style={closeStyle}
          variant="outlined"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Continuing;
