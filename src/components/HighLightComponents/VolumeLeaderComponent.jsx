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

const VolumeLeaderComponent = () => {
  const dummyCoinData = [
    { src: etherum, alt: "etherum", percentage: 15 },
    { src: BNB, alt: "BNB", percentage: 15 },
    { src: SOL, alt: "SOL", percentage: 15 },
    { src: AVAX, alt: "Avax", percentage: 15 },
    { src: XRP, alt: "Xrp", percentage: 15 },
    { src: USDT, alt: "Usdt", percentage: 15 },
    { src: DOT, alt: "Dot", percentage: 2 },
    { src: DOGE, alt: "Doge", percentage: 2 },
    { src: SHIBA, alt: "Shiba", percentage: 2 },
    { src: LUNA, alt: "Luna", percentage: 2 },
  ];
  return (
    <Box
      bg="white"
      boxShadow="0px 0px 12px rgba(0, 0, 0, 0.09)"
      border="1px solid #F1F2F5"
      borderRadius="8px"
      className="px-3 pt-3 pb-2 flex flex-col gap-1"
    >
      <div className="bg-[#DDE0FD] shadow-md rounded-lg p-0.5 flex items-center justify-center gap-1">
        <img src={Bigli} alt="Shock" className="w-2 h-3 opacity-100" />
        <span className="text-[#5763F3] text-[12px] opacity-100 max-w-full truncate">
          Highest Volume Pool
        </span>
      </div>

      <div className="mt-4">
        <div className="flex gap-1 flex-col">
          <div className="flex flex-col gap-1 items-start">
            <CoinAvatarGroup coinData={dummyCoinData} />
            <p
              className="text-[8px] text-[#000000] font-semibold ml-1"
              style={{ width: "128px" }}
            >
              ETH-BNB-SOL-AVAX-XRP-USDT-DOT-DOGE-SHIBA-LUNA
            </p>
          </div>

          <div className="flex justify-end border-t border-b mt-1 pt-1 pb-1">
            <div className="flex items-center gap-1 justify-center mr-2">
              <p
                style={{
                  fontWeight: "semibold",
                  fontSize: "15px",
                }}
              >
                225.01%
              </p>
              <p className="text-[12px] text-[#838A9B]">APY</p>
            </div>

            <div>
              <div className="flex items-center justify-end text-[6px]">
                <p style={{ fontWeight: "bold" }}>$634,928.98:</p>
                <p>Volume</p>
              </div>
              <div className="text-[6px] flex items-center justify-end">
                <p style={{ fontWeight: "bold" }}>$235.03m:</p>
                <p>Total Pool</p>
                Value
              </div>
            </div>
          </div>
          <button
            className="mt-2 border text-[8px] border-[#5763F3] rounded-lg text-[#5763F3] hover:bg-[#5763F3] hover:text-white px-2 py-2 ml-auto mr-auto"
            style={{ fontWeight: "semibold", width: "100px", fontSize: "10px" }}
          >
            Let's Earn
          </button>
        </div>
      </div>

      <div></div>
    </Box>
  );
};

export default VolumeLeaderComponent;
