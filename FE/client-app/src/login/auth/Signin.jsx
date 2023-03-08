import React, { useState } from "react";
import "../LoginForm.css";
import Card from "../../components/card/Card";
import "../../index.css";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { auth, db } from "../../firebase";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuthValue } from "../../context/Authvalue";
import { FaUnlockAlt } from "react-icons/fa";
import bgimage from "../../assets/bg.jpg";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore/lite";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setTimeActive } = useAuthValue();
  const [errorMessages, setErrorMessages] = useState("");

  const Login = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser).then(() => {
          setTimeActive(true);
          navigate("/verifyemail");
        });
      } else {
        navigate("/");
      }
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          setErrorMessages(
            "The email address entered does not match any account."
          );
          break;
        case "auth/wrong-password":
          setErrorMessages("The password entered is incorrect.");
          break;
        default:
          setErrorMessages(error.message);
          break;
      }
    }
  };

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          createdAt: serverTimestamp(),
          role: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  /*   useEffect(() => {
    if (user != null) {
      navigate('/dashboard');
    }
  }, [user]); */
  const myStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "fixed",
  };
  const handleClearError = () => {
    setErrorMessages("");
  };

  return (
    <div style={myStyle}>
      <Card>
        <h1 className="title">Welcome to HAUDOCS!</h1>
        <form onSubmit={Login}>
          <div className="inputs_container">
            <hr className="hrline"></hr>
            <p className="subtitle mb-6">Login to your account</p>
            {errorMessages && (
              <div className="error-container">
                <div className="error-message">{errorMessages}</div>
                <button className="close-button" onClick={handleClearError}>
                  x
                </button>
              </div>
            )}
            <TextField
              label="Email Address"
              className="textfield text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              /*           sx={{
            "& .MuiInputLabel-root": {color: 'black'},//styles the label
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "black" },
            },
          }}  */
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              label="Password"
              className="textfield text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              /*             sx={{
            "& .MuiInputLabel-root": {color: 'black',},//styles the label
            "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "black" },
            },
            }}  */
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <div className="text-black underline underline-offset-2 items-center justify-end flex">
              <FaUnlockAlt />
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
          </div>
          <input type="submit" value="Login" className="login_button" />
          <div className="hau-signup">
            <div className="text-black">
              Dont have an account? Click{" "}
              <Link
                className="text-black font-semibold underline underline-offset-2 cursor-pointer"
                to="/signup"
              >
                here
              </Link>{" "}
              to register
            </div>
          </div>
          <div className="w-full flex items-center justify-center relative py-6">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="or text-lg absolute">or</p>
          </div>
          <div>
            <button
              type="submit"
              className="google_button"
              onClick={signInWithGoogle}
            >
              <div className="flex items-start justify-start">
                <FcGoogle size={25} />
              </div>
              <div className="text-center">Continue With Google</div>
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Signin;
