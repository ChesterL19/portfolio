"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Clock() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [savedTimes, setSavedTimes] = useState([]);
  const [animateBackground, setAnimateBackground] = useState(false);

  const intervalRef = useRef(null);

  const formatTime = (sec) => {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, "0");
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const secs = String(sec % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  // Timer logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // 🎉 Trigger background animation at 10 minutes
  useEffect(() => {
    if (seconds === 600) {
      setAnimateBackground(true);
      setTimeout(() => setAnimateBackground(false), 3000);
    }
  }, [seconds]);

  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setSavedTimes((prev) => [formatTime(seconds), ...prev]);
    }
  };

  const handleReset = () => {
    if (isRunning) {
      setIsRunning(false);
    }
    setSavedTimes((prev) => [formatTime(seconds), ...prev]);
    setSeconds(0);
  };

  return (
    <div
      className={`w-[320px] rounded-lg p-4 shadow-2xl transition-all duration-700
      ${animateBackground ? "bg-gradient-to-r from-green-400 via-yellow-400 to-pink-500 animate-pulse" : "bg-[#1e1e1e]"}`}
    >
      {/* Timer Display */}
      <div className="flex  pl-12  text-5xl font-mono text-right mb-6 text-[#00FF94]">
        {formatTime(seconds)}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <button
          onClick={handleReset}
          className="bg-[#333] hover:bg-[#444] text-white py-3 rounded-md shadow-inner"
        >
          Reset
        </button>
        <button
          onClick={() => setIsRunning(true)}
          className="bg-[#1a73e8] hover:bg-[#1558b0] text-white py-3 rounded-md shadow-inner"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-[#d93025] hover:bg-[#b3261e] text-white py-3 rounded-md shadow-inner"
        >
          Stop
        </button>
      </div>

      {/* Saved Times */}
      <div className="bg-[#111] rounded-md p-2 max-h-40 overflow-y-auto">
        <ul className="space-y-1 text-sm font-mono">
          {savedTimes.map((time, i) => (
            <li
              key={i}
              className="border-b border-white/10 pb-1 text-right text-[#ccc]"
            >
              {time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
