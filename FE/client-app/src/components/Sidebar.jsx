import React from 'react'
import '../App.css';
import {FaTh} from "react-icons/fa";
import {AiOutlineFileSync, AiFillSetting, AiOutlineFileAdd} from "react-icons/ai";
import {FiDownload, FiLogOut} from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
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
  const BottomnavItem = [
    {
      path:'/setting',
      name:"Setting",
      icon: <AiFillSetting/>
    },
    {
      path:'/logout',
      name:"Logout",
      icon: <FiLogOut/>
    },
  ]
  return (
    <div className='container'>
      <div className='sidebar'>
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
          BottomnavItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
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
