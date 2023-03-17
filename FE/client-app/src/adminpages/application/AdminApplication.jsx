import React from "react";
import Adminsidebar from "../Adminsidebar";
import "./application.css";
import { DataGrid } from "@mui/x-data-grid";

const AdminApplication = () => {
  // Sample data
  const columns = [
    { field: "protocolnumber", headerName: "Protocol Number", width: 300 },
    { field: "classification", headerName: "Classification", width: 300 },
    {
      field: "datesent",
      headerName: "Date Sent",
      width: 200,
    },
    {
      field: "sentto",
      headerName: "Sent To",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
    },
  ];

  const rows = [
    {
      id: "",
      protocolnumber: "2023-001-NAME-TITLE",
      classification: "",
      datesent: "February 14, 2023",
      sentto: "Person A",
      status: "In Progress",
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
