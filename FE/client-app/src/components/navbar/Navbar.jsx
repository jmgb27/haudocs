import React from 'react'
import './navbar.css';
import logo from '../../assets/haulogo.png'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

function Navbar() {
  return (
    <div>
      <div className="hau_navbar">
        <div className="hau_navbar-links">
            <div className="hau_navbar-links_logo">
                <img src={logo} alt="logo"/>
            </div>
        </div>
        <div className='icons'>
          
          <Dropdown
            icon= {"bx bx-bell"}
            menu= {
              <>
                <li className='dropdown-list'>
                  <Link className='dropdown-link'>Link 1</Link>
                </li>
                <li className='dropdown-list'>
                  <Link className='dropdown-link'>Link 2</Link>
                </li>
              </>
            }
            />

            <Dropdown
            avatar={"http://placeimg.com/100/100/people"}
            menu= {
              <>
                <li className='dropdown-list'>
                  <Link className='dropdown-link'>Link 1</Link>
                </li>
                <li className='dropdown-list'>
                  <Link className='dropdown-link'>Link 2</Link>
                </li>
              </>
            }
            />
            </div>
            </div> 
      </div>
  )
}

export default Navbar;
