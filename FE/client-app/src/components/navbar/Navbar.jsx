import { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/haulogo.png";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import userIcon from "../../assets/usericon.png";
import {
  IconButton,
  Badge,
  Popover,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

function Navbar({ imageUrlProp }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [imageUrl, setImageUrl] = useState(imageUrlProp);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "Notification 1",
      content: "Content of notification 1",
      read: true,
    },
    {
      id: 2,
      text: "Notification 2",
      content: "Content of notification 2",
      read: true,
    },
    {
      id: 3,
      text: "Notification 3",
      content: "Content of notification 3",
      read: true,
    },
    {
      id: 4,
      text: "Notification 4",
      content: "Content of notification 4",
      read: true,
    },
    {
      id: 5,
      text: "Notification 5",
      content: "Content of notification 5",
      read: false,
    },
    {
      id: 6,
      text: "Notification 6",
      content: "Content of notification 6",
      read: false,
    },
  ]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMarkAllAsRead = () => {
    const updatedNotifications = notifications.map((n) => ({
      ...n,
      read: true,
    }));
    setNotifications(updatedNotifications);
  };

  useEffect(() => {
    if (currentUser) {
      const storageRef = ref(
        storage,
        `users/${currentUser.uid}/profile_picture`
      );
      getDownloadURL(storageRef)
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setImageUrl(null);
    }
  }, [currentUser]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const hasPhotoURL = currentUser && currentUser.photoURL;

  return (
    <div>
      <div className="hau_navbar">
        <div className="hau_navbar-links">
          <div className="hau_navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="icons flex flex-row items-center justify-center">
          <IconButton aria-label="notifications" onClick={handleClick}>
            <Badge badgeContent={unreadCount} color="secondary">
              <NotificationsIcon sx={{ color: "maroon" }} />
            </Badge>
          </IconButton>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{ minWidth: "800px" }}
          >
            <List
              sx={{
                maxHeight: "300px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {notifications
                .slice()
                .reverse()
                .map((notification) => (
                  <ListItem key={notification.id}>
                    <ListItemText
                      primary={notification.text}
                      secondary={
                        <>
                          <Typography variant="body2" color="text.primary">
                            {notification.content}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {notification.read ? "Read" : "Unread"}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                ))}
            </List>
            <Button
              sx={{ color: "maroon" }}
              fullWidth
              onClick={handleMarkAllAsRead}
            >
              Mark all as read
            </Button>
          </Popover>
          <div className="menu-container">
            <div className="menu-trigger">
              <img
                src={
                  currentUser && hasPhotoURL
                    ? currentUser.photoURL
                    : imageUrl || userIcon
                }
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
