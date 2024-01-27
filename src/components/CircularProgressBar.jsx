import React, { useState, useEffect } from "react";

const CircularProgressBar = ({ percentage, enteredValue, selectedToken }) => {
  const [progress, setProgress] = useState(0);

  const tokenColorsWithValues = {
    ETH: { color: "green", range: [0, 25] },
    BNB: { color: "blue", range: [26, 50] },
    SOL: { color: "red", range: [51, 75] },
    AVAX: { color: "purple", range: [76, 100] },
    XRP: { color: "orange", range: [101, 125] },
    USDT: { color: "pink", range: [126, 150] },
  };

  const calculateSegments = (tokenColors, enteredValue) => {
    let segments = [];
    let remainingValue = enteredValue;

    Object.keys(tokenColors).forEach((tokenName) => {
      const { color, range } = tokenColors[tokenName];
      const [minRange, maxRange] = range;

      if (remainingValue > 0) {
        const segmentValue = Math.min(remainingValue, maxRange - minRange);
        segments.push({ color, value: segmentValue });
        remainingValue -= segmentValue;
      }
    });

    return segments;
  };

  const segments = calculateSegments(tokenColorsWithValues, enteredValue);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setProgress((prevProgress) => {
        const newProgress = Math.min(prevProgress + 1, percentage);

        if (newProgress <= percentage) {
          animationFrameId = requestAnimationFrame(animate);
        }

        return newProgress;
      });
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [percentage]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const strokeDasharray = `${(circumference * progress) / 100} ${circumference}`;
  const backgroundStrokeDasharray = `${circumference} ${circumference}`;

  const renderSegments = () => {
    let startAngle = -90;
    let paths = [];

    segments.forEach((segment, index) => {
      const { color, value } = segment;
      const segmentPercentage = (value / enteredValue) * 100;
      const endAngle = startAngle + (360 * segmentPercentage) / 100;

      const startX = 50 + Math.cos((startAngle * Math.PI) / 180) * radius;
      const startY = 50 + Math.sin((startAngle * Math.PI) / 180) * radius;
      const endX = 50 + Math.cos((endAngle * Math.PI) / 180) * radius;
      const endY = 50 + Math.sin((endAngle * Math.PI) / 180) * radius;

      const largeArcFlag = segmentPercentage > 50 ? 1 : 0;

      const pathData = `
        M 50 50
        L ${startX} ${startY}
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
        Z
      `;

      paths.push(
        <path key={index} d={pathData} fill={color} stroke="transparent" />
      );

      startAngle = endAngle;
    });

    return paths;
  };

  const selectedTokenColor = tokenColorsWithValues[selectedToken]
    ? tokenColorsWithValues[selectedToken].color
    : "#000000"; // Default color if selectedToken is not found

  return (
    <div className="w-50 h-40 relative">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          className="stroke-current text-[#5864F3]"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={backgroundStrokeDasharray}
        />
        {renderSegments()}
        <text
          x="50"
          y="50"
          className={`text-${selectedTokenColor} font-bold text-center`}
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {`${percentage}%`}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
