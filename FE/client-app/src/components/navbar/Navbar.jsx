import { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/haulogo.png";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import userIcon from "../../assets/usericon.png";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const isGoogleProvider =
    user && user.providerData[0].providerId === "google.com";

  const hasPhotoURL = user && user.photoURL;

  return (
    <div>
      <div className="hau_navbar">
        <div className="hau_navbar-links">
          <div className="hau_navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="icons flex flex-row items-center justify-center">
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneOutlinedIcon style={{ color: "maroon" }} />
          </Badge>
          <div className="menu-container">
            <div className="menu-trigger">
              {user ? (
                <img
                  src={isGoogleProvider ? user.photoURL : userIcon}
                  alt="Profile"
                />
              ) : (
                <img src={userIcon} alt="Default" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
