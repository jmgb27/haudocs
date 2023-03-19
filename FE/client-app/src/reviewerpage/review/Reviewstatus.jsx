import React from "react";
import Reviewersidebar from "../Reviewersidebar";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import "./reviewerstatus.css";

const Reviewstatus = () => {
  // Sample data
  const columns = [
    { field: "protocolnumber", headerName: "Protocol Number", width: 200 },
    { field: "documentname", headerName: "Document Name", width: 200 },
    { field: "classification", headerName: "Classification", width: 200 },
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
      id: "",
      protocolnumber: "2023-001-NAME-TITLE",
      documentname: "",
      classification: "",
      datesent: "",
      duedate: "April, 04, 2023",
      status: "",
    },
  ];

  return (
    <Reviewersidebar>
      <div className="reviewdatatable">
        <h1 className="mt-[3rem] text-center text-2xl font-bold">
          Review Status
        </h1>
        <div className=" mt-[2rem]" style={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </Reviewersidebar>
  );
};

export default Reviewstatus;
