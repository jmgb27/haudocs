import React, {useState} from 'react'
import Reviewersidebar from '../Reviewersidebar'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system'
import { IoMdDownload } from 'react-icons/io';
import { MdUpload } from 'react-icons/md';
import "./protocolscr.css"

const ProtocolsCR = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fileName, setFileName] = useState("");

   // Sample data
   const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'protocolnumber', headerName: 'Protocol Number', width: 180 },
    { field: 'documentname', headerName: 'Document Name', width: 180 },
    {
      field: 'datesent',
      headerName: 'Date Sent',
      width: 180,
    },
    {
      field: 'duedate',
      headerName: 'Due Date',
      width: 180,
    },
    {
      field: 'download',
      headerName: 'Download',
      renderCell: (params) => <DownloadCell {...params} />,
      width: 180,
    },
    {
      field: 'upload',
      headerName: 'Upload',
      renderCell: (params) => <UploadCell {...params} />,
      width: 180,
    },
  ];

  const rows = [
    { id: 1, protocolnumber: '032323name', documentname: 'HAU-IRB FORM 3.1(A): Progress Report Form', datesent: "03/23/23", duedate: "04/04/23", },
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
  };

  function UploadCell(props) {

  return (
    <Button onClick={handleOpen} className='flex items-center'><MdUpload size={20}/>Upload</Button>
  )
}

  function DownloadCell(props) {
    const handleDownload = () => {
        // Handle download logic here
      };
    
      return (
        <Button onClick={handleDownload} className='flex items-center bg-transparent'><IoMdDownload size={20}/> Download</Button>
      );
    }
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const buttonStyle = {
    backgroundColor: 'maroon',
    color: 'white',
  };

  return (
    <Reviewersidebar>
    <div className='datatable'>
    <h1 className='mt-[3rem] text-center text-2xl font-bold'>Protocols For Continuing Review</h1>
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
        <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Reviewed Form
          </Typography>
          <Typography className='text-center' id="modal-modal-description" sx={{ mt: 2 }}>
          <div>Upload a File<div className='text-[#3366CC]'>{fileName}</div></div>
          </Typography>
          <div className='flex items-center justify-center mt-[2rem]'>
          <Button variant="contained" component="label">
          Upload File
          <input onChange={handleFileUpload} hidden accept="docs/*" multiple type="file" />
        </Button>
        </div>
        </Box>
      </Modal> 
      </div>     
      </div>  
    </Reviewersidebar>
  )
}

export default ProtocolsCR

