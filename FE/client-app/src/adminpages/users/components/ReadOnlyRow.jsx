import React from "react";
import './edit.css';
import { IoPerson } from 'react-icons/io5';

const ReadOnlyRow = ({ user, handleEditClick, handleDeleteClick}) => {
    return (

        <tr>
            <td><IoPerson size={50} color="gray"  /></td>
            <td>{user.Role}</td>
            <td>{user.fullName}</td>
            <td>
                <button type="button" onClick={(event)=> handleEditClick(event, user)} className="edit-btn">Edit</button>
                <button type="button" onClick = {()=> handleDeleteClick(user.id)} className="delete-btn">Delete </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow