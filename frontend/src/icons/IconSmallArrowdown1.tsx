import React from "react";

interface Props {
  className: any;
}

export const IconSmallArrowdown1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="5"
      viewBox="0 0 10 5"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M0 0L5 5L10 0H0Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
};
