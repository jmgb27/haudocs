import React, { useState } from "react";
import "./LoginForm.css";
import Card from "../../components/card/Card";
import { database } from "../../database/database";
import {FaLock} from "react-icons/fa";

const Signin = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    username: "Invalid email",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    if (!username) {
      // Username input is empty
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    // Search for user credentials
    const currentUser = database.find((user) => user.username === username);

    if (currentUser) {
      if (currentUser.password !== password) {
        // Wrong password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        // Correct password, log in user
        setErrorMessages({});
        setIsLoggedIn(true);
      }
    } else {
      // Username doens't exist in the database
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <Card>
    <h1 className="title">Welcome to HAUDOCS!</h1>
    <form onSubmit={handleSubmit}>
      <div className="inputs_container">
      <hr className='hrline'></hr>
      <p className="subtitle">Login to your account</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {renderErrorMsg("username")}
        {renderErrorMsg("noUsername")}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="" className="small">
        <FaLock />Forgot Password?</a>
        {renderErrorMsg("password")}
        {renderErrorMsg("noPassword")}
      </div>
      <input type="submit" value="Login" className="login_button" />
      <div className="hau-signup">
      <p>Dont have an account? Click <a href="">here</a> to register</p>
      </div>
      <hr className="bottom-line"></hr>
      <div className="bottom-buttons">
        <input type="submit" value="Login as Applicants" className="bottom-button" />
        <input type="submit" value="Login as IRB Members" className="bottom-button" />
      </div>
    </form>
  </Card>
  );
};

export default Signin;