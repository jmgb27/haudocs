import React, { useState, useEffect } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { auth } from "../../firebase";
import Reviewersidebar from "../Reviewersidebar";
import {
  reauthenticateWithCredential,
  updatePassword,
  onAuthStateChanged,
  EmailAuthProvider,
} from "firebase/auth";
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
  Grid,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Reviewersettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: { xs: "100%", sm: 600 }, mx: "auto" }}>
              <CardContent>
                <Typography variant="h5" align="center" mb={3}>
                  Change Password
                </Typography>
                <form onSubmit={handlePasswordChange}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <TextField
                      type={showPassword ? "text" : "password"}
                      label="Current Password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              onMouseDown={(e) => e.preventDefault()}
                              edge="end"
                            >
                              {showPassword ? (
                                <MdVisibilityOff />
                              ) : (
                                <MdVisibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <TextField
                      type={showNewPassword ? "text" : "password"}
                      label="New Password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowNewPassword(!showNewPassword)
                              }
                              onMouseDown={(e) => e.preventDefault()}
                              edge="end"
                            >
                              {showNewPassword ? (
                                <MdVisibilityOff />
                              ) : (
                                <MdVisibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <TextField
                      type={showConfirmPassword ? "text" : "password"}
                      label="Confirm New Password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              onMouseDown={(e) => e.preventDefault()}
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <MdVisibilityOff />
                              ) : (
                                <MdVisibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: { xs: "100%", sm: 600 }, mx: "auto" }}>
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
            <Dialog
              open={isSuccessDialogOpen}
              onClose={handleCloseSuccessDialog}
            >
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
          </Grid>
        </Grid>
      </div>
    </Reviewersidebar>
  );
};

export default Reviewersettings;
