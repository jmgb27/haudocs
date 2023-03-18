import React, { useState, useEffect } from "react";
import Adminsidebar from "../Adminsidebar";
import "./users.css";
import { userColumns } from "./adminusersdata";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  where,
  query,
  setDoc,
  addDoc,
} from "firebase/firestore/lite";

import { DataGrid } from "@mui/x-data-grid";
import "./adminusers.css";
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
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { auth, db } from "../../firebase";
import { serverTimestamp } from "firebase/firestore/lite";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AdminUsers = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [secondopen, secondsetOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const handleClose = () => setOpen(false);
  const secondhandleClose = () => secondsetOpen(false);
  const handleOpen = () => setOpen(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const fetchData = async () => {
        let list = [];
        try {
          const usersRef = collection(db, "users");
          const querySnapshotRef = await getDocs(
            query(
              usersRef,
              where("role", "in", ["admin", "scientist", "non-scientist"])
            )
          );
          querySnapshotRef.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setData(list);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
  }, [auth, db]);

  const validateForm = () => {
    let valid = true;
    let errorMessage = "";
    if (!email) {
      errorMessage += errorMessages.email + "\n";
      valid = false;
    }
    setErrorMessages(errorMessage);
    return valid;
  };

  const addusers = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await setDoc(doc(db, "users", auth.currentUser.uid), {
          createdAt: serverTimestamp(),
          authProvider: "local",
          name: name,
          email: email,
          role: role,
          uid: auth.currentUser.uid,
        });

        // Fetch the updated user list and update the state with the updated data
        const usersRef = collection(db, "users");
        const querySnapshotRef = await getDocs(
          query(
            usersRef,
            where("role", "in", ["admin", "scientist", "non-scientist"])
          )
        );
        const updatedData = querySnapshotRef.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(updatedData);

        console.log("User added successfully!");
        setShowDialog(true);
      } catch (err) {
        setErrorMessages(err.message);
      }
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setOpen(false);
    setEmail("");
    setPassword("");
    setName("");
    setRole("");
  };

  const handleEdit = (id) => {
    setSelectedUserId(id);
    secondsetOpen(true);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSave = async () => {
    try {
      const userRef = doc(db, "users", selectedUserId);
      await updateDoc(userRef, { role });
      const updatedData = data.map((item) =>
        item.id === selectedUserId ? { ...item, role } : item
      );
      setData(updatedData);
      setSelectedUserId(null);
      secondhandleClose();
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
            <div
              className="deleteButton"
              onClick={() => handleEdit(params.row.id)}
            >
              Edit Role
            </div>
          </div>
        );
      },
    },
  ];

  const saveStyle = {
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
                      <Grid item xs={12}>
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
                      <Grid item xs={12}>
                        <FormControl required fullWidth>
                          <InputLabel id="role-label">Role</InputLabel>
                          <Select
                            labelId="role-label"
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            autoComplete="role-name"
                          >
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="scientist">Scientist</MenuItem>
                            <MenuItem value="non-scientist">
                              Non-Scientist
                            </MenuItem>
                          </Select>
                        </FormControl>
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
                    </Grid>
                    <Button
                      type="submit"
                      style={buttonStyle}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 8, height: "3rem" }}
                      onClick={addusers}
                    >
                      Add User
                    </Button>
                  </Box>
                  <Dialog open={showDialog} onClose={handleDialogClose}>
                    <DialogTitle>Success!</DialogTitle>
                    <DialogContent>
                      <Typography variant="body1">
                        You have successfully added a user!
                      </Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        sx={{ color: "maroon" }}
                        onClick={handleDialogClose}
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
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
        <Dialog open={secondopen} onClose={secondhandleClose}>
          <DialogTitle sx={{ width: "30rem" }}>Edit User Role</DialogTitle>
          <DialogContent>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="select-label">Role</InputLabel>
              <Select
                labelId="select-label"
                id="simple-select"
                value={role}
                onChange={handleRoleChange}
              >
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"scientist"}>Scientist</MenuItem>
                <MenuItem value={"non-scientist"}>Non-Scientist</MenuItem>
                <MenuItem value={"applicant"}>Applicant</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button style={saveStyle} onClick={secondhandleClose}>
              Cancel
            </Button>
            <Button style={saveStyle} onClick={handleSave}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Adminsidebar>
  );
};

export default AdminUsers;
