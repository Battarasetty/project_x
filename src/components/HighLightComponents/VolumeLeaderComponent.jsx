import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";
import {
  AVAX,
  BNB,
  Bigli,
  DOGE,
  DOT,
  LUNA,
  SHIBA,
  SOL,
  USDT,
  XRP,
  etherum,
} from "../../assets";
import CoinAvatarGroup from "../CoinAvatarGroup";

const VolumeLeaderComponent = ({ poolData }) => {
  const { title, coinData, coinLabels, apy, volume, totalPoolValue, btnText } = poolData;

  return (
    <Box
      bg="white"
      boxShadow="0px 0px 12px rgba(0, 0, 0, 0.09)"
      border="1px solid #F1F2F5"
      borderRadius="8px"
      className="px-3 pt-3 pb-2 flex flex-col gap-1"
      sx={{ height: "250px", width: "240px" }}
    >
      <div className="bg-[#DDE0FD] shadow-md rounded-lg p-0.5 flex items-center justify-center gap-1">
        <img src={Bigli} alt="Shock" className="w-2 h-3 opacity-100" />
        <span className="text-[#5763F3] text-[12px] opacity-100 max-w-full truncate">
          {title}
        </span>
      </div>

      <div className="mt-1">
        <div className="flex gap-2 flex-col">
          <div className="flex flex-col items-start mt-5">
            <CoinAvatarGroup coinData={coinData} />
            <p
              className="text-[10px] w-[155px] text-[#000000] font-semibold ml-1 mt-2"
              style={{ width: "155px" }}
            >
              {coinLabels}
            </p>
          </div>

          <div className="flex justify-center border-t border-b pt-1 pb-1 ">
            <div className="flex items-center gap-1 justify-center mr-2 mt-1.5">
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                {apy}
              </p>
              <p className="text-[12px] text-[#838A9B]">APY</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-end text-[8px]">
                <p className="ml-5" style={{ fontWeight: "bold" }}>{volume}:</p>
                <p>Volume</p>
              </div>
              <div className="text-[7px] flex items-center justify-end">
                <p className="ml-2" style={{ fontWeight: "bold" }}>{totalPoolValue}:</p>
                <p>Total Pool Value</p>
              </div>
            </div>
          </div>
          <button
            className="mt-[15px] border text-[8px] border-[#5763F3] rounded-lg text-[#5763F3] hover:bg-[#5763F3] hover:text-white px-6 py-2 ml-auto mr-auto"
            style={{ fontWeight: "semibold", width: "130px", fontSize: "10px" }}
          >
            {btnText}
          </button>
        </div>
      </div>

      <div></div>
    </Box>
  );
};

export default VolumeLeaderComponent;

