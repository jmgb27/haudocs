import React, {useState, useEffect, useRef} from 'react'
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/haulogo.png';
import user from '../../assets/user.png';
import edit from '../../assets/edit.png';
import envelope from '../../assets/envelope.png';

function Navbar({setIsSignin}) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

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
              <img src='http://placeimg.com/100/100/people'></img>
            </div>
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
              <h3>Haudocs Users<br/><span>Users Role</span></h3>
              <ul>
                <Link to = {"/dashboard"}>
                <DropdownItem img = {edit} text = {"Edit Profile"}/>
                </Link>
                <DropdownItem img = {envelope} text = {"Inbox"}/>
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
