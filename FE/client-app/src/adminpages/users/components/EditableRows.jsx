import React from 'react'
import './edit.css';

const EditableRows = ({editFormData, handlEditFormChange, handleCancelClick}) => {
  return (
   <tr>
    <td>

    </td>
    <td>
        <input type="text" 
        required="required"
         placeholder='Enter a Role...' 
         name="Role" 
         value={editFormData.Role}
         onChange={handlEditFormChange}
          />
    </td>
    <td>
        <input type="text" required="required"
         placeholder='Enter a Name...' 
         name="fullName" 
         value={editFormData.fullName}
         onChange={handlEditFormChange}
          />
          </td>
          <td>
            <button type="submit" className='save-btn'>Save</button>
            <button type="button" onClick={handleCancelClick} className='cancel-btn'>Cancel</button>
          </td>
   </tr>
  )
}

export default EditableRows