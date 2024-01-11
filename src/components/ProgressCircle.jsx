import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "UNI", value: 23.41, color: "#636EEF" }, // Blue
  { name: "SAND", value: 18.46, color: "#71C489" }, // Teal
  { name: "CAKE", value: 16.29, color: "#E4BB87" }, // Yellow
  { name: "EGOLD", value: 11.25, color: "#E07E66" }, // Orange
  { name: "GALA", value: 9.6, color: "#8347F3" }, // Teal
  { name: "VTHOFLR", value: 7.45, color: "#4046CD" }, // Yellow
  // { name: "Tablet", value: 5.35, color: "#FF5722" }, // Orange
];

const ProgressCircle = () => {
  return (
    <div className="flex mt-[8px]">
      <div className="pieChartBox h-full flex gap-6 items-center justify-between mr-[40px] ">
        <div className="chart flex items-center justify-center w-[180px] h-[180px]">
          <ResponsiveContainer width="99%" height={350}>
            <PieChart>
              <Tooltip
                contentStyle={{ background: "white", borderRadius: "5px" }}
              />
              <Pie
                data={data}
                innerRadius="70%"
                outerRadius="90%"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((item, index) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="options flex flex-col gap-2  justify-center text-base">
        {data.map((item) => (
          <div className="option flex gap-10 items-center" key={item.name}>
            <div className="flex items-center gap-2">
              <div
                className={`dot w-4 h-4 flex items-center rounded-full`}
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs">{item.name}</span>
            </div>
            <p className="text-xs text-right">{item.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressCircle;
