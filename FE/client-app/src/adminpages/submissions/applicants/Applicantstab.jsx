import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Applicanttabmodal from "./modals/Applicanttabmodal";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

function Applicantstab(props) {
    const [showModal, setShowModal] = useState(false);

    const [submissions, setSubmissions] = useState([]);

    console.log(submissions);

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const submissionsCollection = collection(db, "submissions");
            const submissionsSnapshot = await getDocs(submissionsCollection);
            const submissionsData = submissionsSnapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    date_sent: data.date_sent
                        ? new Date(
                              data.date_sent.seconds * 1000
                          ).toLocaleString()
                        : null,
                    due_date: data.due_date
                        ? new Date(
                              data.due_date.seconds * 1000
                          ).toLocaleString()
                        : null,
                };
            });
            setSubmissions(submissionsData);
        };
        fetchData();
    }, []);

    function handleCloseModal() {
        setShowModal(false);
    }

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        minHeight: "70vh",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        overflow: "auto",
        p: 4,
        "@media (max-width: 600px)": {
            width: "100%",
            minHeight: "70vh",
        },
    };

    const columns = [
        {
            field: "protocol_no",
            headerName: "Protocol Number",
            width: "350",
        },
        { field: "date_sent", headerName: "Date Sent", width: "350" },
        { field: "due_date", headerName: "Due Date", width: "350" },
        {
            field: "action",
            headerName: "Action",
            width: "200",
            renderCell: (params) => <ViewCell uid={"uid"} {...params} />,
        },
    ];

    function ViewCell(props) {
        return (
            <div>
                <Button onClick={() => setShowModal(true)} style={viewStyle}>
                    View
                </Button>
                <Modal
                    open={showModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Applicanttabmodal
                            uid={props.row.uid}
                            handleCloseModal={handleCloseModal}
                        />
                    </Box>
                </Modal>
            </div>
        );
    }

    const viewStyle = {
        color: "maroon",
    };

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
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                classes={{ header: "custom-header" }}
                rows={submissions}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}

export default Applicantstab;
