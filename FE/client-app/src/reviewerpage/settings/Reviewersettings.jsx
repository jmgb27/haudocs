import React, { useState, useEffect } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { auth } from "../../firebase";
import {
  reauthenticateWithCredential,
  updatePassword,
  onAuthStateChanged,
  EmailAuthProvider,
} from "firebase/auth";
import Reviewersidebar from "../Reviewersidebar";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  Box,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const Reviewersettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const handleFileUpload = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const storage = getStorage();

    if (currentUser) {
      const storageRef = ref(
        storage,
        `users/${currentUser.uid}/profile_picture`
      );
      const uploadTask = uploadBytes(storageRef, image);

      uploadTask.then(
        (snapshot) => {
          // Call setImageUrl inside the then callback
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL);
            setIsSuccessDialogOpen(true);
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  const handleCloseSuccessDialog = () => {
    setIsSuccessDialogOpen(false);
  };

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
          setImageUrl("");
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
    <Reviewersidebar>
      <div className="password">
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <Typography variant="h5" align="center" mb={3}>
                Change Password for {currentUser && currentUser.email}
              </Typography>
              <form onSubmit={handlePasswordChange}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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
                    sx={{ mt: 3 }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isDisabled}
                  >
                    Change Password
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 600, ml: 3 }}>
            <CardContent>
              <Typography variant="h5" align="center" mb={3}>
                Upload A Profile Photo
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
                <Button
                  style={changeStyle}
                  sx={{ mt: 3 }}
                  variant="contained"
                  color="primary"
                  onClick={handleUpload}
                  disabled={!image}
                >
                  Upload Photo
                </Button>
              </Box>
            </CardContent>
          </Card>
          <Dialog open={isSuccessDialogOpen} onClose={handleCloseSuccessDialog}>
            <DialogTitle>Success!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Your profile picture has been uploaded successfully.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseSuccessDialog} autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </div>
    </Reviewersidebar>
  );
};

export default Reviewersettings;
