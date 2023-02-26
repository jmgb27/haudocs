import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
  
function Assignedcontinuing() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "50%",
        height: "80%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    const columns = [
        { field: 'protocolnumber', headerName: 'Protocol Number', width: "350" },
        { field: 'datesent', headerName: 'Date Sent', width: "350"},
        { field: 'duedate', headerName: 'Due Date', width: "350" },
        { field: 'action', headerName: 'Action', width: "200", renderCell: (params) => <ViewCell {...params} />, },
      ];
      
      const rows = [
        {id: "", protocolnumber: "", datesent: '', duedate: '' },
      ];
    
    function ViewCell(id) {
    return (
    <div>
    <Button onClick={handleOpen} style={viewStyle}>View</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        </Box>
      </Modal>
    </div>
        )
      }
    
      const viewStyle = {
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
    
      
  
  return (
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        classes={{ header: 'custom-header' }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default Assignedcontinuing
