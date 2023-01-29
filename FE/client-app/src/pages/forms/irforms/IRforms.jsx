import React from 'react'
import './irforms.css'

const IRforms = () => {
  return (
  <div className='head'>
      <h1 className='irform'>Initial Process</h1>
      <hr className='hr-ir'></hr>
      <div className='ir-container'>
    <table>
      <tr className='ir-title'>
        <th>REGISTRATION AND APPLICATION FORM<br/>for Initial Review and Resubmission</th>
      </tr>
      <div className='ir-content'>
      <table className='ir-table'>
        <tr className='ir-section'>
          <th>SECTION I: APPLICATION INFORMATION</th>
        </tr>
        </table>

        <table className='ir-table'>
        <tr>
          <th><p>1. Study Protocol Code</p></th>
          <th><p>HAU-IRB PROTOCOL #</p></th>
          <th><input type="text" placeholder='#' className='ir-input-small'/></th>
        </tr>
        
        <tr>
          <th><p>2. Type of Submission</p></th>
          <th><p><input type="checkbox"></input> 2.2 Initial Review<br/>
          <input type="checkbox"></input> 2.2 Resubmission (responses to initial review recommendations or submission of studies with investigator-initiated changes prior to ethics approval). 
          NOTE: version and date of version must be inserted as a document footer for all resubmissions.</p></th>
          </tr>

        <tr>
          <th><p>3. Date of Submission</p></th>
          <th><input type="text" placeholder='mm/dd/yyyy' className='ir-input'/></th>
        </tr>

        <tr>
          <th><p>4. Study Category</p></th>
          <th><p><input type="checkbox"></input> 4.1. Research involving human participants<br/>
          <input type="checkbox"></input> 4.2 Research involving non-human living vertebrates<br/>
          <input type="checkbox"></input> Others (indicate):</p><input type="text" placeholder='Enter your answer here.' className='ir-input'/></th>
        </tr>

        <tr>
          <th><p>5. Type of study</p></th>
          <th><p><input type="checkbox"></input> 5.1. Qualitative study<br/>
          <input type="checkbox"></input> 5.2 Quantitative study, specifically (choose one):<br/></p>
          <div className='quali'>
          <input type="checkbox"></input> 5.2.1. Research on Indigenous Materials<br/>
          <input type="checkbox"></input> 5.2.2. Review of medical records<br/>
          <input type="checkbox"></input> 5.2.3. Epidemiological study<br/>
          <input type="checkbox"></input> 5.2.4. Sociobehavioral Research<br/>
          <input type="checkbox"></input> 5.2.5. Health informatics<br/>
          <input type="checkbox"></input> 5.2.6. Operations/process research<br/>
          </div>
          <div className='five-others'>
          <th><p><input type="checkbox"></input> 5.3 Others, please indicate: </p><input type="text" placeholder='Enter your answer here.' className='ir-input'/></th>
          </div></th>   
        </tr>

        <tr>
          <th><p>6. Category of Investigator</p></th>
          <th><p><input type="checkbox"></input> 6.1 HAU Faculty/Staff<br/>
          <input type="checkbox"></input> 6.2 HAU Undergraduate Student<br/>
          <input type="checkbox"></input> 6.3 HAU Graduate Student (MS/MA, PhD)<br/>
          <input type="checkbox"></input> 6.4 Non-HAU (NOTE: This category requires completion of  PART III: AUTHORIZATION AND ACKNOWLEDGEMENT OF REVIEW below)<br/>
          <input type="checkbox"></input> 6.5 Others, please specify: </p><input type="text" placeholder='Enter your answer here.' className='ir-input'/>
          </th>
        </tr>

        <tr>
          <th><p>7. Purpose of study</p></th>
          <th><p><input type="checkbox"></input> 7.1. Academic requirement (Thesis, Dissertation, Training Requirement)<br/>
          <input type="checkbox"></input> 7.2 Independent research work<br/>
          <input type="checkbox"></input> 7.3 Multi-institutional or multi-country collaboration<br/>
          <input type="checkbox"></input> 7.4 URO-funded research<br/>
          <input type="checkbox"></input> 7.5 Others (indicate):<br/></p>
          <input type="text" placeholder='Enter your answer here.' className='ir-input'/>
          </th>
        </tr>

        <tr>
          <th><p>8. Study Title</p></th>
          <th><input type="text" placeholder='Enter your answer here.' className='ir-input'/></th>
        </tr>

        <tr>
          <th><p>9. Study Protocol Sypnopsis</p></th>
          <th><p> 1. Technical Synopsis<br/>
          <p>a. Objectives/Expected output</p>
          <p>b.	Literature review rationalizing the design</p>
          <p>c.	Research design</p>
          <p>d.	Sampling design, sample size</p>
          <p>e.	Inclusion criteria, exclusion criteria, withdrawal criteria</p>
          <p>f.	Data collection plan</p>
          <p>g.	Specimen collection and processing plan (including plans for specimen storage and duration of storage)</p>
          <p>h.	Data analysis plan (including statistical basis for design, as applicable)</p>
          <p>i.	Rationalization for choice of study site (including capacity of site to address known risks of study protocol, such as availability of equipment and facilities, as applicable) (Cross reference information with statements provided in the informed consent)</p></p>
          <div className='ethical'>
          <th><p>2. Ethical Considerations Section<br/>
          <div className='ethical-sub'><p>This should be stated in the study protocol, as applicable.</p></div>
          <p>a.	Protection of privacy and confidentiality of research information including data protection plan</p>
          <p>b.	Vulnerability of research participants</p>
          <p>c.	Risks of the study (including social risks)</p>
          <p>d.	Benefits of the study</p>
          <p>e.	Patient-related compensations/reimbursements/entitlements</p>
          <p>f.	Informed consent process and recruitment procedures</p>
          <p>g.	Terms of reference of collaborative study (as applicable, such as intellectual property agreements and similar concerns)</p>
          <p>h.	Terms of available study-related insurance</p>
          </p>
          <th><input placeholder='Enter your answer here.' className='ir-input'/></th>
          </th></div>
          </th>
        </tr>



      </table>
      </div>
    </table>
  </div>
  </div>
  )
}

export default IRforms
