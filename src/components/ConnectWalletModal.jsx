import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { pool, portfolio } from "../assets";

const ConnectWalletModal = ({ open, handleClose, onPoolCreatorClick }) => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600, // Adjust the width to your desired value
    maxWidth: "90%", // Set a maximum width if needed
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
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
      <div className="">
        <div style={backdropStyle}></div>
        <Box sx={modalStyle}>
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

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              color: "#5763F3",
              textAlign: "center",
              fontWeight: "400",
              fontSize: "25px",
            }}
          >
            Choose any one to Proceed
          </Typography>
          <div id="modal-modal-description " sx={{ mt: 1 }}>
            <div
              className="flex items-center justify-between gap-5"
              style={{ borderTop: "1px solid #F1F2F5" }}
            >
              {/* Image Container 1 */}
              <div className="border rounded-md flex flex-col gap-5 flex-1 items-center p-5 cursor-pointer">
                <img
                  src={portfolio}
                  alt="portfolio"
                  className="w-[150px] h-[120px] object-contain"
                />
                <h1 className="text-[#838A9B] font-semibold mt-2">
                  Pool Participants
                </h1>
              </div>
              <div
                className=""
                style={{ borderLeft: "1px solid #F1F2F5", height: "250px" }}
              ></div>

              <div className="border rounded-md flex flex-1 flex-col gap-5 items-center p-5 cursor-pointer" onClick={onPoolCreatorClick}>
                <img
                  src={pool}
                  alt="pool"
                  className="w-[150px] h-[120px] object-contain"
                />
                <h1 className="text-[#838A9B] font-semibold mt-2">
                  Pool Creator
                </h1>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </Modal>
  );
};

export default ConnectWalletModal;
