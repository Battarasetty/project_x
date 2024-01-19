import React, { useState } from "react";
import { Box, Typography, Switch, FormControlLabel } from "@mui/material";
// import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
// import { getMainChartData, mainChartOptions } from "../../constants/Data";
import { fuse, shock1 } from "../../assets";
import AreaChart from "./AreaChart";
import CandlestickChart from "./CandlestickChart";

const ChartComponent = () => {
  // const [chartData, setChartData] = useState(getMainChartData());

  // const handleChangeTimeRange = (event) => {
  //   // Handle the switch button change here
  //   const newChartData = generateChartData(event.target.checked);
  //   setChartData(newChartData);
  // };

  const generateChartData = (is24Hours) => {
    // Modify this function to generate data based on the selected time range
    // For simplicity, let's generate random data for demonstration purposes
    const labels = is24Hours
      ? Array.from({ length: 24 }, (_, i) => `${i}:00`)
      : Array.from({ length: 8 }, (_, i) => `${i * 3}:00`);

    const data = {
      labels,
      datasets: [
        {
          label: "Views",
          data: Array.from({ length: labels.length }, () =>
            faker.datatype.number()
          ),
          backgroundColor: "#DDE0FD",
          animation: false,
        },
      ],
    };

    console.log("Main Chart Data:", data);
    return data;
  };

  const [selectedImage, setSelectedImage] = useState("shock1");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const [selectedOption, setSelectedOption] = useState("24H");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const [selectedValue, setSelectedValue] = useState("TVL");

  const handleOptionSelect = (option) => {
    setSelectedValue(option);
  };

  const seriesData = [
    90, 40, 65, 50, 100, 60, 150, 60, 125, 195, 150, 200, 190, 270, 230,
  ];

  const datesData = [
    "2022-01-01",
    "2022-01-02",
    "2022-01-03",
    "2022-01-04",
    "2022-01-05",
    "2022-01-06",
    "2022-01-07",
    "2022-01-08",
    "2022-01-09",
    "2022-01-10",
    "2022-01-11",
    "2022-01-12",
    "2022-01-13",
    "2022-01-14",
    "2022-01-15",
  ];

  const candlestickData = [
    { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
    { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
    { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
    { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
    { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
  ];

  const chartHeight = 200;


  return (
    <Box
      bg="white"
      boxShadow="0px 0px 12px rgba(0, 0, 0, 0.09)"
      border="1px solid #F1F2F5"
      borderRadius="8px"
      className="px-2 pt-2 flex flex-col"
      sx={{height: "250px"}}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <div className="flex items-center gap-[4px]">
          <div className="flex items-center justify-center gap-2 bg-[#F1F2F5] rounded-lg p-1">
            <h5
              className={`cursor-pointer text-[10px] font-semibold ${
                selectedValue === "TVL"
                  ? "bg-white rounded-lg p-0.5 text-black"
                  : "text-[#5D6880]"
              }`}
              onClick={() => handleOptionSelect("TVL")}
            >
              TVL
            </h5>
            <h5
              className={`cursor-pointer text-[10px] font-semibold ${
                selectedValue === "YLD"
                  ? "bg-white rounded-lg p-0.5 text-black"
                  : "text-[#5D6880]"
              }`}
              onClick={() => handleOptionSelect("YLD")}
            >
              YLD
            </h5>
          </div>
          <Typography
            variant="h6"
            color="#5763F3"
            sx={{ fontSize: "13px", fontWeight: "700" }}
          >
            $194,347,845.8
          </Typography>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div className="flex items-center justify-center gap-2 bg-[#F1F2F5] rounded-lg p-1">
            <img
              src={shock1}
              alt=""
              className={`w-4 h-4 ${
                selectedImage === "shock1" ? "bg-white rounded-lg p-0.5" : ""
              }`}
              onClick={() => handleImageClick("shock1")}
            />
            <img
              src={fuse}
              alt=""
              className={`w-4 h-4 ${
                selectedImage === "fuse" ? "bg-white rounded-lg p-0.5" : ""
              }`}
              onClick={() => handleImageClick("fuse")}
            />
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#F1F2F5] rounded-lg p-1">
            <h5
              className={`cursor-pointer text-[10px] font-semibold ${
                selectedOption === "24H"
                  ? "bg-white -lg p-0.5 text-black"
                  : "text-[#5D6880]"
              }`}
              onClick={() => handleOptionClick("24H")}
            >
              24H
            </h5>
            <h5
              className={`cursor-pointer text-[10px] font-semibold ${
                selectedOption === "7D"
                  ? "bg-white rounded-lg p-0.5 text-black"
                  : "text-[#5D6880]"
              }`}
              onClick={() => handleOptionClick("7D")}
            >
              7D
            </h5>
            <h5
              className={`cursor-pointer text-[10px] font-semibold ${
                selectedOption === "30D"
                  ? "bg-white rounded-lg p-0.5 text-black"
                  : "text-[#5D6880]"
              }`}
              onClick={() => handleOptionClick("30D")}
            >
              30D
            </h5>
            {/* <h5
              className={`cursor-pointer text-[10px] font-semibold ${
                selectedOption === "90D"
                  ? "bg-white rounded-lg p-0.5 text-black"
                  : "text-[#5D6880]"
              }`}
              onClick={() => handleOptionClick("90D")}
            >
              90D
            </h5> */}
            <h5
              className={`cursor-pointer text-[10px] font-semibold ${
                selectedOption === "ALL"
                  ? "bg-white rounded-lg p-0.5 text-black"
                  : "text-[#5D6880]"
              }`}
              onClick={() => handleOptionClick("ALL")}
            >
              ALL
            </h5>
          </div>
        </div>
      </Box>
      <Box>
        {selectedImage === "shock1" ? (
          <AreaChart series={seriesData} dates={datesData} height={chartHeight} />
        ) : (
          <CandlestickChart candlestickData={candlestickData} height={chartHeight} />
        )}

        {/* <Line options={mainChartOptions} data={chartData} /> */}
      </Box>
    </Box>
  );
};

export default ChartComponent;
