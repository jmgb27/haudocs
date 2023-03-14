import React from "react";
import Sidebar from "../../components/Sidebar";
import "./download.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Download = () => {
  const initialgoogleDriveLink =
    "https://drive.google.com/drive/folders/1Yspdco-rPZBfFFcodV4H-RD8yHCAGc4n?usp=share_link";

  const continuinggoogleDriveLink =
    "https://drive.google.com/drive/folders/1odBAMYIf46gbPyRkLbCH5A2XqBqFcwJk?usp=share_link";

  const finalgoogleDriveLink =
    "https://drive.google.com/drive/folders/13DrN_67A_cX56FYmSfjuqA3B3I9HZ1jJ?usp=share_link";
  return (
    <Sidebar>
      <div className="accordion">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Initial Process Forms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "maroon" }}>
              <a
                href={initialgoogleDriveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here To Download
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Continuing Review Forms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "maroon" }}>
              <a
                href={continuinggoogleDriveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here To Download
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Final Review Form</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "maroon" }}>
              <a
                href={finalgoogleDriveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here To Download
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Sidebar>
  );
};

export default Download;
