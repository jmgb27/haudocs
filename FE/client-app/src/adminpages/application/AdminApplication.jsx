import React from "react";
import Adminsidebar from "../Adminsidebar";
import "./application.css";
import { DataGrid } from "@mui/x-data-grid";

const AdminApplication = () => {
  // Sample data
  const columns = [
    { field: "id", headerName: "ID", width: 180 },
    { field: "protocolnumber", headerName: "Protocol Number", width: 190 },
    { field: "classification", headerName: "Classification", width: 190 },
    {
      field: "documentname",
      headerName: "Document Name",
      width: 190,
    },
    {
      field: "datesent",
      headerName: "Date Sent",
      width: 190,
    },
    {
      field: "sentby",
      headerName: "Sent By",
      width: 190,
    },
    {
      field: "status",
      headerName: "Status",
    },
  ];

  const rows = [
    {
      id: 1,
      protocolnumber: "",
      classification: "",
      documentname: "",
      datesent: "",
      sentby: "",
      action: "",
    },
  ];

  /*   const buttonStyle = {
    backgroundColor: 'maroon',
    color: 'white',
  }; */

  return (
    <Adminsidebar>
      <div className="adminreviewdatatable">
        <h1 className="mt-[3rem] text-center text-2xl font-bold">
          Review Status
        </h1>
        {/*     <div className='flex items-end justify-end'>
    <Button sx={{ width: '100px' }} style={buttonStyle} onClick={""}>Delete</Button>
    </div> */}
        <div className="review mt-4" style={{ height: 500, width: "100%" }}>
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

export default AdminApplication;
