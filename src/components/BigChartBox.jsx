import React, { useState } from "react";
import { Box, Typography, Switch, FormControlLabel } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { faker } from "@faker-js/faker";
import { getMainChartData, mainChartOptions } from "../constants/Data";
import { fuse, shock1 } from "../assets";

const BigChartBox = () => {
  const [chartData, setChartData] = useState(getMainChartData());

  const handleChangeTimeRange = (event) => {
    const newChartData = generateChartData(event.target.checked);
    setChartData(newChartData);
  };

  const generateChartData = (is24Hours) => {
    const labels = is24Hours
      ? Array.from({ length: 24 }, (_, i) => `${i}:00`)
      : Array.from({ length: 8 }, (_, i) => `${i * 3}:00`);
  
    const data = labels.map((label) => ({
      label,
      Views: faker.datatype.number(),
    }));
  
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

  return (
    <Box
      bg="white"
      boxShadow="0px 0px 12px rgba(0, 0, 0, 0.09)"
      border="1px solid #F1F2F5"
      borderRadius="8px"
      className="px-4 py-2 flex flex-col gap-1"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
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
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Views"
            stroke="#5763F3"
            dot={{ stroke: "#5763F3", strokeWidth: 2, r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BigChartBox;
