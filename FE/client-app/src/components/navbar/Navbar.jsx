import React, {useState, useEffect, useRef } from 'react'
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/haulogo.png';
import edit from '../../assets/edit.png';
import envelope from '../../assets/envelope.png';
import signout from '../../assets/log-out.png';
import { UserAuth } from '../../context/AuthContext';


function Navbar() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const { user, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)) {
      setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return() => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <div>
      <div className="hau_navbar">
        <div className="hau_navbar-links">
            <div className="hau_navbar-links_logo">
                <img src={logo} alt="logo"/>
            </div>
        </div>
        <div className='icons'>
          <div className="menu-container" ref={menuRef}>
            <div className="menu-trigger" onClick={() => {setOpen(!open)}}>
              <img src={user.photoURL}></img>
            </div>
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
              <h3 className='text-sm'>{user && user.displayName}<br/><span>Researcher</span></h3>
              <ul>
                <Link to = {"/dashboard"}>
                <DropdownItem img = {edit} text = {"Edit Profile"}/>
                </Link>
                <DropdownItem img = {envelope} text = {"Inbox"}/>
                <Link onClick={handleLogout}>
                <DropdownItem img = {signout} text = {"Logout"}/>
                </Link>
              </ul>
            </div>
          </div>
       </div>
      </div> 
      </div>
  );
}

function DropdownItem(props) {
  return(
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  );
}

export default Navbar;
