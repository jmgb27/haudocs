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
  ListItemIcon,
  Button,
  Typography,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { db } from "../../firebase";
import { doc, collection, getDoc } from "firebase/firestore/lite";

function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [imageUrl, setImageUrl] = useState(
    localStorage.getItem("profileImageUrl") || null
  );
  const open = Boolean(anchorEl2);
  const navigate = useNavigate();

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

  const handleMenuClick = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl2(null);
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
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.photoURL) {
          setImageUrl(user.photoURL);
          localStorage.setItem("profileImageUrl", user.photoURL);
        } else {
          const storageRef = ref(storage, `users/${user.uid}/profile_picture`);
          getDownloadURL(storageRef)
            .then((url) => {
              setImageUrl(url);
              localStorage.setItem("profileImageUrl", url);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } else {
        setImageUrl(null);
        localStorage.removeItem("profileImageUrl");
      }
      setCurrentUser(user);
    });
    return unsubscribeAuth;
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);

      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);

        getDoc(userRef).then((doc) => {
          if (doc.exists()) {
            setUserName(doc.data().name);
          }
        });
      }
    });

    return unsubscribe;
  }, []);

  const hasPhotoURL = currentUser && currentUser.photoURL;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
    handleClose();
  };

  const handleSettings = () => {
    navigate("/adminsettings");
    handleClose();
  };

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
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleMenuClick}
                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <img
                    src={
                      imageUrl ||
                      (currentUser && hasPhotoURL
                        ? currentUser.photoURL
                        : userIcon)
                    }
                    alt="Profile"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl2}
                id="account-menu"
                open={open}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.51,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 15,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <div className="menu-trigger-profile">
                    <img
                      src={
                        imageUrl ||
                        (currentUser && hasPhotoURL
                          ? currentUser.photoURL
                          : userIcon)
                      }
                      alt="Profile"
                    />{" "}
                    {userName}
                  </div>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleSettings}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
