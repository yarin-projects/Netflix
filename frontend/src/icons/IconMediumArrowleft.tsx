import React from "react";

interface Props {
  className: any;
}

export const IconMediumArrowleft = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 12 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.6113 18.3885L10.1579 10L1.6113 1.6115"
        stroke="#448EF4"
        strokeLinecap="square"
        strokeWidth="2.17355"
      />
    </svg>
  );
};
