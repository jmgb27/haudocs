import React from "react";
import "./sidebar.css";
import { FaTh } from "react-icons/fa";
import {
  AiOutlineFileSync,
  AiFillSetting,
  AiOutlineFileAdd,
  AiOutlineFileExclamation,
} from "react-icons/ai";
import { FiDownload, FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const SidenavItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/application",
      name: "Review Status",
      icon: <AiOutlineFileSync />,
    },
    {
      path: "/download",
      name: "Download Forms",
      icon: <FiDownload />,
    },
    {
      path: "/submission",
      name: "Submission",
      icon: <AiOutlineFileAdd />,
    },
    {
      path: "/resubmission",
      name: "ReSubmission",
      icon: <AiOutlineFileExclamation />,
    },
  ];
  const Setting = [
    {
      path: "/setting",
      name: "Setting",
      icon: <AiFillSetting />,
    },
  ];

  const BottomnavItem = [
    {
      path: "/logout",
      name: "Logout",
      icon: <FiLogOut />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <Navbar />
        <div className="top_section"></div>
        {SidenavItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link-sidebar"
            activeclassName="active"
          >
            <div className="icon-sidebar">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
        <div className="bottom_section">
          {Setting.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link-sidebar"
              activeclassName="active"
            >
              <div className="icon-sidebar">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}

          {BottomnavItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link-sidebar"
              onClick={handleLogout}
            >
              <div className="icon-sidebar">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
