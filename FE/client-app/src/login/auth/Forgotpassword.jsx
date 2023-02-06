import React, {useState, useEffect} from 'react'
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';

const Forgotpassword = () => {
    const [email, setEmail] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [error, setError] = useState(null);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add logic to send password reset email here
    };

    const forgotPasswordHandler = async () => {
        return sendPasswordResetEmail(auth, email)
        .then(() => {
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3000);
      }).catch((error) => {
        setError(error.message);
      });
    };
    

  return (
    <Card>
    <h1 className="title">Reset Password</h1>
    <form onSubmit={handleSubmit}>
      <div className="inputs_container">
      <hr className='hrline'></hr>
      <p className="text-base text-white mt-10">Enter your email address:</p>
        <input
          required
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <input onClick={forgotPasswordHandler} type="submit" value="Forgot Password" className="login_button" />
      {showAlert && (
        <div
          className="fixed bottom-0 right-0 m-2 p-2 bg-green-500 text-white rounded-lg shadow-lg"
          style={{ zIndex: 1 }}
        >
          Password reset email sent!
        </div>
      )}
      {error && (
        <div
          className="fixed bottom-0 right-0 m-2 p-2 bg-red-500 text-white rounded-lg shadow-lg"
          style={{ zIndex: 1 }}
        >
          Error: {error}
        </div>
      )}
      <div className='w-full flex items-center justify-center'>
        <p className='text-sm font-normal text-white mt-5'>Do you want to go back? <Link to= "/Signin"><a className='font-semibold underline underline-offset-2 cursor-pointer'>Login here</a></Link></p>
      </div>
    </form>
  </Card>
  );
};
export default Forgotpassword
