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
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
  const [diaopen, diasetOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [deleteUserId, setDeleteUserId] = useState(null);

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
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    setDeleteUserId(id);
    diasetOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteDoc(doc(db, "users", deleteUserId));
      setData(data.filter((item) => item.id !== deleteUserId));
    } catch (err) {
      console.log(err);
    }
    diasetOpen(false);
    setDeleteUserId(null);
  };

  const handlediaClose = () => {
    diasetOpen(false);
  };

  const renderDeleteConfirmationDialog = (handlediaClose) => {
    return (
      <Dialog open={diaopen} onClose={handlediaClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              diasetOpen(false);
              handlediaClose();
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} sx={deleteStyle}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

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
              Delete{renderDeleteConfirmationDialog(handlediaClose)}
            </div>
          </div>
        );
      },
    },
  ];

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

  const deleteStyle = {
    color: "maroon",
    borderColor: "maroon",
  };

  const buttonStyle = {
    backgroundColor: "maroon",
    color: "white",
  };

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

  return (
    <Adminsidebar>
      <div className="usersdatatable">
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
