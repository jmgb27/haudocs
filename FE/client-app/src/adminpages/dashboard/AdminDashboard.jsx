import React from "react";
import Adminsidebar from "../Adminsidebar";
import Count from "./Count";
import Protocolscount from "./Protocolscount";
import Protocolsinsideoutside from "./Protocolsinsideoutside";
import Research from "./Research";
import "./admindashboard.css";

function Box(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        width: "400px",
        height: "300px",
        border: "2px solid black",
      }}
    >
      {props.content}
    </div>
  );
}

function AdminDashboard() {
  return (
    <Adminsidebar>
      <div
        className="size"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="space-x-4"
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          <Box content={<Count />} />
          <Box content={<Protocolscount />} />
        </div>
        <div
          className="space-x-4"
          style={{
            display: "flex",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          <Box content={<Protocolsinsideoutside />} />
          <Box content={<Research />} />
        </div>
      </div>
    </Adminsidebar>
  );
}

export default AdminDashboard;
