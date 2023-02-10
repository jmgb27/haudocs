import React from 'react'
import Sidebar from '../../components/Sidebar'
import './submit.css'

const Submission = () => {
  return (
    <Sidebar>
      <div className='sub-container'>
        <div className='sub-title'>
          <h1 class="text-3xl ">Initial Process</h1>
          <hr />
          <br />
          <div className='files'>
            <p className='fu'>File Upload</p>
            <div className='form'>
              <article className='upload'>
                1. Research proposal <br />
                <button className='uf-btn'>Upload File</button>
              </article>
              <article className='upload'>
                2. Informed consent/assent form <br />
                <button className='uf-btn'>Upload File</button>
              </article>
              <article className='upload'>
                3. Questionnaire/s/Tools (Quantitative), Interview Guide (Qualitative) <br />
                <button className='uf-btn'>Upload File</button>
              </article>
              <article className='ncip' >
                4. NCIP clearance (for studies involving indigenous groups)(if needed)<br />
                <button className='uf-btn'>Upload File</button>
              </article>
              <article className='upload'>
                5. Accomplished HAU-IRB Forms <br />
                <button className='uf-btn'>Upload File</button>
              </article>
              <article className='upload'>
                6. Curriculum Vitae <br />
                <button className='uf-btn'>Upload File</button>
              </article>
            </div>
            <div className='btns flex justify-end mb-8'>
            <button className='cancels-btn mr-[9rem] items-center flex'>Cancel</button>
            <button className='submit-btn items-center flex'>Submit</button>
            </div>
           
          </div>
        </div>
      </div>
    </Sidebar>
  )
}

export default Submission
