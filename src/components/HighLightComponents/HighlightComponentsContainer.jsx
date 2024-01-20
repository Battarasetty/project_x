import React from "react";
import ChartComponent from "./ChartComponent";
import VolumeLeaderComponent from "./VolumeLeaderComponent";
import StatBox from "./StatBox";
import TrendingArticle from "./TrendingArticle";
import AreaChart from "./AreaChart";
import { Grid } from "@mui/material";
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
const HighlightComponentsContainer = ({ showHighlights, isPoolCreator }) => {
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

  const poolDataArray = [
    {
      title: "Highest Volume Pool",
      coinData: dummyCoinData,
      coinLabels: "ETH-BNB-SOL-AVAX-XRP-USDT-DOT-DOGE-SHIBA-LUNA",
      apy: "225.01%",
      volume: "$634,928.98",
      totalPoolValue: "$235.03m",
      btnText: "Let's Earn",
    },
  ];

  return (
    <Grid container style={{ marginTop: 0, gap: "7px" }}>
      <Grid item xs={12} sm={6} md={isPoolCreator ? 4 : 5} >
        {/* First component - ChartComponent */}
        {showHighlights && (
            <ChartComponent />
          )}
      </Grid>
      <Grid item xs={12} sm={6} md={isPoolCreator ? 4 : 5} >
        {/* Second component - TrendingArticle */}
        {showHighlights && (
          <div className="flex-grow">
            <TrendingArticle />
          </div>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={isPoolCreator ? 2 : 3}
      >
        {showHighlights && (
          <div className="flex-grow">
            {poolDataArray.map((poolData, index) => (
              <VolumeLeaderComponent key={index} poolData={poolData} />
            ))}
          </div>
        )}
      </Grid>
      {isPoolCreator && (
        <Grid item xs={12} sm={6} md={2} style={{ flex: 1 }}>
          {/* Fourth component - StatBox */}
          {showHighlights && (
            <div className="flex-grow ">
              <StatBox />
            </div>
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default HighlightComponentsContainer;
