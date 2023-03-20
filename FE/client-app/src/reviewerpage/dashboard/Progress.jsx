import React, { useState } from "react";
import { RiLoader2Line } from "react-icons/ri";

const Progress = () => {
  const [status, setStatus] = useState(
    <div className="text-lg text-center font-semibold">
      NO PROTOCOLS IN PROGRESS
    </div>
  );

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };
  const getStatusIcon = () => {
    switch (status) {
      case "":
        return <div className="flex items-center flex-col"></div>;
      case "":
        return <div className="flex items-center flex-col"></div>;
      case "":
        return <div className="flex items-center flex-col"></div>;
      default:
        return (
          null,
          (
            <div className="flex items-center flex-col mb-5">
              <RiLoader2Line size={50} color="black" />{" "}
            </div>
          )
        );
    }
  };
  return (
    <div>
      <div>
        {getStatusIcon()}
        <p>{status}</p>
      </div>
    </div>
  );
};

export default Progress;
