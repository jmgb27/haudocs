import React, { useState, useEffect } from "react";
import '../LoginForm.css';
import Card from "../../components/card/Card";
import '../../index.css'
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import GoogleButton from 'react-google-button'
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useAuthValue } from "../../context/Authvalue";

  function Signin () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { signIn } = UserAuth();
    const [errorMessages, setErrorMessages] = useState("");
    const { googleSignIn, user} = UserAuth();  
    const {setTimeActive} = useAuthValue()
    const errors = {
      email: "Invalid email",
      password: "Invalid password",
      noUsername: "Please enter your username",
      noPassword: "Please enter your password",
    };

    const Login = async (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if(!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
          .then(() => {
            setTimeActive(true)
            navigate('/verifyemail')
          })
        .catch(err => alert(err.message))
      }else{
        navigate('/')
      }
      })
      .catch(err => setErrorMessages(err.message))
      try {
        await signIn(email, password)
      } catch (e) {
        console.log(e.message)
      }
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
  
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // Render error messages
  const renderErrorMsg = (email) =>
  email=== errorMessages.email && (
    <p className="error_msg">{errorMessages.message}</p>
  );
  
/*   useEffect(() => {
    if (user != null) {
      navigate('/dashboard');
    }
  }, [user]); */

  return (
    <Card>
    <h1 className="title">Welcome to HAUDOCS!</h1>
    <form onSubmit={Login}>
      <div className="inputs_container">
      <hr className='hrline'></hr>
      <p className="subtitle mb-6">Login to your account</p>
      <p className="text-base text-white">Enter your email:</p>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {renderErrorMsg("username")}
        {renderErrorMsg("noUsername")}
        <p className="text-base text-white">Enter your password:</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {renderErrorMsg("password")}
        {renderErrorMsg("noPassword")}
        <a href="" className="small">
        Forgot Password?</a>
      </div>

      <input type="submit" value="Login" className="login_button" />
      <div className="hau-signup">
      <div>
      Dont have an account? Click <Link className="text-white font-semibold underline underline-offset-2 cursor-pointer" to="/signup">here</Link> to register
      </div>
      </div>
      <div className='w-full flex items-center justify-center relative py-6'>
          <div className='w-full h-[1px] bg-white'></div>
          <p className=' text-lg absolute text-white bg-[#800000]'>or</p>
        </div>
      <div className="bottom-buttons">
        <GoogleButton className="items-center justify-center ml-10" onClick={handleGoogleSignIn}/>
      </div>
    </form>
  </Card> 
  
  )
};

export default Signin;