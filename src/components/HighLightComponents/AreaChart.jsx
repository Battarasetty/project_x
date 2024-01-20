import React from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = ({ series, numericalData, height }) => {
  const options = {
    series: [
      {
        name: "Stock Price",
        data: series,
      },
    ],
    chart: {
      type: "area",
      height: height,
      toolbar: {
        show: false,
      },
      foreColor: "#333",
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      background: "#f8f8f8",
      borderRadius: 8,
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 500,
        },
      },
      events: {
        mounted: function (chartContext, config) {
          const chart = chartContext.chart;

          if (chart) {
            // Custom scroll function to adjust visible x-axis range
            chart.updateOptions({
              xaxis: {
                min: numericalData[0],
                max: numericalData[numericalData.length - 1],
              },
            });
          }
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#5763F3"],
      type: "solid",
    },
    xaxis: {
      type: "numeric",
      labels: {
        style: {
          fontSize: "8px",
          fontFamily: "Montserrat, sans-serif",
        },
      },
      tickAmount: 10, // Adjust the number of ticks displayed
      tooltip: {
        enabled: false,
      },
      scrollbar: {
        enabled: true,
        offsetY: 1,
        show: true,
      },
    },
    yaxis: {
      opposite: false,
      labels: {
        formatter: function (value) {
          // Convert values to million (M) and add "$" symbol
          return "$" + value.toFixed(2) + "M";
        },
        style: {
          colors: "#5763F3",
          fontSize: "8px",
        },
      },
    },
    legend: {
      show: false,
    },
    annotations: {
      yaxis: [
        {
          y: 0,
          label: {
            text: "USD",
            position: "center",
            offsetY: 26,
            offsetX: -180,
            style: {
              fontSize: "12px",
              color: "black",
              border: "none",
            },
          },
          customClass: "no-border", // Add a custom class
        },
      ],
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
