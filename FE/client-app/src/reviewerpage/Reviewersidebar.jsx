import React from 'react'
import {FaTh} from "react-icons/fa";
import {AiOutlineFileSync, AiFillSetting} from "react-icons/ai";
import { FiLogOut} from "react-icons/fi";
import { RiFileTransferFill } from "react-icons/ri";
import { BsFillArchiveFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import {GoFileSymlinkDirectory} from "react-icons/go"
import './reviewersidebar.css'

const Reviewersidebar = ({children}, {setIsSignin}) => {
    const ReviewersidenavItem = [
        {
          path:'/reviewerdashboard',
          name:"Dashboard",
          icon: <FaTh/>
        },
        {
          path:'/reviewerstatus',
          name:"Review Status",
          icon: <AiOutlineFileSync/>
        },
        {
          path:'/protocolsIR',
          name:"Protocols for Initial",
          icon: <GoFileSymlinkDirectory/>
        },
        {
          path:'/protocolsCR',
          name:"Protocols for Continuing",
          icon: <RiFileTransferFill/>
        },
        {
          path:'/protocolsFR',
          name:"Protocols for Final",
          icon: <BsFillArchiveFill/>
        },
      ]
      const Setting = [
        {
          path:'/reviewersettings',
          name:"Setting",
          icon: <AiFillSetting/>
        },
      ]
    
      const BottomnavItem = [
        {
          path:'/reviewerlogout',
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
        ReviewersidenavItem.map((item, index)=>(
          <NavLink to={item.path} key={index} className="link-reviewersidebar" activeclassName="active">
            <div className="icon-admin">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))
      }      
    <div className='reviewer-bottom_section'>
        {
        Setting.map((item, index)=>(
          <NavLink to={item.path} key={index} className="link-reviewersidebar flex items-center" activeclassName="active">
            <div className="icon-admin">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))
        }
        
        {
        BottomnavItem.map((item, index)=>(
          <NavLink to={item.path} key={index} className="link-reviewersidebar flex items-center" onClick={()=>setIsSignin(false)}>
            <div className="icon-admin">{item.icon}</div>
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

export default Reviewersidebar
