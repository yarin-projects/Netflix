import React from "react";

interface Props {
  size: "large" | "medium" | "small";
  type: "word" | "letter";
  className: any;
}

export const Logo = ({ size, type, className }: Props): JSX.Element => {
  return (
    <div
      className={`bg-cover bg-[50%_50%] relative ${size === "medium" ? "w-[148px]" : (size === "small") ? "w-[93px]" : type === "letter" ? "w-[22px]" : ""} ${size === "small" ? "h-[25px]" : "h-10"} ${type === "letter" ? "bg-[url(https://c.animaapp.com/m8yif6pjxD4azg/img/netflix-2015-n-logo-1.png)]" : "bg-[url(https://c.animaapp.com/m8yif6pjxD4azg/img/wordmark-3.png)]"} ${className}`}
    />
  );
};
