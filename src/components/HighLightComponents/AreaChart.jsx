import React from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = ({ series, dates, height }) => {
  const options = {
    series: [
      {
        name: "STOCK ABC",
        data: series,
      },
    ],
    chart: {
      type: "area",
      height: height,
      toolbar: {
        show: false, // Hide toolbar with zoom buttons
      },
      foreColor: "#333", // Color of text on the chart
      margin: { top: 10, right: 0, bottom: 0, left: 0 }, // Remove padding
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2, // Adjust the width of the line
    },
    fill: {
      colors: ["#DBDEFB"], // Set the color of the chart
      type: "solid",
    },
    xaxis: {
      labels: {
        style: {
          fontSize: "10px", // Adjust the font size of x-axis labels
        },
      },
    },
    yaxis: {
      opposite: false, // Place y-axis labels on the left
      labels: {
        style: {
          colors: "#333", // Color of y-axis labels
        },
      },
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="area"
      height={height}
    />
  );
};

export default AreaChart;
