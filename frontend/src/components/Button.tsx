import React from "react";

interface ButtonProps {
  onClick?: () => void;
  type: "sign-up" | "sign-in" | "sign-out" | "forgot-password" | "reset-password";
  children?: React.ReactNode;
  size: "large" | "small";
  state: "default";
  className?: any;
  divClassName?: any;
}

export const Button = ({onClick, children}: ButtonProps): JSX.Element => {
  return (
    <button className="cursor-pointer all-[unset] box-border flex flex-col w-[77px] h-8 items-center justify-center gap-2.5 px-4 py-1 relative bg-[#e50814] rounded"
      onClick={onClick}>
      <div className="relative w-fit font-medium-smallbody font-[number:var(--medium-smallbody-font-weight)] text-white text-[length:var(--medium-smallbody-font-size)] text-center tracking-[var(--medium-smallbody-letter-spacing)] leading-[var(--medium-smallbody-line-height)] [font-style:var(--medium-smallbody-font-style)]">
        {children}
      </div>
    </button>
  );
};
