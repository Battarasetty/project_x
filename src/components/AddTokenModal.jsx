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
  info,
  plus_x,
} from "../assets";
import CircularProgressBar from "./CircularProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { setPoolPercentageLeft } from "../redux/poolFormSection/poolFormSectionSlice";

const AddTokenModal = ({
  open,
  handleClose,
  onAddToken,
  poolPercentageValue,
  tokenAllocations,
}) => {
  const [allocationPercentage, setAllocationPercentage] = useState("");
  const [currentPercentage, setCurrentPercentage] =
    useState(poolPercentageValue);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState({
    name: "ETH",
    image: etherum,
  });

  useEffect(() => {
    // console.log("currentPercentage:", currentPercentage);
    // Update the local state when initialPoolPercentage changes
    setCurrentPercentage(poolPercentageValue);
  }, [poolPercentageValue]);

  // console.log(currentPercentage);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "10px",
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
    const enteredValue = parseFloat(e.target.value);
    const roundedValue = Math.round(enteredValue * 100) / 100;
    setAllocationPercentage(roundedValue.toString());

    if (
      !isNaN(enteredValue) &&
      roundedValue >= 0 &&
      roundedValue <= poolPercentageValue
    ) {
      const newPercentage =
        Math.round((poolPercentageValue - roundedValue) * 100) / 100;
      setCurrentPercentage(newPercentage);
    }
  };

  const handleDropdownClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleTokenSelect = (token) => {
    setSelectedToken(token);

    // If the selected token already has an allocation, pre-fill the input
    const existingTokenAllocation = tokenAllocations.find(
      (allocation) => allocation.name === token.name
    );

    if (existingTokenAllocation) {
      setAllocationPercentage(existingTokenAllocation.value.toString());
    }

    setDropdownOpen(false);
  };

  const tokenList = [
    { name: "ETH", fullName: "Ethereum", image: etherum, color: "green" },
    { name: "BNB", fullName: "Binance", image: BNB, color: "blue" },
    { name: "SOL", fullName: "Solana", image: SOL, color: "red" },
    { name: "AVAX", fullName: "Avalanche", image: AVAX, color: "purple" },
    { name: "XRP", fullName: "Xrp", image: XRP, color: "orange" },
    { name: "USDT", fullName: "Tether", image: USDT, color: "pink" },
  ];

  const handleAddToken = () => {
    const enteredValue = parseFloat(allocationPercentage);

    if (
      !isNaN(enteredValue) &&
      enteredValue >= 0 &&
      enteredValue <= poolPercentageValue
    ) {
      const newPercentage = poolPercentageValue - enteredValue;
      // console.log("newPercentage:", newPercentage);
      setCurrentPercentage(newPercentage);
      onAddToken(enteredValue, selectedToken, newPercentage);
      setAllocationPercentage(""); // Clear input after adding token
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
          <div id="modal-modal-description " sx={{ mt: 1 }}>
            <div
              className="flex flex-col items-center"
              style={{ borderTop: "1px solid #F1F2F5" }}
            >
              <div className="pb-2 mt-5 col-span-2 sm:col-span-1 relative">
                {/* Add Token */}
                <label className="ml-4 block text-xs text-[#ABB0C1]">
                  Allocation Percentage
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
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 mr-3 bg-white border rounded-lg shadow-md">
                      {/* List of tokens */}
                      {tokenList.map((token) => (
                        <div
                          key={token.name}
                          className="flex items-center gap-2 text-xs px-2 py-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => handleTokenSelect(token)}
                        >
                          <img
                            src={token.image}
                            alt=""
                            className="w-5 h-5 mr-2"
                          />
                          {token.name}
                        </div>
                      ))}
                    </div>
                  )}
                  <div
                    className="absolute right-[10px] bottom-[10px] flex items-center gap-2 text-xs rounded-lg px-4 py-2 bg-[#ffffff] cursor-pointer focus:outline-none"
                    onClick={handleDropdownClick}
                  >
                    <img
                      src={selectedToken.image}
                      alt=""
                      className="w-5 h-5 mr-2"
                    />
                    {selectedToken.name}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 items-center justify-center mt-5 mb-5">
                <CircularProgressBar percentage={currentPercentage} />
                <div className="flex items-center gap-2 text-[12px] font-bold">
                  Pool Percentage Left
                  <img src={info} alt="" className="w-2 h-2" />
                </div>{" "}
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
          </div>
        </Box>
      </div>
    </Modal>
  );
};

export default AddTokenModal;
