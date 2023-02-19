import React, {useState} from 'react'
import Sidebar from '../../components/Sidebar'
import "./application.css"
import { FaSpinner, FaTimes } from "react-icons/fa";
import { AiFillCheckCircle, AiOutlineFile } from "react-icons/ai"

function Application() {
  const [status, setStatus] = useState(<div className='text-lg font-semibold'>You have no pending submissions for review</div>);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const getStatusIcon = () => {
    switch (status) {
      case "Your application for initial review has been completed":
        return <div className='flex items-center flex-col'><AiFillCheckCircle size={70} color="green" /></div>
      case "Your application is in process for initial review":
        return <div className='flex items-center flex-col'><FaSpinner size={70} color="red" /></div>;
      case "Your application for initial review has been declined":
        return <div className='flex items-center flex-col'><FaTimes size={70} color="red" /></div>;
      default:
        return null, 
        <div className='flex items-center flex-col mb-10'><AiOutlineFile size={70} color="gray"/> </div>;
    }
  };

  return (
    <Sidebar>
    <div className='mt-[5rem] ml-[15rem]'>
    <h3 className='text-2xl font-bold text-left ml-7'>Application Status</h3>
    <div className='application-container'>
      <div className="status flex items center flex-col justify-center">
        {getStatusIcon()}
        <p>{status}</p>
      </div>
{/*       <div className="buttons">
        <button onClick={() => handleStatusChange("Your application for initial review has been completed")}>
          Accept
        </button>
        <button onClick={() => handleStatusChange("Your application is in process for initial review")}>
          In Process
        </button>
        <button onClick={() => handleStatusChange("Your application for initial review has been declined")}>
          Decline
        </button>
      </div> */}
    </div>
    </div>
    </Sidebar>
  )
}

export default Application
