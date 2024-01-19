import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({ options, series, type, height }) => {
  return (
    <div className="flex items-center gap-5 donut-chart-container">
      <div className="donut-chart">
        <ReactApexChart options={options} series={series} type={type} height={height} />
      </div>
      <div className="flex items-center justify-between gap-5 donut-data">
        <div className="row">
          {options.labels.map((label, index) => (
            <div key={index} className="point" style={{ color: options.fill.colors[index] }}>
              • {label}
            </div>
          ))}
        </div>
        <div className="column">
          {series.map((data, index) => (
            <div key={index}>{data}%</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApexChart;