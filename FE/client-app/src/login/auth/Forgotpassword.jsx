import React, {useState} from 'react'
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import bgimage from "../../assets/bg.jpg"
import TextField from '@mui/material/TextField';

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
    <h1 className="title">Reset Password</h1>
    <form onSubmit={handleSubmit}>
      <div className="inputs_container">
      <hr className='hrline'></hr>
        <TextField
          sx={{ 
          marginTop: "2rem"
          }}
          id="outlined-basic" 
          label="Email Address" 
          variant="outlined"
          required
          type="text"
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
      <div className='w-full flex items-center justify-center'>
        <p className='text-sm font-normal text-black mt-5'>Do you want to go back? <Link to= "/Signin"><a className='font-semibold underline underline-offset-2 cursor-pointer'>Login here</a></Link></p>
      </div>
    </form>
  </Card>
  </div>
  );
};
export default Forgotpassword
