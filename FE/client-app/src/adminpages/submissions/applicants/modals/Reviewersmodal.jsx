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
import "./tabmodal.css"
  
function Reviewersmodal(props) {
    const [value, setValue] = React.useState(0);
    const { handleCloseModal } = props;
    
    const columns = [
        { field: 'documentname', headerName: 'DocumentName', width: "180" },
        { field: 'sentby', headerName: 'Sent By', width: "175" },
        { field: 'datesent', headerName: 'Date Sent', width: "200" },
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
      {id: "1", documentname: "Research Proposal", sentby: "Bentong Rodriguez", datesent: "January 28, 2023" },
      {id: "2", documentname: "Questionnaire/s/Tools", sentby: "Bentong Rodriguez", datesent: "January 28, 2023" },
      {id: "3", documentname: "Informed consent/assentform", sentby: "Bentong Rodriguez", datesent: "January 28, 2023" },
      {id: "4", documentname: "NCIP clearance (for studies involving indigenous groups)(if needed)", sentby: "Bentong Rodriguez", datesent: "January 28, 2023" },
      {id: "5", documentname: "Accomplished HAU-IRB Forms", sentby: "Bentong Rodriguez", datesent: "January 28, 2023" },
      ];

      const continuingcolumns = [
        { field: 'documentname', headerName: 'DocumentName', width: "550" },
        { field: 'sentby', headerName: 'Sent By', width: "550" },
        { field: 'datesent', headerName: 'Date Sent', width: "550" },
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
        checkboxSelection
      />
        <div className='flex items-end justify-end mt-[1rem]'>
        <Button onClick={handleCloseModal} style={closeStyle} variant='outlined'>Close</Button>
        </div>
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
        checkboxSelection
      />
        <div className='flex items-end justify-end mt-[1rem]'>
        <Button onClick={handleCloseModal} style={closeStyle} variant='outlined'>Close</Button>
        </div>
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
        checkboxSelection
      />
        <div className='flex items-end justify-end mt-[1rem]'>
        <Button onClick={handleCloseModal} style={closeStyle} variant='outlined'>Close</Button>
        </div>
    </div>
      </TabPanel>
    </Box>
    </div>
  )
}

export default Reviewersmodal