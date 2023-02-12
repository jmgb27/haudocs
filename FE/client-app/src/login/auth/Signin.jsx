import React, { useState } from "react";
import '../LoginForm.css';
import Card from "../../components/card/Card";
import '../../index.css'
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import GoogleButton from 'react-google-button'
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthValue } from "../../context/Authvalue";
import { FaUnlockAlt } from "react-icons/fa"
import bgimage from "../../assets/bg.jpg"
import { collection, query, where, getDocs, addDoc, serverTimestamp } from "firebase/firestore/lite";

  function Signin () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { signIn } = UserAuth();
    const [errorMessages, setErrorMessages] = useState(null);  
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
      .catch((errorMessages) => {setErrorMessages(errorMessages)})
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
            role: "Admin"
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
  const myStyle={
    backgroundImage:`url(${bgimage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    position: 'fixed'
  };
  
  return (
    <div style={myStyle}>
    <Card>
    <h1 className="title">Welcome to HAUDOCS!</h1>
    <form onSubmit={Login}>
      <div className="inputs_container">
      <hr className='hrline'></hr>
      <p className="subtitle mb-6">Login to your account</p>
      {errorMessages && (
    <div className="mb-4 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg">
      {errorMessages.message === "The email address is badly formatted."
      ? "Please enter a valid email address."
      : errorMessages.message === "The password is invalid or the user does not have a password."
      ? "Invalid password. Please try again."
      : errorMessages.message}
      </div>
      )}
      <p className="text-base text-white">Enter your email:</p>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-base text-white">Enter your password:</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-white underline underline-offset-2 items-center justify-end flex">
        <FaUnlockAlt/>
       <Link to="/forgotpassword">
        Forgot Password?</Link>
        </div>
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
        <GoogleButton className="items-center justify-center ml-10" onClick={signInWithGoogle}/>
      </div>
    </form>
  </Card> 
  </div>
  )
};

export default Signin;