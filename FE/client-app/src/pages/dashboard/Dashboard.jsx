import React, { useState, useEffect } from "react";
import "./dashboard.css";
import "./modals/modal.css";
import Sidebar from "../../components/Sidebar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import haudocsinitial from "../../assets/haudocs-initial.png";
import haudocscontinuing from "../../assets/haudocs-continuing.png";
import haudocsfinal from "../../assets/haudocs-final.png";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled("div")`
  background-color: #f1f1f1;
  border-radius: 3px;
  border: 2px solid;
  max-height: 60vh;
  overflow-y: scroll;
  padding: 2rem;
  max-width: 90vw;
  min-width: 300px;
  font-size: 1rem;

  @media (min-width: 600px) {
    max-width: 50vw;
  }

  @media (min-width: 960px) {
    max-width: 30vw;
  }
`;

const ModalHeading = styled(Typography)`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

function Dashboard() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const toggleModal2 = () => {
    setModal2(!modal2);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal3 = () => {
    setModal3(!modal3);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setModal(false);
        setModal2(false);
        setModal3(false);
      }
    };
    const handleOutsideClick = (event) => {
      if (
        event.target.classList.contains("modal") ||
        event.target.classList.contains("overlay")
      ) {
        setModal(false);
        setModal2(false);
        setModal3(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <Sidebar>
      <div className="card-container flex flex-wrap justify-center mt-[3rem]">
        <div className="card-wrapper">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={haudocsinitial} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Requirements for Ethics Review Initial application
              </Typography>
            </CardContent>
            <div className="flex items-center justify-center">
              <CardActions>
                <Button
                  sx={{ color: "maroon" }}
                  onClick={toggleModal2}
                  size="small"
                >
                  read the instructions
                </Button>
              </CardActions>
            </div>
          </Card>
        </div>
        <div className="card-wrapper">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={haudocscontinuing} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Requirements for Continuing Ethics Review upon issuance of
                ethical clearance
              </Typography>
            </CardContent>
            <div className="flex items-center justify-center">
              <CardActions>
                <Button
                  sx={{ color: "maroon" }}
                  onClick={toggleModal}
                  size="small"
                >
                  read the instructions
                </Button>
              </CardActions>
            </div>
          </Card>
        </div>
        <div className="card-wrapper">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={haudocsfinal} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Requirements for Final Review upon completion of Continuing
                Review
              </Typography>
            </CardContent>
            <div className="flex items-center justify-center">
              <CardActions>
                <Button
                  sx={{ color: "maroon" }}
                  onClick={toggleModal3}
                  size="small"
                >
                  read the instructions
                </Button>
              </CardActions>
            </div>
          </Card>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="ir-modal-content">
            <h1 className="text-xl font-bold mb-10">
              CONTINUING Review (Post-approval reports)
            </h1>

            <p>
              Upon issuance of ethical clearance{" "}
              <em>(approval letter is valid for 1 year),</em> the researcher has
              the responsibility to the submission of the following
              post-approval reports{" "}
              <strong>during the conduct of the study</strong> (whichever is
              applicable) as follows:
            </p>

            <p>
              <strong>1. HAU-IRB FORM 3.1(A): Progress Report Form</strong>{" "}
              <em>(if the conduct of the study lasts more than 6 months)</em>{" "}
              should be submitted on the 6th month after issuance of ethical
              clearance.
            </p>

            <p>
              <strong>
                2. HAU-IRB FORM 3.2(A): Early Termination Report Form
              </strong>{" "}
              <em>
                (for reasons that make the continuation of the research
                untenable such as poor recruitment, safety or benefits is
                doubtful or at risks; conduct breaches)
              </em>
            </p>

            <p>
              <strong>3. HAU-IRB FORM 3.3(A): Amendment Review Form</strong>{" "}
              <em>
                (any changes during the conduct of the study such as changes to
                the study design, procedures, methods of recruitment, or the
                consent form/information sheet).
              </em>
            </p>

            <p>
              <strong>
                4. HAU-IRB FORM 3.4(A): Protocol Deviation/Violation Report Form
              </strong>{" "}
              <em>
                (any deviations in the approved conduct of the study that would
                impact on participant safety/wellbeing).
              </em>
              <li>
                Protocol Deviation - is non-compliance with the approved
                protocol that causes no harm and has no potential to cause harm
                to the research participants or others.
              </li>
              <li>
                Protocol Violations - is non-compliance with the approved
                protocol that has an impact on subject safety, may substantially
                alter risks to subjects, may have an effect on the integrity of
                the study data, or may affect the subject's willingness to
                participate in the study.
              </li>
            </p>

            <p>
              <strong>
                5. HAU-IRB FORM 3.5(A): Serious Adverse Event Form
              </strong>{" "}
              <em>
                (SAEs is any an adverse event that results to death, life
                threatening incident or causes immediate risk of death from the
                event).
              </em>
            </p>

            <p>
              <strong>
                6. HAU-IRB FORM 3.5(B): Reportable Negative Events Form
              </strong>{" "}
              <em>
                (RNEs is any experiences of researchers that involve personal
                safety issues [related to both research and research
                participant] in the conduct of research such as sexual
                harassment, physical threats, stalking and hostile reactions).
              </em>
            </p>

            <p>
              <strong>
                7. HAU-IRB FORM 3.6(A) Application for Continuing Review
              </strong>{" "}
              <em>
                (To ensure that conduct of study follows approved protocol
                beyond period of initial ethical clearance and up to the end of
                study).
              </em>
              This should be applied least 4 weeks before the expiration of the
              ethical clearance of a protocol.
            </p>
          </div>
        </div>
      )}

      {modal2 && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="ir-modal-content">
            <h1 className="text-xl font-bold mb-10">
              INITIAL PROCESS (Application)
            </h1>
            <div className="require">
              <p>
                <strong>
                  Requirements for Ethics Review Initial Application:
                  <br />
                  <br />
                  <em>
                    (NOTE: Items in red color are not required, submit if it
                    only applies to your field of study.)
                  </em>
                </strong>
              </p>
            </div>
            <p>
              <strong>1. Research Proposal with the following sections:</strong>
              <li>Introduction</li>
              <li>Review of Related Literature and Studies</li>
              <li>
                Methods section - with <em>Ethical Considerations</em> section
              </li>
            </p>
            <p>
              <strong>
                2. Informed consent/assent form <em>(separate document)</em>
              </strong>
            </p>
            <p>
              <strong>
                3. Questionnaire/s/Tools (Quantitative), Interview Guide
                (Qualitative)
              </strong>
            </p>
            <div className="RED">
              <p>
                <strong>
                  4. NCIP clearance (for studies involving indigenous groups)
                </strong>
              </p>
            </div>
            <p>
              <strong>
                5. Accomplished HAU-IRB FORM 2(B):{" "}
                <em>Registration and Application Form</em>
              </strong>
              <li>
                {" "}
                section II should be signed and endorsed by URO Director
                <em> (for faculty researchers)</em>
              </li>
              <li>
                section III should be signed and endorsed by the dean/GPC
                <em> (for graduate school students)</em>
              </li>
            </p>
            <p>
              <strong>
                6. Accomplished HAU-IRB FORM 4.1(A):{" "}
                <em>Protocol Assessment Form</em>
              </strong>
            </p>
            <p>
              <strong>7. Accomplished HAU-IRB FORM 4.1(B): </strong>
              <em>
                <strong>Informed Consent Assessment Form</strong> (the basis in
                filling out this form should be the submitted informed consent
                document, not the entire manuscript)
              </em>
            </p>
            <p>
              <strong>8. Curriculum Vitae</strong>
            </p>

            <p>
              Upon the receipt of the complete set of documents, depending on
              the risks involved, a{" "}
              <strong>
                maximum of 4 weeks is needed to process an expedited review,
              </strong>{" "}
              whereas{" "}
              <strong>
                6 weeks for a study needing full review by the board.
              </strong>
            </p>

            <p>
              Please be reminded that students/researchers{" "}
              <strong>cannot proceed with any form of data collection</strong>{" "}
              <em>(pilot testing included)</em>{" "}
              <strong>unless issued an ethical clearance</strong>.
            </p>
            <p></p>
          </div>
        </div>
      )}

      {modal3 && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="ir-modal-content">
            <h1 className="text-xl font-bold mb-10">
              FINAL Review (Final report form)
            </h1>
            <div className="require">
              <p>
                <strong>1. HAU-IRB FORM 3.7(A): Final Report Form</strong>{" "}
                <em>
                  (this signals the completion of the study and its acceptance
                  by the HAU-IRB).
                </em>
                This should be forwarded to the board not later than 8 weeks
                after the end of the study.
              </p>
            </div>
            <p></p>
          </div>
        </div>
      )}
    </Sidebar>
  );
}

export default Dashboard;
