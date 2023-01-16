import React from 'react'
import './navbar.css';
import logo from '../../assets/haulogo.png'
import {FaUserCircle} from "react-icons/fa";
import {AiFillBell} from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div className="hau_navbar">
        <div className="hau_navbar-links">
            <div className="hau_navbar-links_logo">
                <img src={logo} alt="logo"/>
            </div>
        </div>
        <div className='icons'>
        <div className="notif">
            <AiFillBell size={25}/>
            </div>
            <div className='usericon'>
            <FaUserCircle size={25}/>
            </div>
            </div> 
      </div>
    </div>
  )
}

export default Navbar
