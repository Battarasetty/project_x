import React from "react";
import { Box } from "@mui/material";
import { Arrow, Logo, currentCircle, defaultCircle } from "../../assets";

const StatBox = () => {
  const reducedImageSize = "40px"; // Set your desired size
  const reducedFontSize = "7px"; // Set your desired font size

  return (
    <Box
    borderRadius="8px"
    border="1px solid #F1F2F5"
      className="px-3 pt-3 pb-2 flex flex-col gap-1"
      sx={{ backgroundColor: "#F1F2F5", boxShadow: "0px 0px 12px #F1F2F5" }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-semibold text-[#000000]">
          Be on the top
        </h3>
        <span className="flex items-center gap-0.05 text-[#5763F3] text-[8px] font-normal">
          more <img src={Arrow} alt="" className="ml-1 w-2 h-2" />
        </span>
      </div>
      <div className="flex items-center">
        <img src={Logo} className="w-[120px] h-[130px]" alt="Logo" />
        <div
          style={{
            color: "#9124FD",
            display: "flex",
            flexDirection: "column",
            height: reducedImageSize,
            marginLeft: "3px",
            fontSize: reducedFontSize,
            marginBottom: "65px",
            fontWeight: "600",
          }}
        >
          <div>NOW</div>
          <div>SIMPLE</div>
          <div>ACHIEVE</div>
          <div>YOUR</div>
          <div>FINANCIAL</div>
          <div>FREEDOM</div>
          <div>WITH XBR</div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <img src={defaultCircle} alt="Point" className="w-2 h-2 mx-1" />
        <img src={currentCircle} alt="Point" className="w-2 h-2 mx-1" />
        <img src={defaultCircle} alt="Point" className="w-2 h-2 mx-1" />
      </div>
    </Box>
  );
};

export default StatBox;
