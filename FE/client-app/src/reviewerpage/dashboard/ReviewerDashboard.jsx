import React from "react";
import Reviewersidebar from "../Reviewersidebar";
import Completed from "./Completed";
import Progress from "./Progress";
import "./reviewer.css";

function Box(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        width: "500px",
        height: "300px",
        border: "1px solid black",
        marginTop: "8rem",
      }}
    >
      {props.content}
    </div>
  );
}

function ReviewerDashboard() {
  return (
    <Reviewersidebar>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "15rem",
          marginTop: "4rem",
          alignItems: "center",
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
          <Box content={<Progress />} />
          <Box content={<Completed />} />
        </div>
      </div>
    </Reviewersidebar>
  );
}

export default ReviewerDashboard;
