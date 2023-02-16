import React, { useState } from 'react'
import {RiArrowRightSFill} from 'react-icons/ri';
import {IoMdDownload} from  'react-icons/io'
import {BiCaretDown} from 'react-icons/bi';
import '../accordion.css';

const DOCX_FILE_URL = 'http://localhost:3000/HAU-IRB-FORM-2(B).docx';
const DOCX2_FILE_URL = 'http://localhost:3000/HAU-IRB-FORM-4.1(A).docx';
const DOCX3_FILE_URL = 'http://localhost:3000/HAU-IRB-FORM-4.1(B).docx';

function Accordion ({ title, form1, form2, form3}) {
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
        <div className="accordion-title items-center jusify-center flex" onClick={() => setIsActive(!isActive)}>
        <div>{isActive ? <BiCaretDown/> : <RiArrowRightSFill/>}</div>
          <div>{title}</div>
        </div>
        <div className=''>
        {isActive && <div className="accordion-content"><button className='flex items-center' onClick={()=>{downloadFileAtURL(DOCX_FILE_URL)}}><IoMdDownload/> {form1}</button></div>}
        {isActive && <div className="accordion-content"><button className='flex items-center' onClick={()=>{downloadFileAtURL(DOCX2_FILE_URL)}}><IoMdDownload/> {form2}</button></div>}
        {isActive && <div className="accordion-content"><button className='flex items-center' onClick={()=>{downloadFileAtURL(DOCX3_FILE_URL)}}><IoMdDownload/> {form3}</button></div>}
        </div>
      </div>
    );
  };
  
 

export default Accordion
