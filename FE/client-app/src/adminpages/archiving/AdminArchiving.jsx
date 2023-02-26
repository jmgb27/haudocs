import React from 'react'
import Adminsidebar from '../Adminsidebar';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

const Archiving = () => {
   // Sample data
   const columns = [
    { field: 'id', headerName: 'ID', width: 180},
    { field: 'applicantname', headerName: 'Applicant Name', width: 190 },
    { field: 'documentname', headerName: 'Document Name', width: 190, },
    { field: 'reviewer', headerName: 'Reviewer', width: 190, },
    { field: 'date', headerName: 'Date', width: 190, },
    { field: 'action', headerName: 'Action', renderCell: (params) => <DeleteCell {...params} />, width: 180, },
   ]

   function DeleteCell(props) {
      const handleDelete = () => {

      }

      return (
      <Button style={deleteStyle} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      )
   }

   const deleteStyle = {
    color: "maroon",
    borderColor: "maroon"
  }


  const rows = [
    { id: 1, applicantname: "", documentname: "", reviewer: "", date: "",},
  ];

/*   const buttonStyle = {
    backgroundColor: 'maroon',
    color: 'white',
  }; */

  return (
    <Adminsidebar>
    <div className='datatable'>
    <h1 className='mt-[3rem] text-center text-2xl font-bold'>Archiving</h1>
{/*     <div className='flex items-end justify-end'>
    <Button sx={{ width: '100px' }} style={buttonStyle} onClick={""}>Delete</Button>
    </div> */}
    <div className='ml-[2rem] mt-[2rem]' style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>    
      </div>  
    </Adminsidebar>
  )
}

export default Archiving