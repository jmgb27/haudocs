import React, { useState } from 'react'
import {RiArrowRightSFill} from 'react-icons/ri';
import {IoMdDownload} from  'react-icons/io'
import {BiCaretDown} from 'react-icons/bi'
import '../accordion.css';

const DOCX_FILE_URL = 'http://localhost:3000/HAU-IRB-FORM-3.7(A).docx';

function Accordion3 ({title3, frform}) {
    const [isActive, setIsActive] = useState(false);

    const downloadFileAtURL=(url)=> {
      const fileName = url.split("/").pop();
      const aTag = document.createElement("a");
      aTag.href=url;
      aTag.setAttribute("download",fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    }
  
    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{isActive ? <BiCaretDown/> : <RiArrowRightSFill/>}</div>
          <div>{title3}</div>
        </div>
        <div>
        {isActive && <div className="accordion-content"><button className='flex items-center' onClick={()=>{downloadFileAtURL(DOCX_FILE_URL)}}><IoMdDownload/> {frform}</button></div>}
        </div>
      </div>
  )
}

export default Accordion3;
