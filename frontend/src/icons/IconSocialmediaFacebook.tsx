import React from "react";

interface Props {
  className: any;
}

export const IconSocialmediaFacebook = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="30"
      viewBox="0 0 36 30"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.9214 16.398L24.5825 12.0874H20.4466V9.29002C20.4466 8.11069 21.0243 6.96117 22.8768 6.96117H24.7573V3.29128C24.7573 3.29128 23.0507 3 21.4192 3C18.0128 3 15.7864 5.06447 15.7864 8.80195V12.0874H12V16.398H15.7864V26.8188C16.5457 26.938 17.3238 27 18.1165 27C18.9092 27 19.6874 26.938 20.4466 26.8188V16.398H23.9214Z"
        fill="white"
      />
    </svg>
  );
};
