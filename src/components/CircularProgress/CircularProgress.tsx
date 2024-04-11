import React from "react";

const CircularProgress = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="50"
      viewBox="0 0 49 50"
      fill="none"
      className={`animate-spin`}
    >
      <circle
        cx="24"
        cy="25"
        r="23.5"
        stroke="white"
        stroke-opacity="0.2"
        stroke-dasharray="2 2"
      />
      <path
        d="M24 49C37.2548 49 48 38.2548 48 25C48 11.7452 37.2548 1 24 1"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CircularProgress;
