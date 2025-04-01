import React from "react";

interface Props {
  className: any;
}

export const IconMediumSearch = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 36 32"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16.894"
        cy="10.6957"
        r="7.82609"
        stroke="white"
        strokeWidth="1.73913"
      />

      <path
        d="M27.7628 22L21.8031 15.9663"
        stroke="white"
        strokeWidth="1.73913"
      />
    </svg>
  );
};
