import React from "react";
import Sidebar from "../../components/Sidebar";
import { DataGrid } from "@mui/x-data-grid";

const Inbox = () => {
  // Sample data
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "documentname", headerName: "Document Name", width: 350 },
    { field: "datereceived", headerName: "Date Received", width: 320 },
    { field: "action", headerName: "Action", width: 100 },
  ];
  const rows = [{ id: 1, documentname: "", datereceived: "", action: "" }];

  return (
    <Sidebar>
      <div className="datatable">
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
            checkboxSelection
          />
        </div>
      </div>
    </Sidebar>
  );
};

export default Inbox;
