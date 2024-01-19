import React, { useState } from "react";
import { Avatar, AvatarGroup, Stack, Button } from "@mui/material";

const CoinAvatar = ({ src, alt }) => (
  <Avatar
    src={src}
    alt={alt}
    sx={{ width: "15px", height: "15px" }}
    className="w-10 h-10 transition-transform transform hover:scale-110"
  />
);

const CoinAvatarGroup = ({ coinData }) => {
  const [showAll, setShowAll] = useState(false);

  // Ensure that coinData is an array
  const coins = Array.isArray(coinData) ? coinData : [];

  // Sort coins based on percentage in descending order
  const sortedCoins = coins.sort((a, b) => b.percentage - a.percentage);

  // Calculate the total percentage
  const totalPercentage = sortedCoins.reduce(
    (acc, coin) => acc + (coin.percentage || 0),
    0
  );

  const visibleCoins = showAll ? sortedCoins : sortedCoins.slice(0, 7);

  return (
    <Stack spacing={2} className="flex justify-start items-start">
      <div className="flex items-center relative">
        <AvatarGroup max={totalPercentage} className="-space-x-2">
          {visibleCoins.map((coin, index) => (
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
        {coins.length > 7 && !showAll && (
          <Button
            onClick={() => setShowAll(true)}
            variant="text"
            className="rounded-full p-1 absolute left-[-20px]"
          >
            +{coins.length - 7}
          </Button>
        )}
      </div>
    </Stack>
  );
};

export default CoinAvatarGroup;
