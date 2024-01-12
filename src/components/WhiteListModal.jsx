import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

const WhiteListModal = ({ open, handleClose, title, content }) => {
  // console.log(content);
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    maxWidth: "90%",
    bgcolor: "#fff", // Background color
    borderRadius: "8px", // Rounded corners
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Box shadow
    p: 4,
    zIndex: 1300,
  };

  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: 1200,
    backdropFilter: "blur(8px)",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <div style={backdropStyle}></div>
        <Box sx={modalStyle}>
          {handleClose && (
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
                background: "none",
                border: "none",
                outline: "none",
              }}
            >
              <CloseIcon />
            </button>
          )}

          {title && (
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "#5763F3",
                textAlign: "center",
                fontWeight: "600",
                fontSize: "25px",
                marginBottom: "20px", // Add spacing to the bottom
              }}
            >
              {title}
            </Typography>
          )}

          <div className="text-[black] bg-[#5763F3] rounded-lg p-3" style={{ color: "black", fontSize: "16px", lineHeight: "1.5" }}>
            {content}
          </div>
        </Box>
      </div>
    </Modal>
  );
};

export default WhiteListModal;
