import React from "react";
import { IconSmallArrowdown1 } from ".././icons/IconSmallArrowdown1";

interface Props {
  type: "user-profile-menu" | "user-profile-picture";
  size: "small";
  className?: any;
}

export const SmallAvatar = ({ type, size, className }: Props): JSX.Element => {
  return (
    <div
      className={`relative ${type === "user-profile-menu" ? "w-[52px]" : "w-8"} ${type === "user-profile-menu" ? "flex" : ""} ${type === "user-profile-menu" ? "items-center" : ""} ${type === "user-profile-picture" ? "bg-cover" : ""} ${type === "user-profile-picture" ? "h-8" : ""} ${type === "user-profile-picture" ? "bg-[url(https://c.animaapp.com/m8yif6pjxD4azg/img/15-2.png)]" : ""} ${type === "user-profile-menu" ? "justify-between" : ""} ${type === "user-profile-picture" ? "bg-[50%_50%]" : ""} ${className}`}
    >
      {type === "user-profile-menu" && (
        <>
          <div className="relative w-8 h-8 bg-white rounded-sm overflow-hidden">
            <div className="h-8 bg-[url(https://c.animaapp.com/m8yif6pjxD4azg/img/15-2.png)] bg-cover bg-[50%_50%]" />
          </div>

          <IconSmallArrowdown1 className="!relative !w-2.5 !h-[5px]" />
        </>
      )}
    </div>
  );
};
