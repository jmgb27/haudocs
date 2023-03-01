import React from "react";
import Reviewersidebar from "../Reviewersidebar";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

const Reviewstatus = () => {
  // Sample data
  const columns = [
    { field: "id", headerName: "ID", width: 180 },
    { field: "protocolnumber", headerName: "Protocol Number", width: 180 },
    { field: "documentname", headerName: "Document Name", width: 180 },
    { field: "classification", headerName: "Classification", width: 180 },
    { field: "datesent", headerName: "Date Sent", width: 200 },
    {
      field: "duedate",
      headerName: "Due Date",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
    },
  ];

  const rows = [
    {
      id: 1,
      protocolnumber: "032323name",
      documentname: "",
      classification: "",
      datesent: "",
      duedate: "04/04/23",
      status: "",
    },
  ];

  /*   const buttonStyle = {
    backgroundColor: 'maroon',
    color: 'white',
  }; */

  return (
    <Reviewersidebar>
      <div className="datatable">
        <h1 className="mt-[3rem] text-center text-2xl font-bold">
          Review Status
        </h1>
        {/*     <div className='flex items-end justify-end'>
    <Button sx={{ width: '100px' }} style={buttonStyle} onClick={""}>Delete</Button>
    </div> */}
        <div
          className="ml-[2rem] mt-[2rem]"
          style={{ height: 500, width: "100%" }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </Reviewersidebar>
  );
};

export default Reviewstatus;
