import React from "react";
import './edit.css';
import { IoPerson } from 'react-icons/io5';

const ReadOnlyRow = ({ user, handleEditClick, handleDeleteClick}) => {
    return (

        <tr>
            <td className="items-center flex flex-col"><IoPerson size={50} color="gray"  /></td>
            <td>{user.Role}</td>
            <td>{user.fullName}</td>
            <td>
                <button type="button" onClick={(event)=> handleEditClick(event, user)} className="edit-btn flex flex-col justify-center mr-5">Edit</button>
                <button type="button" onClick = {()=> handleDeleteClick(user.id)} className="delete-btn flex flex-col justify-center">Delete </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow