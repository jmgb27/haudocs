import React from 'react'
import Accordion from './accordion/irformsdata/Accordion';
import formsdata from './accordion/irformsdata/formsdata';
import crformsdata from './accordion/crformsdata/crformsdata';
import Accordion2 from './accordion/crformsdata/Accordion2';
import Accordion3 from './accordion/frformsdata/Accordion3';
import frformsdata from './accordion/frformsdata/frformsdata';
import Sidebar from '../../components/Sidebar';

const Download = () => {
  return (
    <Sidebar>
    <div className='head'>
      <div className="accordion">
        {formsdata.map(({ title, form1, form2, form3 }) => (
          <Accordion title={title} form1={form1} form2={form2} form3={form3} />
        ))}
        {crformsdata.map(({ title2, crform, crform2, crform3,
        crform4, crform5, crform6, crform7 }) => (
          <Accordion2 title2={title2} crform={crform} crform2={crform2} 
          crform3={crform3} crform4={crform4} crform5={crform5} crform6={crform6} 
          crform7={crform7}  />
        ))}
        {frformsdata.map(({ title3, frform}) => (
          <Accordion3 title3={title3} frform={frform} />
        ))}
      </div>
    </div>
    </Sidebar>
  )
}

export default Download
