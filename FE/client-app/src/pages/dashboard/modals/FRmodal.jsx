import React, {useState} from 'react'

function FRmodal() {
    const [modal3, setModal3] = useState(false);
    const toggleModal3 = () => {
        setModal3(!modal3)
      };
  return (
    <div>
        {modal3 &&(
        <div className='modal'>
        <div className='overlay'></div>
        <div className="ir-modal-content" >
        <h1>FINAL Review (Final report form)</h1>
        <div className='require'>
        <p><strong>1. HAU-IRB FORM 3.7(A): Final Report Form</strong> <em>(this signals the completion of the study and its 
          acceptance by the HAU-IRB).</em>This should be forwarded to the board not later than 8 weeks after 
          the end of the study.</p>
        </div>
        <div>
        <button className='continue-button'>Continue</button>
        <button onClick={toggleModal3} className='ir-close-modal'>Close</button>
        </div>
        <p></p>
        </div>
      </div>
  )}
    </div>
  )
}

export default FRmodal
