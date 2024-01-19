import React from "react";
import ApexCharts from "react-apexcharts";

const CandlestickChart = ({ candlestickData, height }) => {
  const options = {
    series: [
      {
        data: candlestickData,
      },
    ],
    chart: {
        type: "candlestick",
        height: height,
        toolbar: {
          show: false, // Hide toolbar with zoom buttons
        },
        foreColor: "#333", // Color of text on the chart
        margin: { top: 0, right: 0, bottom: 0, left: 0 }, // Remove padding
      },
    // title: {
    //   text: "Candlestick Chart",
    //   align: "left",
    // },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#DBDEFB", // Color of upward candles
          downward: "#008FFB", // Color of downward candles
        },
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          fontSize: "10px", // Adjust the font size of x-axis labels
          align: "right", // Align x-axis labels to the right
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    legend: {
      show: false, // Hide legend
    },
  };

  return (
    <ApexCharts
      options={options}
      series={options.series}
      type="candlestick"
      height={height}
    />
  );
};

export default CandlestickChart;
