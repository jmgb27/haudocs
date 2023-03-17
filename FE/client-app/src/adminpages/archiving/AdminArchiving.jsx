import React from "react";
import Adminsidebar from "../Adminsidebar";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import "./archiving.css";

const Archiving = () => {
  // Sample data
  const columns = [
    { field: "applicantname", headerName: "Applicant Name", width: 230 },
    { field: "documentname", headerName: "Document Name", width: 230 },
    { field: "reviewer", headerName: "Reviewer", width: 230 },
    { field: "date", headerName: "Date", width: 190 },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => <DeleteCell {...params} />,
      width: 180,
    },
  ];

  function DeleteCell(props) {
    const handleDelete = () => {};

    return (
      <Button style={deleteStyle} startIcon={<DeleteIcon />}>
        Delete
      </Button>
    );
  }

  const deleteStyle = {
    color: "maroon",
    borderColor: "maroon",
  };

  const rows = [
    { id: "", applicantname: "", documentname: "", reviewer: "", date: "" },
  ];

  /*   const buttonStyle = {
    backgroundColor: 'maroon',
    color: 'white',
  }; */

  return (
    <Adminsidebar>
      <div className="archivingdatatable">
        <h1 className="mt-[3rem] text-center text-2xl font-bold">Archiving</h1>
        {/*     <div className='flex items-end justify-end'>
    <Button sx={{ width: '100px' }} style={buttonStyle} onClick={""}>Delete</Button>
    </div> */}
        <div className="mt-4" style={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </Adminsidebar>
  );
};

export default Archiving;
