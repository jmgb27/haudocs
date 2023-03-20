import React from "react";
import logo from "../assets/hau-logo.png";
import "./loading.css";

function LoadingPage() {
  return (
    <div className="loading-page">
      <img src={logo} alt="Holy Angel University Logo" />
      <h2>Please Wait</h2>
    </div>
  );
}

export default LoadingPage;
