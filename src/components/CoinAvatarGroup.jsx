import React from "react";
import { Avatar, AvatarGroup, Stack } from "@mui/material";

const CoinAvatar = ({ src, alt }) => (
  <Avatar
    src={src}
    alt={alt}
    sx={{ width: "15px", height: "15px" }}
    className="w-10 h-10 transition-transform transform hover:scale-110"
  />
);

const CoinAvatarGroup = ({ coinData }) => {
  // Ensure that coinData is an array
  const coins = Array.isArray(coinData) ? coinData : [];

  // Sort coins based on percentage in descending order
  const sortedCoins = coins.sort((a, b) => b.percentage - a.percentage);

  // Calculate the total percentage
  const totalPercentage = sortedCoins.reduce(
    (acc, coin) => acc + (coin.percentage || 0),
    0
  );

  return (
    <Stack spacing={2} className="flex justify-start items-start">
      <AvatarGroup max={totalPercentage} className="-space-x-2">
        {sortedCoins.map((coin, index) => (
          <CoinAvatar
            key={index}
            src={coin.src}
            alt={coin.alt}
            style={{
              opacity: (coin.percentage || 0) / 100,
            }}
          />
        ))}
      </AvatarGroup>
    </Stack>
  );
};

export default CoinAvatarGroup;
