import React, {useState, useEffect} from 'react'
import Reviewersidebar from '../Reviewersidebar'
import { Pagination } from 'flowbite-react'
import {IoMdDownload} from  'react-icons/io'
import {MdUpload} from 'react-icons/md'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system'

const ProtocolsFR = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fileName, setFileName] = useState("");

   // Sample data
  const sampleData = [
      { Protocolnumber: "", Documentname: "HAU-IRB FORM 3.7(A) Final Report Form", 
        Datesent: "", Duedate: "", Action: "Download", Upload: "Upload" },
    ];

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      setFileName(file.name);
    };
  
  useEffect(() => {
  // Load data
  setData(sampleData);
  }, []);
  
  // Handle page change
  
  const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
  // Calculate number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  // Get data for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem); 
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
  return (
    <Reviewersidebar>
    <div className='ml-[15rem]'>
    <h1 className='mt-[5rem] text-center text-2xl font-bold'>Protocols For Final Review</h1>
    <div class="flex flex-col justify-center items-center overflow-x-auto mt-[2rem]">
    <table class="border-t-0 text-sm text-center text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-maroon dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3 text-sm">
            Protocol Number
            </th>
            <th scope="col" class="px-6 py-3 text-sm">
            Document Name
            </th>
            <th scope="col" class="px-6 py-3 text-sm">
            Date Sent
            </th>
            <th scope="col" class="px-6 py-3 text-sm">
            Due Date
            </th>
            <th scope="col" class="px-6 py-3 text-sm">
            Action
            </th>
            <th scope="col" class="px-6 py-3 text-sm">
            Upload
            </th>
            </tr>
        </thead>
        <tbody>
            {currentData.map((item) => (
            <tr className='text-base' key={item.id}>
              <td>{item.Protocolnumber}</td>
              <td>{item.Documentname}</td>
              <td>{item.Datesent}</td>
              <td>{item.Duedate}</td>
              <td><button className='flex items-center bg-transparent'><IoMdDownload/>{item.Action}</button></td>
              <td><Button onClick={handleOpen} className='flex items-center'><MdUpload/>{item.Upload}</Button></td>
            </tr>
          ))}
        </tbody>
          </table>
          <div className='flex justify-center items-center mt-1'>
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              layout="table"
              totalPages={totalPages}
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
          {currentData.map((item) => (
            <div key={item.id}>Review: {item.Documentname}</div>
          ))}
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
    </div>
    </Reviewersidebar>
  )
}

export default ProtocolsFR