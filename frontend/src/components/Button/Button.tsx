import React from "react";

interface Props {
  type: "sign-in";
  size: "small";
  state: "default";
}

export const Button = ({ type, size, state }: Props): JSX.Element => {
  return (
    <button className="all-[unset] box-border flex flex-col w-[77px] h-8 items-center justify-center gap-2.5 px-4 py-1 relative bg-[#e50814] rounded">
      <div className="relative w-fit font-medium-smallbody font-[number:var(--medium-smallbody-font-weight)] text-white text-[length:var(--medium-smallbody-font-size)] text-center tracking-[var(--medium-smallbody-letter-spacing)] leading-[var(--medium-smallbody-line-height)] [font-style:var(--medium-smallbody-font-style)]">
        Sign In
      </div>
    </button>
  );
};
