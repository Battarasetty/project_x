import React from "react";
import ChartComponent from "./ChartComponent";
import VolumeLeaderComponent from "./VolumeLeaderComponent";
import StatBox from "./StatBox";
import TrendingArticle from "./TrendingArticle";
import { Grid } from "@mui/material";
import StockChart from "../StockChart";

const HighlightComponentsContainer = ({ showHighlights, isPoolCreator }) => {
  return (
    <Grid container style={{ marginTop: 0, gap: "7px" }}>
      <Grid item xs={12} sm={6} md={isPoolCreator ? 4 : 5} style={{ flex: 1 }}>
        {/* First component - ChartComponent */}
        {showHighlights && (
          <div className="flex-grow">
            <ChartComponent />
            {/* <StockChart /> */}
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={isPoolCreator ? 4 : 5} style={{ flex: 1 }}>
        {/* Second component - TrendingArticle */}
        {showHighlights && (
          <div className="flex-grow">
            <TrendingArticle />
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={isPoolCreator ? 2 : 2.5} style={{ flex: 1 }}>
        {/* Third component - VolumeLeaderComponent */}
        {showHighlights && (
          <div className="flex-grow">
            <VolumeLeaderComponent />
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
