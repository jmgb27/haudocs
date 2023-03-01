import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const Final = (props) => {
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
      documentname: "HAU-IRB FORM 3.7(A): Final Report Form",
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

export default Final;
