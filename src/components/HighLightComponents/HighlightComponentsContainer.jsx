import React from "react";
import ChartComponent from "./ChartComponent";
import VolumeLeaderComponent from "./VolumeLeaderComponent";
import StatBox from "./StatBox";
import TrendingArticle from "./TrendingArticle";
import { Grid } from "@mui/material";

const HighlightComponentsContainer = ({ showHighlights }) => {
  console.log(showHighlights)
  return (
    <Grid container style={{ marginTop: 0, gap: "16px" }}>
      <Grid item xs={12} sm={6} md={4} style={{ flex: 1 }}>
        {/* First component - ChartComponent */}
        {showHighlights && (
          <div className="flex-grow">
            <ChartComponent />
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{ flex: 1 }}>
        {/* Second component - TrendingArticle */}
        {showHighlights && (
          <div className="flex-grow">
            <TrendingArticle />
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={2} style={{ flex: 1 }}>
        {/* Third component - VolumeLeaderComponent */}
        {showHighlights && (
          <div className="flex-grow">
            <VolumeLeaderComponent />
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={2} style={{ flex: 1 }}>
        {/* Fourth component - StatBox */}
        {showHighlights && (
          <div className="flex-grow">
            <StatBox />
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default HighlightComponentsContainer;
