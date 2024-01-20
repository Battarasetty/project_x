// CandlestickChart.jsx
import React from "react";
import ApexCharts from "react-apexcharts";

const CandlestickChart = ({ candlestickData, numericalData, height }) => {
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
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#00B746", // Green color for upward candles
          downward: "#FF4560", // Red color for downward candles
        },
        wick: {
          useFillColor: true, // Fill the wick with the same color as the candle
        },
        rangeColors: {
          upward: "#00B746", // Adjust color for upward candles
          downward: "#FF4560", // Red color for downward candles
        },
      },
    },
    xaxis: {
      type: "numeric",
      labels: {
        style: {
          fontSize: "10px", // Adjust the font size of x-axis labels
          align: "right", // Align x-axis labels to the right
        },
      },
      categories: numericalData, // Set x-axis categories
      tickAmount: 20, // Adjust the number of ticks on the x-axis
      tooltip: {
        enabled: true,
      },
      axisBorder: {
        show: true,
        color: '#999'
      },
      axisTicks: {
        show: true,
        color: '#999'
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
