import React, { useState } from "react";
import Application from "./Application";
import Initial from "../submission/Initial";

function ApplicationParent() {
  const [status, setStatus] = useState(
    <div className="text-lg font-semibold">
      You have no pending submissions for review
    </div>
  );

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <>
      <Application status={status} />
      <Initial handleStatusChange={handleStatusChange} />
    </>
  );
}

export default ApplicationParent;
