import React, { useState, Fragment, useEffect } from 'react'
import Adminsidebar from '../Adminsidebar'
import './users.css';
import { db } from "../../firebase"
import { userColumns, userRows } from "./adminusersdata";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { DataGrid } from "@mui/x-data-grid";
import "./adminusers.css"

const AdminUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
     const fetchData = async () => {
       let list = [];
       try {
        const usersRef = collection(db, "users");
         const querySnapshotRef = await getDocs(usersRef);
         querySnapshotRef.forEach((doc) => {
           list.push({ id: doc.id, ...doc.data() });
        });
         setData(list);
         console.log(list);
       } catch (err) {
        console.log(err);
      }
     };
    fetchData();
  }, []);

  console.log(data)

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <Adminsidebar>
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/adminusers/addusers" className="">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    </Adminsidebar>
  );
};

export default AdminUsers
