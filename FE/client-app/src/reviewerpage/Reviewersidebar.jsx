import React from "react";
import { FaTh } from "react-icons/fa";
import { AiOutlineFileSync, AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { GoFileSymlinkDirectory } from "react-icons/go";
import "./reviewersidebar.css";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Reviewersidebar = ({ children }) => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/Signin");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const ReviewersidenavItem = [
    {
      path: "/reviewerdashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/reviewerstatus",
      name: "Review Status",
      icon: <AiOutlineFileSync />,
    },
    {
      path: "/assignedprotocol",
      name: "Assigned Protocol",
      icon: <GoFileSymlinkDirectory />,
    },
  ];
  const Setting = [
    {
      path: "/reviewersettings",
      name: "Setting",
      icon: <AiFillSetting />,
    },
  ];

  const BottomnavItem = [
    {
      path: "/reviewerlogout",
      name: "Logout",
      icon: <FiLogOut />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <Navbar />
        <div className="top_section"></div>
        {ReviewersidenavItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link-reviewersidebar">
            <div className="icon-admin">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
        <div className="reviewer-bottom_section">
          {Setting.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link-reviewersidebar flex items-center"
            >
              <div className="icon-admin">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}

          {BottomnavItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link-reviewersidebar flex items-center"
              onClick={handleLogout}
            >
              <div className="icon-admin">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Reviewersidebar;
