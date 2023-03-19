import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import "./submit.css";
import Initial from "./Initial";
import Continuing from "./Continuing";
import Final from "./Final";

function Submission() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: "Initial Process", content: <Initial /> },
    {
      label: "Continuing Review",
      content: <Continuing />,
    },
    {
      label: "Final Review",
      content: <Final />,
    },
  ];

  return (
    <Sidebar>
      <div className="subtabs mt-[5rem] ml-[15rem]">
        <div className="flex justify-center items-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={activeTab === index ? "active" : ""}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div>{tabs[activeTab].content}</div>
      </div>
    </Sidebar>
  );
}

export default Submission;
