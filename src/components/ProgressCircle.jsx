import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "UNI", percentage: 23.41, UsdtValue: 300.41, color: "#636EEF" }, // Blue
  { name: "SAND", percentage: 18.46, UsdtValue: 300.41, color: "#71C489" }, // Teal
  { name: "CAKE", percentage: 16.29, UsdtValue: 300.41, color: "#E4BB87" }, // Yellow
  { name: "EGOLD", percentage: 11.25, UsdtValue: 300.41, color: "#E07E66" }, // Orange
  { name: "GALA", percentage: 9.6, UsdtValue: 300.41, color: "#8347F3" }, // Teal
  { name: "FLR", percentage: 7.45, UsdtValue: 300.41, color: "#4046CD" }, // Yellow
];

const ProgressCircle = ({ isDeposit }) => {
  console.log(isDeposit)
  return (
    <div className="flex">
      <div className="pieChartBox h-full flex gap-6 items-center justify-between mr-[40px] ">
        <div className="chart flex items-center justify-center w-[180px] h-[180px]">
          <ResponsiveContainer width="90%" height={350}>
            <PieChart>
              <Tooltip
                contentStyle={{ background: "white", borderRadius: "5px" }}
              />
              <Pie
                data={data}
                innerRadius="70%"
                outerRadius="90%"
                paddingAngle={5}
                dataKey="percentage"
              >
                {data.map((item, index) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="options flex flex-col gap-3 justify-center text-base">
        <div
          className="option flex items-center justify-around gap-5"
          style={{ borderBottom: isDeposit ? "1px solid #D0D3DD" : "none" }}
        >
          {isDeposit && (
            <div className="text-xs mb-2 text-[#D0D3DD]">Asset</div>
          )}
          {isDeposit && (
            <div className="text-xs mb-2 text-[#D0D3DD]">Percentage %</div>
          )}
          {isDeposit && <div className="text-xs mb-2 text-[#D0D3DD]">USDT</div>}
        </div>
        {data.map((item) => (
          <div
            className="option flex items-center justify-between gap-5 "
            key={item.name}
          >
            <div className="flex items-center gap-2">
              <div
                className={`dot w-2 h-2 flex items-center rounded-full`}
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs">{item.name}</span>
            </div>
            <div className="text-xs text-right flex items-center justify-center">
              {item.percentage}%
            </div>
            {isDeposit && (
              <div className="text-xs text-right">{item.UsdtValue}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressCircle;
