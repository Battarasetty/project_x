import React from "react";
import { Avatar, AvatarGroup, Stack } from "@mui/material";
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
} from "../assets";
const CoinAvatar = ({ src, alt }) => (
  <Avatar
    src={src}
    alt={alt}
    sx={{ width: "15px", height: "15px" }} 
    className="w-10 h-10 transition-transform transform hover:scale-110"
  />
);

const CoinAvatarGroup = () => {
  const coins = [
    { src: etherum, alt: "etherum" },
    { src: BNB, alt: "BNB" },
    { src: SOL, alt: "SOL" },
    { src: AVAX, alt: "Avax" },
    { src: XRP, alt: "Xrp" },
    { src: USDT, alt: "Usdt" },
    { src: DOT, alt: "Dot" },
    { src: DOGE, alt: "Doge" },
    { src: SHIBA, alt: "Shiba" },
    { src: LUNA, alt: "Luna" },
  ];

  return (
    <Stack spacing={2} className="flex justify-start items-start" >
      <AvatarGroup max={10} className="-space-x-2">
        {coins.map((coin, index) => (
          <CoinAvatar key={index} {...coin} />
        ))}
      </AvatarGroup>
    </Stack>
  );
};

export default CoinAvatarGroup;
