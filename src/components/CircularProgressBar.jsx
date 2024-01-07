import React, { useState, useEffect } from "react";

const CircularProgressBar = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setProgress((prevProgress) => {
        const newProgress = Math.min(prevProgress + 1, percentage);

        if (newProgress < percentage) {
          animationFrameId = requestAnimationFrame(animate);
        }

        return newProgress;
      });
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [percentage]);

  return (
    <div className="w-50 h-40 relative">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          className="stroke-current text-gray-300"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          className="stroke-current text-indigo-500 stroke-linecap-round"
          cx="50"
          cy="50"
          r="45"
          strokeDasharray={`${progress}, 100`}
          strokeWidth="10"
          fill="transparent"
        />
        <text
          x="50"
          y="50"
          className="text-indigo-500 font-bold text-center"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {`${progress}%`}
          {progress === 100 && (
            <foreignObject x="20" y="70" width="60" height="20">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                className="text-red-500"
                style={{ fontSize: "0.8em" }}
              >
                0.00
              </div>
            </foreignObject>
          )}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
