import React, { createContext, useState } from "react";

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState(
    "You have no pending submissions for review"
  );

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <StatusContext.Provider value={{ status, handleStatusChange }}>
      {children}
    </StatusContext.Provider>
  );
};
