import React, { useState, useEffect } from "react";
import Adminsidebar from "../Adminsidebar";
import "./users.css";
import { db } from "../../firebase";
import { userColumns } from "./adminusersdata";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore/lite";
import { DataGrid } from "@mui/x-data-grid";
import "./adminusers.css";
import { registerWithEmailAndPassword } from "../../firebase";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const AdminUsers = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [deleteopen, deletesetOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 2,
    borderRadius: "5px",
  };

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

  console.log(data);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
    setOpen(false);
  };

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setErrorMessages("Passwords does not match");
      }
    }
    return isValid;
  };

  const errors = {
    email: "Invalid email",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
  };

  const addusers = () => {
    if (validatePassword()) {
      registerWithEmailAndPassword(name, email, password, role)
        .then((userCredential) => {
          console.log(userCredential.user);
        })
        .catch((err) => setErrorMessages(err.message));
    }
    setRole("");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    if (!email) {
      // Username input is empty
      setErrorMessages({ email: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ email: "noPassword", message: errors.noPassword });
      return;
    }
  };

  // Render error messages
  const renderErrorMsg = (email) =>
    email === errorMessages.email && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
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

  const deleteStyle = {
    color: "maroon",
    borderColor: "maroon",
  };

  const buttonStyle = {
    backgroundColor: "maroon",
    color: "white",
  };

  return (
    <Adminsidebar>
      <div className="datatable">
        <div className="datatableTitle">
          <h1 className="text-2xl font-bold text-black">Users Management</h1>
          <div>
            <Button
              style={buttonStyle}
              variant="contained"
              onClick={handleOpen}
            >
              Add users
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ mb: 5 }} component="h1" variant="h5">
                      User Management
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="Name"
                          required
                          fullWidth
                          id="Name"
                          label="Name"
                          value={name}
                          autoFocus
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="role"
                          label="Role"
                          name="role"
                          value={role}
                          autoComplete="role-name"
                          onChange={(e) => setRole(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          value={email}
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          value={password}
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      style={buttonStyle}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={addusers}
                    >
                      Add Users
                    </Button>
                  </Box>
                </Container>
              </Box>
            </Modal>
          </div>
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

export default AdminUsers;
