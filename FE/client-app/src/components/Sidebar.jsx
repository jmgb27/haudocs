import React from 'react'
import './sidebar.css';
import {FaTh} from "react-icons/fa";
import {AiOutlineFileSync, AiFillSetting, AiOutlineFileAdd} from "react-icons/ai";
import {FiDownload, FiLogOut} from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import logo from '../assets/haulogo.png'
import {FaUserCircle} from "react-icons/fa";
import {AiFillBell} from "react-icons/ai";
import './navbar/navbar.css'
import Navbar from './navbar/Navbar';

const Sidebar = ({children},{setIsSignin}) => {
  const SidenavItem = [
    {
      path:'/dashboard',
      name:"Dashboard",
      icon: <FaTh/>
    },
    {
      path:'/application',
      name:"Application Status",
      icon: <AiOutlineFileSync/>
    },
    {
      path:'/download',
      name:"Download Forms",
      icon: <FiDownload/>
    },
    {
      path:'/submission',
      name:"Submission",
      icon: <AiOutlineFileAdd/>
    },
  ]
  const Setting = [
    {
      path:'/setting',
      name:"Setting",
      icon: <AiFillSetting/>
    },
  ]

  const BottomnavItem = [
    {
      path:'/logout',
      name:"Logout",
      icon: <FiLogOut/>
    },
  ]
  return (
    <div className='container'>
      <div className='sidebar'>
      <Navbar />
        <div className='top_section'>
        </div>
        {
          SidenavItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))
        }      
      <div className='bottom_section'>
          {
          Setting.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))
          }
          
          {
          BottomnavItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" onClick={()=>setIsSignin(false)}>
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))
          }
      </div>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar;
