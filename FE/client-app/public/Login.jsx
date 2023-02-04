import React, { useState, useEffect } from 'react'
import "../../index.css"
import BG from '../../assets/bg.jpg'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import GoogleButton from 'react-google-button'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const [error, setError] = useState('');
  const { googleSignIn, user } = UserAuth();

  const Signin = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

const handleGoogleSignIn = async () => {
  try {
    await googleSignIn();
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  if (user != null) {
    navigate('/dashboard');
  }
}, [user]);

  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <img src={BG} className='w-full h-full object-cover'></img>
      </div>
    
    <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
      <h1 className='w-full max-w-[500px] mx-auto text-xl text-black font-semibold mr-auto'>HAU-Institutional Review Board</h1>
      <div className='w-full flex flex-col max-w-[500px]'>
        <div className='w-full flex flex-col mb-2'>
        <h2 className='text-3xl font-semibold mb-4'>Login</h2>
        <p className='text-base mb-2'>Welcome! Please Enter your details</p>
        </div>

        <form onSubmit={Signin}>
        <div className='w-full flex flex-col'>
          <input 
          type="email"
          value={email}
          required
          placeholder='Email'
          className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          onChange={(e) => setEmail(e.target.value)} />

          <input 
          type="password"
          required
          placeholder='Password'
          className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className='w-full flex items-center justify-between'>
          <div className='w-full flex items-center'>
            <input type="checkbox" className='w-f h-4 mr-2' />
            <p className='text-sm'>Remember me</p>
          </div>
          <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password ?</p>
        </div>

        <div className='w-full flex flex-col my-4'>
          <button className='w-full text-white font-semibold bg-black rounded-md p-4 my-2 text-center flex items-center justify-center cursor-pointer'>Log in</button>
          <button onClick={() => navigate("/register")} className='w-full text-black font-semibold bg-white border border-black rounded-md p-4 my-2 text-center flex items-center justify-center cursor-pointer'>Register</button>
        </div>

        <div className='w-full flex items-center justify-center relative py-2'>
          <div className='w-full h-[1px] bg-black/40'></div>
          <p className=' text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
        </div>

        <div className='w-full text-black font-semibold border-black/40 rounded-md p-4 my-2 text-center flex items-center justify-center cursor-pointer'>
        <GoogleButton onClick={handleGoogleSignIn}/>
        </div>
        </form>
      </div>
      <div className='w-full flex items-center justify-center'>
        <p className='text-sm font-normal text-black'>Don't have a account? <a href='/register' className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</a></p>
      </div>
    </div>
    </div>
  )
}

export default Login
