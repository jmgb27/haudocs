import React from 'react'
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import {AiFillFileText} from 'react-icons/ai';
import {IoSyncCircleSharp} from 'react-icons/io5';
import {BsFillFileEarmarkCheckFill} from 'react-icons/bs'

function Dashboard() {
  const navigate = useNavigate()
  return (
  <div className='db-bg'>
    <div className='db-containers'>
      <div className='db-title'>
         <h1>HAU-Institutional Review Board</h1>
      </div>
  <div className='db-ir-head'>
    <button onClick={() => navigate('IRform')} class="db-ir">
      <div className='db-logo-container'>
        <div className='logo'>
        <AiFillFileText size={100}/>
        </div>
      </div>
      <h1 className='ir-title'>Initial Review</h1>
    </button>
  </div>
  <div className='db-cr-head'>
    <button onClick={() => navigate('CRform')} class="db-ir">
      <div className='db-logo-container'>
       <div className='logo'>
        <IoSyncCircleSharp size={100}/>
      </div>
    </div>
    <h1 className='ir-title'>Continuing Review</h1>
   </button>
  </div>
  <div className='db-fr-head'>
    <button onClick={() => navigate('FRform')} class="db-ir">
    <div className='db-logo-container'>
       <div className='logo'>
        <BsFillFileEarmarkCheckFill size={100}/>
      </div>
    </div>
    <h1 className='ir-title'>Final Review</h1>
    </button>
  </div>
</div>
</div>
  )
}

export default Dashboard
