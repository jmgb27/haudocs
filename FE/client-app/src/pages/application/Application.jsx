import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../../components/Sidebar";
import "./application.css";
import { FaSpinner, FaTimes } from "react-icons/fa";
import { AiFillCheckCircle, AiOutlineFile } from "react-icons/ai";
import { StatusContext } from "./StatusContext";
import PendingIcon from "@mui/icons-material/Pending";

function Application() {
  const { status } = useContext(StatusContext);

  const getStatusIcon = () => {
    switch (status) {
      case "Your application for initial review has been completed":
        return (
          <div className="flex items-center flex-col">
            <AiFillCheckCircle size={70} color="green" />
          </div>
        );
      case "Your application is in process for initial review":
        return (
          <div className="flex items-center flex-col">
            <PendingIcon sx={{ fontSize: 50 }} />
          </div>
        );
      case "Your application for initial review has been declined":
        return (
          <div className="flex items-center flex-col">
            <FaTimes size={70} color="red" />
          </div>
        );
      case "Your application for Continuing review has been declined":
        return (
          <div className="flex items-center flex-col">
            <FaTimes size={70} color="red" />
          </div>
        );
      case "Your application is in process for Continuing review":
        return (
          <div className="flex items-center flex-col">
            <PendingIcon sx={{ fontSize: 50 }} />
          </div>
        );
      case "Your application for Continuing review has been completed":
        return (
          <div className="flex items-center flex-col">
            <FaTimes size={70} color="red" />
          </div>
        );
      case "Your application is in process for Final review":
        return (
          <div className="flex items-center flex-col">
            <PendingIcon sx={{ fontSize: 50 }} />
          </div>
        );
      case "Your application for Final review has been completed":
        return (
          <div className="flex items-center flex-col">
            <FaTimes size={70} color="red" />
          </div>
        );
      default:
        return (
          null,
          (
            <div className="flex items-center flex-col mb-10">
              <AiOutlineFile size={70} color="gray" />{" "}
            </div>
          )
        );
    }
  };

  useEffect(() => {
    console.log("Status updated:", status);
  }, [status]);

  return (
    <Sidebar>
      <div className="application mt-[4rem]">
        <h3 className="text-2xl font-bold text-center ml-7">
          Application Status
        </h3>
        <div className="application-container">
          <div className="status flex items center flex-col justify-center">
            {getStatusIcon()}
            <p>{status}</p>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default Application;
