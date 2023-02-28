import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import "./submit.css";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import Initial from "./Initial";
import Continuing from "./Continuing";
import Final from "./Final";

function Submission() {
  const [activeTab, setActiveTab] = useState(0);
  /*   const [fileUpload, setfileUpload] = useState(null);
  const [fileUrls, setfileUrls] = useState([]);

  const filesListRef = ref(storage, "HAU-IRB-INITIAL-REVIEW/");
  const uploadFile = () => {
    if (fileUpload == null) return;
    const imageRef = ref(
      storage,
      `HAU-IRB-INITIAL-REVIEW/${fileUpload.name + v4()}`
    );
    uploadBytes(imageRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setfileUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(filesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setfileUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const chooseStyle = {
    backgroundColor: "maroon",
  }; */
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
      <div className="mt-[5rem] ml-[15rem]">
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
