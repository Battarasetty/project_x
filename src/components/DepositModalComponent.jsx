import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Modal,
  Switch,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Polygon, USDT, info_main } from "../assets";
import ProgressCircle from "./ProgressCircle";

const DepositModalComponent = ({ open, handleClose }) => {
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

  const [selectedColumn, setSelectedColumn] = useState(null);

  const handleColumnClick = (column) => {
    setSelectedColumn(column);
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
            Deposit
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <div
              className="flex flex-col items-center "
              style={{ borderTop: "1px solid #F1F2F5" }}
            >
              {/* Switch Token Balance  */}
              <div className="flex items-center justify-center">
                <label
                  htmlFor="addToken"
                  className="ml-4 mt-3 block text-[10px] text-[#838A9B]"
                >
                  Select Fee Token XBR
                </label>
                <div className="flex items-center">
                  <FormControlLabel
                    labelPlacement="start"
                    control={
                      <Switch
                        sx={{
                          transform: "scale(0.6)", // Adjust the scale factor as needed
                          color: "#838A9B",
                          marginTop: "12px",
                        }}
                      />
                    }
                  />
                </div>
              </div>

              <div className="w-[100%]">
                <div className="">
                  {/* Top Container */}
                  <p className="text-[#ABB0C1] text-[12px] ml-4">
                    Enter Withdrawal Amount
                  </p>
                  <div className="flex items-center justify-between  text-sm px-4 py-1 mt-1 border-none bg-[#F1F2F5] rounded-lg focus:outline-none focus:border-blue-500">
                    <div className="flex flex-col mt-3">
                      <div className="font-semibold">1000.00</div>
                      <div className="flex items-center gap-3">
                        <p className="text-[8px] text-[#ABB0C1]">Balance</p>
                        <p className="text-[8px]">10,980.00</p>
                      </div>
                    </div>
                    <div className="p-2 flex items-center justify-between gap-5 bg-white rounded-lg">
                      <img src={USDT} alt="Token" className="w-5 h-5" />
                      <h2 className="text-[12px]">USDT</h2>
                    </div>
                  </div>
                </div>

                {/* Middle Container */}
                <div className="mt-3">
                  {/* Top Container */}
                  <div className="flex items-center gap-2">
                    <p className="text-[#ABB0C1] text-[12px] ml-4">
                      Asset Allocation
                    </p>
                    <img src={info_main} className="w-2 h-2" />
                  </div>
                  <div className="flex-col py-3 items-center text-sm mt-1 border-none bg-[#F1F2F5] rounded-lg focus:outline-none focus:border-blue-500">
                    <ProgressCircle />
                  </div>
                </div>

                {/* End Container */}
                <div className="flex flex-col items-center mt-3">
                  <div className="border-b border-[#F1F2F5] w-full py-2">
                    <div className="flex justify-between items-center">
                      <div className=" flex-col flex">
                        <div className="flex items-center gap-1">
                          <label className="text-[10px]">staking Fee*</label>
                          <img src={info_main} className="w-2 h-2" />
                        </div>
                        <p className="text-[8px] text-[#ABB0C1]">
                          (Fixed Price defined by XBR Protocol)
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-[8px] text-right">0.1%</div>
                        <div className="flex items-center gap-3">
                          <p className="text-[8px]">01.00</p>
                          <p className="text-[8px] text-[#ABB0C1]">USDT</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-none outline-none w-full text-[12px]"></div>
                  </div>

                  <div className="border-b border-[#F1F2F5] w-full py-2">
                    <div className="flex justify-between items-center">
                      <div className=" flex-col flex">
                        <div className="flex items-center gap-1">
                          <label className="text-[10px]">
                            Profit Sharing Fee*
                          </label>
                          <img src={info_main} className="w-2 h-2" />
                        </div>
                        <p className="text-[8px] text-[#ABB0C1]">
                          (Price defined by Pool Creator as Royalty Fee)
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-[8px] text-right">5%</div>
                        <div className="flex items-center gap-3">
                          <p className="text-[8px]">14.3935</p>
                          <p className="text-[8px] text-[#ABB0C1]">USDT</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-none outline-none w-full text-[12px]"></div>
                  </div>

                  <div className="border-b border-[#F1F2F5] w-full py-2">
                    <div className="flex justify-between items-center">
                      <div className=" flex-col flex">
                        <div className="flex items-center gap-1">
                          <label className="text-[10px]">Total Amount*</label>
                          <img src={info_main} className="w-2 h-2" />
                        </div>
                        <p className="text-[8px] text-[#ABB0C1]">
                          (Calculation of all the above)
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-[8px] text-right">10001.00</div>
                        <p className="text-[8px] text-right text-[#ABB0C1]">
                          USDT
                        </p>
                      </div>
                    </div>
                    <div className="border-none outline-none w-full text-[12px]"></div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-3">
                <button
                  style={{ width: "210px" }}
                  className="px-6 py-3 bg-[#F1F2F5] rounded-md text-xs font-semibold focus:outline-none hover:bg-[#00000014]"
                >
                  Approve
                </button>
                <button
                  onClick={handleClose}
                  style={{ width: "210px" }}
                  className="px-6 py-3 bg-[#5763F3] text-white rounded-md text-xs font-semibold focus:outline-none"
                >
                  Deposit
                </button>
              </div>
            </div>
          </Typography>
        </Box>
      </div>
    </Modal>
  );
};

export default DepositModalComponent;
