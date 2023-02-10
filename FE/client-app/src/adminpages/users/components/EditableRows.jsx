import React from 'react'
import './edit.css';

const EditableRows = ({editFormData, handlEditFormChange, handleCancelClick}) => {
  return (
   <tr className='items-center flex'>
    <td>

    </td>
    <td>
        <input type="text" className='mr-5'
        required="required"
         placeholder='Enter a Role...' 
         name="Role" 
         value={editFormData.Role}
         onChange={handlEditFormChange}
          />
    </td>
    <td>
        <input type="text" required="required" className='mr-5'
         placeholder='Enter a Name...' 
         name="fullName" 
         value={editFormData.fullName}
         onChange={handlEditFormChange}
          />
          </td>
          <td>
            <button type="submit" className='save-btn flex flex-col justify-center mr-5'>Save</button>
            <button type="button" onClick={handleCancelClick} className='cancel-btn flex flex-col justify-center'>Cancel</button>
          </td>
   </tr>
  )
}

export default EditableRows