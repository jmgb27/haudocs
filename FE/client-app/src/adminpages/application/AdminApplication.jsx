import React from "react";
import Adminsidebar from "../Adminsidebar";
import "./application.css";
import { DataGrid } from "@mui/x-data-grid";

const AdminApplication = () => {
  // Sample data
  const columns = [
    { field: "protocolnumber", headerName: "Protocol Number", width: 200 },
    { field: "classification", headerName: "Classification", width: 200 },
    {
      field: "documentname",
      headerName: "Document Name",
      width: 210,
    },
    {
      field: "datesent",
      headerName: "Date Sent",
      width: 190,
    },
    {
      field: "sentto",
      headerName: "Sent To",
      width: 190,
    },
    {
      field: "status",
      headerName: "Status",
    },
  ];

  const rows = [
    {
      id: "",
      protocolnumber: "",
      classification: "",
      documentname: "",
      datesent: "",
      sentto: "",
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
          />
        </div>
      </div>
    </Adminsidebar>
  );
};

export default AdminApplication;
