import React from 'react'
import {FaTh, FaUserAlt} from "react-icons/fa";
import {AiOutlineFileSync, AiFillSetting} from "react-icons/ai";
import { FiLogOut} from "react-icons/fi";
import { RiFileTransferFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { BsFillArchiveFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import './adminsidebar.css';
import Navbar from '../components/navbar/Navbar';

const Adminsidebar = ({children}, {setIsSignin}) => {
    const AdminsidenavItem = [
        {
          path:'/admindashboard',
          name:"Dashboard",
          icon: <FaTh/>
        },
        {
          path:'/adminusers',
          name:"Users",
          icon: <FaUserAlt/>
        },
        {
          path:'/adminapplication',
          name:"Application Status",
          icon: <AiOutlineFileSync/>
        },
        {
          path:'/admintransfer',
          name:"Transfer",
          icon: <RiFileTransferFill/>
        },
        {
          path:'/admintracking',
          name:"Tracking Number",
          icon: <ImLocation2/>
        },
        {
          path:'/adminarchiving',
          name:"Archiving",
          icon: <BsFillArchiveFill/>
        },
      ]
      const Setting = [
        {
          path:'/adminsettings',
          name:"Setting",
          icon: <AiFillSetting/>
        },
      ]
    
      const BottomnavItem = [
        {
          path:'/adminlogout',
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
        AdminsidenavItem.map((item, index)=>(
          <NavLink to={item.path} key={index} className="link" activeclassName="active">
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))
      }      
    <div className='admin-bottom_section'>
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

export default Adminsidebar
