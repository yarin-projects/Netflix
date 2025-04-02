import React from "react";

interface Props {
  className: any;
}

export const TranslatorIcon2 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 3.33333H10M6 2V3.33333M6.6988 9.66667C5.68055 8.61187 4.85382 7.371 4.27458 6M8.33333 12H13M7.33333 14L10.6667 7.33333L14 14M8.50073 3.33333C7.8554 7.18013 5.37979 10.4063 2 12.086"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
    </svg>
  );
};
