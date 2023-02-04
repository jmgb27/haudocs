import React, {useState} from 'react'
import "../../index.css"
import BG from '../../assets/bg.jpg'
import MO from '../../assets/Microsoft.png'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    }catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(auth,(currentUser) => {
    if (currentUser) navigate("/");
  })

  const Signin = (e) => {
    // Prevent page from reloading
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <img src={BG} className='w-full h-full object-cover'></img>
      </div>
    
    <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-8 justify-between items-center'>
      <h1 className='w-full max-w-[500px] mx-auto text-xl text-black font-semibold mr-auto'>HAU-Institutional Review Board</h1>
      <div className='w-full flex flex-col max-w-[500px]'>
        <div className='w-full flex flex-col mb-2'>
        <h2 className='text-3xl font-semibold mb-4'>Sign Up</h2>
        <p className='text-base mb-2'>Welcome! Please Enter your details</p>
        </div>

        <form onSubmit={Signin}>
        <div className='w-full flex flex-col'>
        <h1 className='text-1xl font-bold'>Name</h1>
          <input 
          name="name"
          type="text"
          required
          className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
           />

          <h1 className='text-1xl font-bold'>Email</h1>
          <input 
          name="email"
          type="email"
          required
          className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          onChange={(e) => setEmail(e.target.value)} />

          <h1 className='text-1xl font-bold'>Password</h1>
          <input 
          name='password'
          type="password"
          required
          className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          onChange={(e) => setPassword(e.target.value)}/>


        <h1 className='text-1xl font-bold'>Confirm Password</h1>
          <input 
          name='password'
          type="password"
          required
          className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          />
        </div>

        <div className='w-full flex items-center justify-between'>
          <div className='w-full flex items-center'>
            <input type="checkbox" className='w-f h-4 mr-2' />
            <p className='text-sm'>Remember me</p>
          </div>
          <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password ?</p>
        </div>

        <div className='w-full flex flex-col my-4'>
          <button onClick={handleSignIn} className='w-full text-white font-semibold bg-black rounded-md p-4 my-2 text-center flex items-center justify-center cursor-pointer'>Register</button>
        </div>

        <div className='w-full flex items-center justify-center relative py-2'>
          <div className='w-full h-[1px] bg-black/40'></div>
          <p className=' text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
        </div>

        <div className='w-full text-black font-semibold bg-white border border-black/40 rounded-md p-4 my-2 text-center flex items-center justify-center cursor-pointer'>
          <img src={MO} className='h-6 mr-2'></img>
          Sign In With Microsoft
        </div>
        </form>
      </div>
      <div className='w-full flex items-center justify-center'>
        <p className='text-sm font-normal text-black'>Already have an account? <Link to= "/"><a className='font-semibold underline underline-offset-2 cursor-pointer'>Login here</a></Link></p>
      </div>
    </div>
    </div>
  )
}

export default Register
