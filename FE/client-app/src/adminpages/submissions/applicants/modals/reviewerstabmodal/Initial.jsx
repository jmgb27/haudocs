import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const Initial = (props) => {
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
      documentname: "Research Proposal",
      sentby: "Stephanie David",
      datesent: "January 28, 2023",
    },
    {
      id: "2",
      documentname: "Questionnaire/s/Tools",
      sentby: "Stephanie David",
      datesent: "January 28, 2023",
    },
    {
      id: "3",
      documentname: "Informed consent/assentform",
      sentby: "Stephanie David",
      datesent: "January 28, 2023",
    },
    {
      id: "4",
      documentname:
        "NCIP clearance (for studies involving indigenous groups)(if needed)",
      sentby: "Stephanie David",
      datesent: "January 28, 2023",
    },
    {
      id: "5",
      documentname: "HAU-IRB FORM 4.1(A) Protocol Assessment Form",
      sentby: "Stephanie David",
      datesent: "January 28, 2023",
    },
    {
      id: "6",
      documentname: "HAU-IRB FORM 4.1(B) Informed Consent Assessment Form",
      sentby: "Stephanie David",
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

export default Initial;
