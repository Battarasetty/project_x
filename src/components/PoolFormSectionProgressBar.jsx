import React, { useState, useEffect } from "react";

const PoolFormSectionProgressBar = ({
  tokenHistory,
  poolPercentageLeftFromRedux,
}) => {
  const [progress, setProgress] = useState(100);
  const [segments, setSegments] = useState([]);

  const tokenColorsWithValues = {
    ETH: { color: "green", range: [0, 25] },
    BNB: { color: "blue", range: [26, 50] },
    SOL: { color: "red", range: [51, 75] },
    AVAX: { color: "purple", range: [76, 100] },
    XRP: { color: "orange", range: [101, 125] },
    USDT: { color: "pink", range: [126, 150] },
  };

  const calculateSegments = (tokenColors, tokenHistory, poolPercentageLeft) => {
    let remainingValue = poolPercentageLeft;
    let segments = [];

    if (tokenHistory.length > 0) {
      tokenHistory.forEach((entry) => {
        const { selectedToken, enteredValue } = entry;
        const tokenColor = tokenColors[selectedToken.name].color;
        const segmentValue = (enteredValue / 100) * poolPercentageLeft;
        segments.push({ color: tokenColor, value: segmentValue });
        remainingValue -= segmentValue;
      });
    }

    // If there is remaining value, add a segment with the default color (e.g., grey)
    if (remainingValue > 0) {
      segments.push({
        color: "#808080", // Use your desired default color code
        value: remainingValue,
      });
    }

    setSegments(segments);
  };

  useEffect(() => {
    setSegments([]);
    calculateSegments(
      tokenColorsWithValues,
      tokenHistory,
      poolPercentageLeftFromRedux
    );
  }, [tokenHistory, poolPercentageLeftFromRedux]);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setProgress((prevProgress) => {
        const newProgress = Math.max(prevProgress - 1, 0);

        if (newProgress > 0) {
          animationFrameId = requestAnimationFrame(animate);
        }

        return newProgress;
      });
    };

    // Check if there are any segments
    if (segments.length > 0) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [segments]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const strokeDasharray = `${(circumference * progress) / 100} ${circumference}`;
  const backgroundStrokeDasharray = `${circumference} ${circumference}`;

  const renderSegments = () => {
    let startAngle = -90;
    let paths = [];

    segments.forEach((segment, index) => {
      const { color, value } = segment;
      const segmentPercentage = (value / poolPercentageLeftFromRedux) * 100;
      const endAngle = startAngle + (360 * segmentPercentage) / 100;

      const innerRadius = radius - 5;
      const outerRadius = radius + radius * 0.12;

      const innerStartX =
        50 + Math.cos((startAngle * Math.PI) / 180) * innerRadius;
      const innerStartY =
        50 + Math.sin((startAngle * Math.PI) / 180) * innerRadius;
      const innerEndX = 50 + Math.cos((endAngle * Math.PI) / 180) * innerRadius;
      const innerEndY = 50 + Math.sin((endAngle * Math.PI) / 180) * innerRadius;

      const outerStartX =
        50 + Math.cos((startAngle * Math.PI) / 180) * outerRadius;
      const outerStartY =
        50 + Math.sin((startAngle * Math.PI) / 180) * outerRadius;
      const outerEndX = 50 + Math.cos((endAngle * Math.PI) / 180) * outerRadius;
      const outerEndY = 50 + Math.sin((endAngle * Math.PI) / 180) * outerRadius;

      const largeArcFlag = segmentPercentage > 50 ? 1 : 0;

      const pathData = `
        M ${innerStartX} ${innerStartY}
        A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${innerEndX} ${innerEndY}
        L ${outerEndX} ${outerEndY}
        A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 0 ${outerStartX} ${outerStartY}
        Z
      `;

      paths.push(
        <path key={index} d={pathData} fill={color} stroke="transparent" />
      );

      startAngle = endAngle;
    });

    return paths;
  };

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
          className="text-white font-bold text-center"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {`${poolPercentageLeftFromRedux.toFixed(0)}%`}
        </text>
      </svg>
    </div>
  );
};

export default PoolFormSectionProgressBar;
