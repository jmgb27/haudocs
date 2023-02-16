import React, { useState } from 'react'
import {RiArrowRightSFill} from 'react-icons/ri';
import {IoMdDownload} from  'react-icons/io'
import {BiCaretDown} from 'react-icons/bi';
import '../accordion.css';

const DOCX_FILE_URL = 'http://localhost:3000/HAU-IRB-FORM-3.1(A).docx';
const DOCX2_FILE_URL = 'http://localhost:3000/HAU-IRB-FORM-3.2(A).docx';
const DOCX3_FILE_URL = 'http://localhost:3000/HAU-IRB-FORM-3.3(A).docx';
const DOCX4_FILE_URL = 'http://localhost:3000/HAU-IRB-FORM-3.4(A).docx';
const DOCX5_FILE_URL = 'http://localhost:3000/HAU-IRB-FORM-3.5(A).docx';
const DOCX6_FILE_URL = 'http://localhost:3000/HAU-IRB-FORM-3.5(B).docx';
const DOCX7_FILE_URL = 'http://localhost:3000/HAU-IRB-FORM-3.6(A).docx';

function Accordion2 ({title2, crform, crform2, crform3, crform4,
    crform5, crform6, crform7,}) {
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
          <div>{title2}</div>
        </div>
        <div>
        {isActive && <div className="accordion-content"><button className='flex items-center' onClick={()=>{downloadFileAtURL(DOCX_FILE_URL)}}><IoMdDownload/> {crform}</button></div>}
        {isActive && <div className="accordion-content"><button className='flex items-center' onClick={()=>{downloadFileAtURL(DOCX2_FILE_URL)}}><IoMdDownload/> {crform2}</button></div>}
        {isActive && <div className="accordion-content"><button className='flex items-center' onClick={()=>{downloadFileAtURL(DOCX3_FILE_URL)}}><IoMdDownload/> {crform3}</button></div>}
        {isActive && <div className="accordion-content"><button className='flex items-center' onClick={()=>{downloadFileAtURL(DOCX4_FILE_URL)}}><IoMdDownload/> {crform4}</button></div>}
        {isActive && <div className="accordion-content"><button className='flex items-center' onClick={()=>{downloadFileAtURL(DOCX5_FILE_URL)}}><IoMdDownload/> {crform5}</button></div>}
        {isActive && <div className="accordion-content"><button className='flex items-center' onClick={()=>{downloadFileAtURL(DOCX6_FILE_URL)}}><IoMdDownload/> {crform6}</button></div>}
        {isActive && <div className="accordion-content"><button className='flex items-center' onClick={()=>{downloadFileAtURL(DOCX7_FILE_URL)}}><IoMdDownload/> {crform7}</button></div>}
        </div>
      </div>
  )
}

export default Accordion2;
