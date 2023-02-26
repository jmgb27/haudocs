import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
  
function Assignedmodalinitial(props) {
    const [value, setValue] = React.useState(0);
    const [fileUpload, setfileUpload] = useState(null);
    const [open, setOpen] = useState(false);
    const { handleCloseModal } = props;

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    const columns = [
        { field: 'documentname', headerName: 'DocumentName', width: "550" },

        {   field: 'action', 
            headerName: 'Action', 
            width: "100",
            renderCell: (params) => (
            <Button style={downloadStyle} onClick={() => handleDownload(params.id)}>
              Download
            </Button>
          ), 
        },
      ];

    const rows = [
      {id: "1", documentname: "Research Proposal" },
      {id: "2", documentname: "Questionnaire/s/Tools (Quantitative), Interview Guide (Qualitative)" },
      {id: "3", documentname: "Informed consent/assent form" },
      {id: "4", documentname: "NCIP clearance (for studies involving indigenous groups)(if needed)" },
      {id: "5", documentname: "Accomplished-IRB Forms" },
      ];

      const continuingcolumns = [
        { field: 'documentname', headerName: 'DocumentName', width: "550" },
        {   field: 'action', 
            headerName: 'Action', 
            width: "100",
            renderCell: (params) => (
            <Button style={downloadStyle} onClick={() => handleDownload(params.id)}>
              Download
            </Button>
          ), 
        },
      ];

      const continuingrows = [

      ];

      const finalcolumns = [
        { field: 'documentname', headerName: 'DocumentName', width: "550" },
        {   field: 'action', 
            headerName: 'Action', 
            width: "100",
            renderCell: (params) => (
            <Button style={downloadStyle} onClick={() => handleDownload(params.id)}>
              Download
            </Button>
          ), 
        },
      ];

      const finalrows = [

      ];
      
    
      function handleDownload(id) {
        // logic to download data for the row with the specified ID
      }

      function handleSubmit () {
        // Add code here to submit the data
        setOpen(false);
      };
    
      const downloadStyle = {
        color: "maroon"
      }
      
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
    
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    
      const theme = createTheme({
        palette: {
          primary: {
            main: '#FFFFFF', // set the primary color to red
          },
        },
      });

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const CustomTabs = styled(Tabs)({
        '& .Mui-selected': {
            backgroundColor: "maroon",
            color: "white",
        },
      });

    const closeStyle = {
        color: "maroon",
        borderColor: "maroon"
    }
    
    const submitStyle = {
        color: "white",
        backgroundColor: "maroon"
    }
      
  
  return (
    <div className='flex'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <ThemeProvider theme={theme}>
        <CustomTabs value={value} onChange={handleChange}>
          <Tab label="Initial Review" {...a11yProps(0)} />
          <Tab label="Continuing Review" {...a11yProps(1)} />
          <Tab label="Final Review" {...a11yProps(2)} />
        </CustomTabs>
        </ThemeProvider>
      </Box>
      <TabPanel value={value} index={0}>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        classes={{ header: 'custom-header' }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
       <input
        class='mt-[1rem] block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
        id="multiple_files"
        type="file"
        multiple
        onChange={(event) => {
        setfileUpload(event.target.files[0]);
        }}/>
        <div className='flex items-end justify-end space-x-2'>
        <Button onClick={handleCloseModal} style={closeStyle} variant='outlined'>Close</Button>
        <Button onClick={handleOpen} style={submitStyle} variant='contained'>Submit</Button>
        </div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to submit?</DialogTitle>
        <DialogContent>
          {/* Add any additional content here */}
        </DialogContent>
        <DialogActions className='space-x-4'>
          <Button variant='outlined' style={closeStyle} onClick={handleClose}>Cancel</Button>
          <Button variant='contained' sx={{width: "100px"}} style={submitStyle} onClick={handleSubmit}>Yes</Button>
        </DialogActions>
        </Dialog>
    </div>
      </TabPanel>
      
      {/* Continuing TAB */}
      <TabPanel value={value} index={1}>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        classes={{ header: 'custom-header' }}
        rows={continuingrows}
        columns={continuingcolumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
       <input
        class='mt-[1rem] block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
        id="multiple_files"
        type="file"
        multiple
        onChange={(event) => {
        setfileUpload(event.target.files[0]);
        }}/>
        <div className='flex items-end justify-end space-x-2'>
        <Button onClick={handleCloseModal} style={closeStyle} variant='outlined'>Close</Button>
        <Button onClick={handleOpen} style={submitStyle} variant='contained'>Submit</Button>
        </div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to submit?</DialogTitle>
        <DialogContent>
          {/* Add any additional content here */}
        </DialogContent>
        <DialogActions className='space-x-4'>
          <Button variant='outlined' style={closeStyle} onClick={handleClose}>Cancel</Button>
          <Button variant='contained' sx={{width: "100px"}} style={submitStyle} onClick={handleSubmit}>Yes</Button>
        </DialogActions>
        </Dialog>
        </div>
      </TabPanel>

      {/* Final TAB */}
      <TabPanel value={value} index={2}>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        classes={{ header: 'custom-header' }}
        rows={finalrows}
        columns={finalcolumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
       <input
        class='mt-[1rem] block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
        id="multiple_files"
        type="file"
        multiple
        onChange={(event) => {
        setfileUpload(event.target.files[0]);
        }}/>
        <div className='flex items-end justify-end space-x-2'>
        <Button onClick={handleCloseModal} style={closeStyle} variant='outlined'>Close</Button>
        <Button onClick={handleOpen} style={submitStyle} variant='contained'>Submit</Button>
        </div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to submit?</DialogTitle>
        <DialogContent>
          {/* Add any additional content here */}
        </DialogContent>
        <DialogActions className='space-x-4'>
          <Button variant='outlined' style={closeStyle} onClick={handleClose}>Cancel</Button>
          <Button variant='contained' sx={{width: "100px"}} style={submitStyle} onClick={handleSubmit}>Yes</Button>
        </DialogActions>
        </Dialog>
        </div>
      </TabPanel>
    </Box>
    </div>
  )
}

export default Assignedmodalinitial
