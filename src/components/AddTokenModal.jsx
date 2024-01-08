import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import {
  AVAX,
  BNB,
  SOL,
  USDT,
  XRP,
  add_pool,
  etherum,
  plus_x,
} from "../assets";
import CircularProgressBar from "./CircularProgressBar";

const AddTokenModal = ({
  open,
  handleClose,
  onAddToken,
  initialPoolPercentage,
}) => {
  const [allocationPercentage, setAllocationPercentage] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState({
    name: "ETH",
    image: etherum,
  });

  const [poolPercentage, setPoolPercentage] = useState(
    initialPoolPercentage
  );

  // console.log(poolPercentage)

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 500,
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

  const handleInputChange = (e) => {
    setAllocationPercentage(e.target.value);
  };

  const handleDropdownClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleTokenSelect = (token) => {
    console.log(token)
    setSelectedToken(token);
    setDropdownOpen(false);
  };

  const tokenList = [
    { name: "ETH", fullName: "Ethereum", image: etherum },
    { name: "BNB", fullName: "Binance", image: BNB },
    { name: "SOL", fullName: "Solana", image: SOL },
    { name: "AVAX", fullName: "Avalanche", image: AVAX },
    { name: "XRP", fullName: "Xrp", image: XRP },
    { name: "USDT", fullName: "Tether", image: USDT },
  ];
  

  useEffect(() => {
    setPoolPercentage(initialPoolPercentage);
  }, [initialPoolPercentage]);

  // useEffect(() => {
  //   const enteredValue = parseFloat(allocationPercentage);
  //   if (!isNaN(enteredValue) && enteredValue >= 0) {
  //     setPoolPercentage((prevPercentage) => {
  //       const updatedPoolPercentageLeft = initialPoolPercentage - enteredValue;
  //       return updatedPoolPercentageLeft;
  //     });
  //   }
  // }, [allocationPercentage, initialPoolPercentage]);

  const handleAddToken = () => {
    const enteredValue = parseFloat(allocationPercentage);
    if (
      !isNaN(enteredValue) &&
      enteredValue >= 0 &&
      enteredValue <= poolPercentage
    ) {
      const newPercentage = poolPercentage - enteredValue;
      setPoolPercentage(newPercentage);
      setAllocationPercentage("");
      onAddToken(enteredValue, selectedToken, newPercentage); // Pass newPercentage instead of poolPercentage
    } else {
      console.error("Invalid input. Please enter a valid value.");
    }
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
              fontSize: "20px",
            }}
          >
            Add Token
          </Typography>
          <Typography id="modal-modal-description " sx={{ mt: 1 }}>
            <div
              className="flex flex-col items-center"
              style={{ borderTop: "1px solid #F1F2F5" }}
            >
              <div className="pb-2 mt-5 col-span-2 sm:col-span-1 relative">
                {/* Add Token */}
                <label
                  htmlFor="addToken"
                  className="ml-4 block text-xs text-[#ABB0C1]"
                >
                  Allowcation Percentage
                </label>
                <div className="relative">
                  <input
                    style={{ width: "420px" }}
                    type="text"
                    id="addToken"
                    name="addToken"
                    placeholder="Enter Your Desired Percentage %"
                    value={allocationPercentage}
                    onChange={handleInputChange}
                    className="text-sm px-4 py-4 mt-2 border bg-[#F1F2F5] rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <div
                    className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md"
                    style={{ display: isDropdownOpen ? "block" : "none" }}
                  >
                    {/* List of tokens */}
                    {tokenList.map((token) => (
                      <div
                        key={token.name}
                        className="flex items-center gap-2 text-xs px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleTokenSelect(token)}
                      >
                        <img
                          src={token.image}
                          alt=""
                          className="w-3 h-3 mr-2"
                        />
                        {token.name}
                      </div>
                    ))}
                  </div>
                  <div
                    className="absolute right-[10px] bottom-[10px] flex items-center gap-2 text-xs rounded-lg px-4 py-2 bg-[#ffffff] cursor-pointer focus:outline-none"
                    onClick={handleDropdownClick}
                  >
                    <img
                      src={selectedToken.image}
                      alt=""
                      className="w-3 h-3 mr-2"
                    />
                    {selectedToken.name}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 items-center justify-center mt-5 mb-5">
                <CircularProgressBar percentage={poolPercentage} />
                <p className="text-[12px] font-bold">Pool Percentage Left</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-3">
                <button
                  onClick={handleClose}
                  style={{ width: "210px" }}
                  className="px-6 py-3 bg-[#F1F2F5] rounded-md text-xs font-semibold focus:outline-none hover:bg-[#00000014]"
                >
                  Cancel
                </button>
                <button
                  style={{ width: "210px" }}
                  onClick={handleAddToken}
                  className="px-6 py-3 bg-[#5763F3] text-white rounded-md text-xs font-semibold focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </Typography>
        </Box>
      </div>
    </Modal>
  );
};

export default AddTokenModal;