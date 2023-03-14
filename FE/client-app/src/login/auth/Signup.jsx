import React, { useState } from "react";
import "../LoginForm.css";
import Card from "../../components/card/Card";
import { auth } from "../../firebase";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useAuthValue } from "../../context/Authvalue";
import bgimage from "../../assets/bg.jpg";
import { registerWithEmailAndPassword } from "../../firebase";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setTimeActive } = useAuthValue();
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setErrorMessages("Passwords does not match");
      }
    }
    return isValid;
  };

  const errors = {
    email: "Invalid email",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
  };

  const register = () => {
    if (!name || !email || !password || !confirmPassword) {
      // Username or password input is empty
      setErrorMessages("Please fill out all required fields.");
      return;
    }

    if (validatePassword()) {
      registerWithEmailAndPassword(name, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verifyemail");
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => setErrorMessages(err.message));
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    if (!email) {
      // Username input is empty
      setErrorMessages({ email: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ email: "noPassword", message: errors.noPassword });
      return;
    }
  };

  const renderErrorMsg = (name) =>
    errorMessages &&
    errorMessages[name] === "noUsername" && (
      <p className="error_msg">{errors.noUsername}</p>
    );

  {
    renderErrorMsg("email");
  }
  {
    renderErrorMsg("password");
  }

  const myStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "fixed",
  };

  return (
    <div style={myStyle}>
      <Card>
        <h1 className="title">
          Sign Up for HAUDOCS <p>Create a free account</p>{" "}
        </h1>
        <div className="signup-inputs_container">
          <hr className="hrline"></hr>
          <p className="text-base mb-4 mt-6 text-black">
            Welcome! Please Enter your details
          </p>
          {errorMessages && <div className="auth__error">{errorMessages}</div>}
          <TextField
            label="Name"
            className="textfield"
            required
            variant="outlined"
            fullWidth
            id="name"
            name="name"
            margin="normal"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Email Address"
            className="textfield"
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {renderErrorMsg("username")}
          {renderErrorMsg("noUsername")}

          <TextField
            className="textfield"
            margin="normal"
            label="Password"
            fullWidth
            required
            name="password"
            id="password"
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}

          <TextField
            className="textfield"
            margin="normal"
            label="Confirm Password"
            fullWidth
            required
            name="password"
            id="confirmpassword"
            autoComplete="current-password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showConfirmPassword ? (
                      <MdVisibilityOff />
                    ) : (
                      <MdVisibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}
        </div>
        <input
          onClick={register}
          id="sub"
          type="submit"
          value="Signup"
          className="login_button"
          disabled={!name || !email || !password || !confirmPassword}
        />
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black mt-5">
            Already have an account?{" "}
            <Link to="/Signin">
              <a className="font-semibold underline underline-offset-2 cursor-pointer">
                Login here
              </a>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default Signup;
