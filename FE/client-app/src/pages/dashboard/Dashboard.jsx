import React, {useState} from 'react'
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import {AiFillFileText} from 'react-icons/ai';
import {IoSyncCircleSharp} from 'react-icons/io5';
import {BsFillFileEarmarkCheckFill} from 'react-icons/bs'
import './modals/modal.css';
import Sidebar from '../../components/Sidebar';


function Dashboard() {

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const toggleModal2 = () => {
    setModal2(!modal2)
  };

  const toggleModal = () => {
    setModal(!modal)
  };

  const toggleModal3 = () => {
    setModal3(!modal3)
  };



  const navigate = useNavigate()
  return (
  <Sidebar>
  <div className='db-bg ml-[15rem] flex items-center justify-center flex-col'>
    <div className='db-containers'>
    <h1 className='flex text-center flex-col text-3xl'>HAU-Institutional Review Board</h1>
  <div className='db-ir-head flex-col items-center flex'>
    <div onClick={toggleModal2} class="db-ir">
      <div className='db-logo-container container mx-auto flex items-center ml-3'>
        <div class="flex items-start ">
        <AiFillFileText size={50}/>
        </div>
        <h1 className='font-bold'>Initial Process Application</h1>
      </div>
    </div>
  </div>
  <div className='db-cr-head flex-col items-center flex'>
    <div onClick={toggleModal} class="db-cr">
      <div className='db-logo-container container mx-auto flex items-center ml-3'>
       <div class="flex items-start">
        <IoSyncCircleSharp size={50}/>
      </div>
      <h1 className='font-bold text-lg text-center'>Continuing Review</h1>
    </div>
   </div>
  </div>
  <div className='db-fr-head flex-col items-center flex'>
    <div onClick={toggleModal3} class="db-fr">
    <div className='db-logo-container container mx-auto flex items-center ml-3'>
       <div class='flex flex-col items-center justify-center'>
        <BsFillFileEarmarkCheckFill size={50}/>
      </div>
      <h1 className="font-bold text-lg text-center">Final Review</h1>
    </div>
    </div>
  </div>
  </div>
</div>


{modal && (
      <div className='modal'>
      <div className='overlay'></div>
      <div className="ir-modal-content" >
      <h1 className='text-xl font-bold mb-10'>CONTINUING Review (Post-approval reports)</h1>
    
      <p>Upon issuance of ethical clearance <em>(approval letter is valid for 1 year),</em> the researcher 
        has the responsibility to the submission of the following post-approval reports <strong>during the 
        conduct of the study</strong> (whichever is applicable) as follows:</p>
    
      <p><strong>1. HAU-IRB FORM 3.1(A): Progress Report Form</strong> <em>(if the conduct of the study lasts more than 6 
        months)</em> should be submitted on the 6th month after issuance of ethical clearance.</p>
    
      <p><strong>2. HAU-IRB FORM 3.2(A): Early Termination Report Form</strong> <em>(for reasons that make the continuation 
          of the research untenable such as poor recruitment, safety or benefits is doubtful or at risks; 
          conduct breaches)</em></p>
    
      <p><strong>3. HAU-IRB FORM 3.3(A): Amendment Review Form</strong> <em>(any changes during the conduct of the study 
        such as changes to the study design, procedures, methods of recruitment, or the consent 
        form/information sheet).</em></p>
        
      <p><strong>4. HAU-IRB FORM 3.4(A): Protocol Deviation/Violation Report Form</strong> <em>(any deviations in the 
        approved conduct of the study that would impact on participant safety/wellbeing).</em>
      <li>Protocol Deviation - is non-compliance with the approved protocol that causes no harm 
        and has no potential to cause harm to the research participants or others.</li>
      <li>Protocol Violations - is non-compliance with the approved protocol that has an impact 
        on subject safety, may substantially alter risks to subjects, may have an effect on the 
        integrity of the study data, or may affect the subject's willingness to participate in the 
        study.
      </li></p>
  
      <p><strong>5. HAU-IRB FORM 3.5(A): Serious Adverse Event Form</strong> <em>(SAEs is any an adverse event that results to
        death, life threatening incident or causes immediate risk of death from the event).
      </em></p>
  
      <p><strong>6. HAU-IRB FORM 3.5(B): Reportable Negative Events Form</strong> <em>(RNEs is any experiences of
        researchers that involve personal safety issues [related to both research and research
        participant] in the conduct of research such as sexual harassment, physical threats, stalking and
        hostile reactions).
      </em></p>
  
      <p><strong>7. HAU-IRB FORM 3.6(A) Application for Continuing Review</strong> <em>(To ensure that conduct of study
        follows approved protocol beyond period of initial ethical clearance and up to the end of study).</em>
        This should be applied least 4 weeks before the expiration of the ethical clearance of a protocol.
      </p>
      <div className='mt-2 mb-10 space-x-[35rem]'>
      <button className='continue-button items-center justify-center flex'>Continue</button>
      <button onClick={toggleModal} className='close-modal items-center justify-center flex'>Close</button>
      </div>
      <p></p>
      </div>
    </div>
)}

{modal2 &&(
    <div className='modal'>
    <div className='overlay'></div>
    <div className="ir-modal-content" >
    <h1 className='text-xl font-bold mb-10'>INITIAL PROCESS (Application)</h1>
    <div className='require'>
    <p><strong>REQUIREMENTS for Ethics Review Initial application:</strong></p>
    </div>
    <p>Research Proposal (with the following sections)</p>
    <p>Introduction, RRL and Methods section- with <em>“Ethical Considerations” section</em></p>
    <p>Informed consent/assent form <em>(separate document)</em></p>
    <p>Questionnaire/s/Tools (Quantitative), Interview Guide (Qualitative)</p>
    <div className='RED'><p>NCIP clearance (for studies involving indigenous groups)</p></div>
    <p>Accomplished HAU-IRB Forms</p>
    <p><li>HAU-IRB FORM 2(B): <em>Registration and Application Form</em></li></p>
    <p><li><strong>section II should be signed and endorsed by URO Director</strong><em> (for faculty researchers)</em></li></p>
    <p><li><strong>section III should be signed and endorsed by the dean/GPC</strong><em> (for graduate school students) </em></li></p>
    <p><li>HAU-IRB FORM 4.1(A): <em>Protocol Assessment Form</em></li></p>
    <p><li>HAU-IRB FORM 4.1(B): <em>Informed Consent Assessment Form (the basis in filling out this form should be the submitted informed consent
    document, not the entire manuscript)</em></li></p>
    
    <p>Upon the receipt of the complete set of documents, depending on the risks involved, a <strong> 
      maximum of 4 weeks is needed to process an expedited review,</strong> whereas <em>6 weeks for a study
      needing full review by the board.</em></p>

    <p>Please be reminded that students/researchers cannot proceed with any form of data
      collection <em>(pilot testing included)</em> unless issued an ethical clearance.</p>

    <div className='mt-2 mb-10 space-x-[31rem]'>
    <button onClick={() => navigate('/download')} className='continue-button items-center justify-center flex'>Continue</button>
    <button onClick={toggleModal2} className='ir-close-modal items-center justify-center flex'>Close</button>
    </div>
    <p></p>
    </div>
  </div>
  )}

  {modal3 &&(
        <div className='modal'>
        <div className='overlay'></div>
        <div className="ir-modal-content" >
        <h1 className='text-xl font-bold mb-10'>FINAL Review (Final report form)</h1>
        <div className='require'>
        <p><strong>1. HAU-IRB FORM 3.7(A): Final Report Form</strong> <em>(this signals the completion of the study and its 
          acceptance by the HAU-IRB).</em>This should be forwarded to the board not later than 8 weeks after 
          the end of the study.</p>
        </div>
        <div className='space-x-[31rem]'>
        <button className='continue-button items-center justify-center flex'>Continue</button>
        <button onClick={toggleModal3} className='fr-close-modal items-center justify-center flex'>Close</button>
        </div>
        <p></p>
        </div>
      </div>
  )}
</Sidebar>
  )
}

export default Dashboard;
