import React, { useState, useEffect, useCallback } from "react";

const intervalTime = 50; // 50ms update interval
const radius = 40;
const centerX = 50;
const centerY = 50;

const CircularProgressTimer = ({
  isRunning,
  handleIsRunning,
  duration = 4000,
}: {
  isRunning: boolean;
  handleIsRunning: (v: boolean) => void;
  duration?: number;
}) => {
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    if (!isRunning) return;
    setPercentage(0);
    const interval = setInterval(() => {
      setPercentage((prev) => {
        const newPercentage = prev + (100 * intervalTime) / duration;
        if (newPercentage >= 100) {
          clearInterval(interval);
          setTimeout(() => handleIsRunning(false), 0);
          return 100;
        }
        return newPercentage;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isRunning, handleIsRunning, duration]);

  const calculatePath = useCallback((percent: number): string => {
    const radians = (percent / 100) * 2 * Math.PI;
    const endX = centerX + radius * Math.sin(radians);
    const endY = centerY - radius * Math.cos(radians);
    const largeArcFlag = percent > 50 ? 1 : 0;

    return `M${centerX},${
      centerY - radius
    } A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <svg viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#E0E0E0"
          strokeWidth="12"
        />
        {percentage > 0 && (
          <path
            d={calculatePath(percentage)}
            fill="none"
            className="stroke-green-250"
            strokeWidth="12"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
};

export default CircularProgressTimer;
