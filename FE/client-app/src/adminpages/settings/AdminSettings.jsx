import React, { useState, useEffect } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { auth } from "../../firebase";
import {
  reauthenticateWithCredential,
  updatePassword,
  onAuthStateChanged,
  EmailAuthProvider,
} from "firebase/auth";
import Adminsidebar from "../Adminsidebar";

const AdminSettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, [auth]);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    // Reauthenticate user with current password
    reauthenticateWithCredential(user, credential)
      .then(() => {
        // Update password with new password
        updatePassword(user, newPassword).then(() => {
          setSuccess(true);
          setCurrentPassword("");
          setNewPassword("");
          setConfirmNewPassword("");
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const isDisabled =
    currentPassword === "" ||
    newPassword === "" ||
    newPassword !== confirmNewPassword;

  const changeStyle = {
    backgroundColor: "maroon",
    color: "white",
  };

  return (
    <Adminsidebar>
      <div className="password">
        <Container maxWidth="sm">
          <Typography variant="h5">
            Change Password for {currentUser && currentUser.email}
          </Typography>
          <form onSubmit={handlePasswordChange}>
            <div className="space-y-5 mt-5">
              <TextField
                type="password"
                label="Current Password"
                fullWidth
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <TextField
                type="password"
                label="New Password"
                fullWidth
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <TextField
                type="password"
                label="Confirm New Password"
                fullWidth
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              {error && (
                <Typography variant="body1" color="error">
                  {error}
                </Typography>
              )}
              {success && (
                <Typography variant="body1" color="success">
                  Password changed successfully.
                </Typography>
              )}
              <Button
                style={changeStyle}
                variant="contained"
                color="primary"
                type="submit"
                disabled={isDisabled}
              >
                Change Password
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </Adminsidebar>
  );
};

export default AdminSettings;
