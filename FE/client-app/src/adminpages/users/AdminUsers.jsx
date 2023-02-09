import React, { useState, Fragment } from 'react'
import Adminsidebar from '../Adminsidebar'
import './users.css';
import { IoSettingsSharp, IoPerson } from 'react-icons/io5';
import data from "./user-data.json";
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRows from './components/EditableRows';



const AdminUsers = () => {

  const [editFormData, setEditFormData] = useState({
    Role:"",
    fullName:"",
  });

  const [users, setUsers] = useState(data);

  const [editUserId, setEditUserId] = useState(null);

  const handlEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue;
    
    setEditFormData(newFormData);
  }

  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEditUserId(user.id);

    const formValues = {
      fullName: user.fullName, 
      Role: user.Role,
    }
  };

  const handlEditFormSubmit = (event) => {
    event.preventDefault();
    
    const editedUser = {
      id: editUserId,
      Role: editFormData.Role,
      fullName: editFormData.fullName,
    }

    const newUsers = [...users];

    const index = users.findIndex((user)=> user.id === editUserId);

    newUsers[index] = editedUser;

    setUsers(newUsers);
    setEditUserId(null);
  };
  const handleCancelClick = () => {
    setEditUserId(null);
  };
  const handleDeleteClick = (userId) => {
    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === userId);

    newUsers.splice(index, 1);

    setUsers(newUsers);
  }
  return (
    <Adminsidebar>
      <div className='user-containers'>
        <div className='user-title'>
          <h1 class="text-3xl font-bold">User Management</h1>
        </div>
        <button className='add-btn' style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>+ Add New</button>

        <div>
          <form onSubmit={handlEditFormSubmit}>
            <table className="user-table">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Role</th>
                  <th>Name</th>
                  <th>Settings</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) =>
                  <Fragment>
                    {editUserId === user.id ? 
                    <EditableRows 
                    editFormData ={editFormData} 
                    handlEditFormChange = {handlEditFormChange} 
                    handleCancelClick={handleCancelClick}
                    /> :
                      <ReadOnlyRow user={user} 
                      handleEditClick = {handleEditClick}
                      handleDeleteClick= {handleDeleteClick}
                       />}
                  </Fragment>
                )}

              </tbody>
            </table>
          </form>
        </div>
      </div>
    </Adminsidebar>
  )
}

export default AdminUsers
