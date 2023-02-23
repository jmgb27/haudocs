import React from 'react'
import Adminsidebar from '../Adminsidebar';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';

const AdminApplication = () => {
   // Sample data
   const columns = [
    { field: 'id', headerName: 'ID', width: 270 },
    { field: 'classification', headerName: 'Classification', width: 270 },
    {
      field: 'documentname',
      headerName: 'Document Name',
      width: 280,
    },
    {
      field: 'datesent',
      headerName: 'Date Sent',
      width: 280,
    },
    {
      field: 'action',
      headerName: 'Action',
    },
  ];

  const rows = [
    { id: 1, classification: '', documentname: "", datesent: "", action: ""},
  ];

  const buttonStyle = {
    backgroundColor: 'maroon',
    color: 'white',
  };

  return (
    <Adminsidebar>
    <div className='datatable'>
    <h1 className='mt-[3rem] text-center text-2xl font-bold'>Review Status</h1>
    <div className='flex items-end justify-end'>
    <Button sx={{ width: '100px' }} style={buttonStyle} onClick={""}>Delete</Button>
    </div>
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

export default AdminApplication