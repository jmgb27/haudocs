import React, { useState } from "react";
import "./submit.css";

const Subtabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.defaultActiveTab);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="subtabs">
      <ul className="flex bg-maroon border-gray-200">
        {props.tabs.map((tab, index) => (
          <li
            key={index}
            className={`-mb-px ${
              index === activeTab
                ? "border-b-2"
                : " bg-white text border-transparent"
            }`}
            onClick={() => handleTabClick(index)}
          >
            <a
              className={`inline-block py-2 px-4 ${
                index === activeTab ? "text-white font-semibold" : "text-black"
              }`}
              href="#"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="">{props.tabs[activeTab].content}</div>
    </div>
  );
};

export default Subtabs;
