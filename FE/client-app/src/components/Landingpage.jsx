import { useState } from "react";
import { Container, Typography, Button, CircularProgress } from "@mui/material";
import HAUVID from "../assets/HAUVID.mp4";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const navigateto = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/Signin");
    }, 2000);
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <video
        src={HAUVID}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            color: "white",
            textAlign: "center",
            backgroundColor: "rgba(128, 0, 0, 0.8)",
            padding: "20px",
            borderRadius: "10px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontWeight: "bold", letterSpacing: "2px", mb: 3 }}
          >
            Welcome to HAUDOCS IRB Ethics Review!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontStyle: "italic",
              letterSpacing: "1px",
              lineHeight: "1.5",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          {isLoading ? (
            <CircularProgress sx={{ color: "white" }} />
          ) : (
            <Button
              onClick={navigateto}
              variant="contained"
              color="primary"
              sx={{
                mx: "auto",
                display: "block",
                borderRadius: "30px",
                padding: "10px 20px",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontSize: "1.2rem",
                boxShadow: "none",
                backgroundColor: "white",
                color: "rgba(128, 0, 0, 0.8)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            >
              Get started
            </Button>
          )}
        </Container>
      </div>
    </div>
  );
}

export default LandingPage;
