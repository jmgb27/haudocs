import React from "react";
import "./sidebar.css";
import { FaTh } from "react-icons/fa";
import {
  AiOutlineFileSync,
  AiOutlineFileAdd,
  AiOutlineFileExclamation,
} from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { BsFillInboxFill } from "react-icons/bs";

const Sidebar = ({ children }) => {
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
      name: "Resubmission",
      icon: <AiOutlineFileExclamation />,
    },
    {
      path: "/inbox",
      name: "Inbox",
      icon: <BsFillInboxFill />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <Navbar />
        <div className="top_section"></div>
        {SidenavItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link-sidebar">
            <div className="icon-sidebar">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Sidebar;
