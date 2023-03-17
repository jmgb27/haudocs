import React from "react";
import Sidebar from "../../components/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import "./inbox.css";

const Inbox = () => {
  // Sample data
  const columns = [
    { field: "documentname", headerName: "Document Name", width: 500 },
    { field: "datereceived", headerName: "Date Received", width: 500 },
    { field: "action", headerName: "Action", width: 100 },
  ];
  const rows = [{ id: "", documentname: "", datereceived: "", action: "" }];

  return (
    <Sidebar>
      <div className="inbox-datatable">
        <h1 className="mt-[3rem] text-center text-2xl font-bold">Files</h1>
        <div
          className="ml-[2rem] mt-[2rem]"
          style={{ height: 500, width: "100%" }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </Sidebar>
  );
};

export default Inbox;
