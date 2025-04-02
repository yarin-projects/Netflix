import React from "react";

interface Props {
  type: "use-sign-in-code";
  state: "default";
  divClassName: any;
}

export const TypeUsesignincodeWrapper = ({
  type,
  state,
  divClassName,
}: Props): JSX.Element => {
  return (
    <button className="all-[unset] box-border flex flex-col w-[314px] h-10 items-center justify-center gap-4 px-6 py-3 relative bg-transparent-white20 rounded">
      <div
        className={`relative w-fit mt-[-5.00px] mb-[-3.00px] font-medium-body font-[number:var(--medium-body-font-weight)] text-white text-[length:var(--medium-body-font-size)] text-center tracking-[var(--medium-body-letter-spacing)] leading-[var(--medium-body-line-height)] whitespace-nowrap [font-style:var(--medium-body-font-style)] ${divClassName}`}
      >
        Use a Sign-In Code
      </div>
    </button>
  );
};
