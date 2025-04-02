import React from "react";

interface Props {
  type: "get-started";
  state: "default";
  className: any;
  divClassName: any;
}

export const TypeGetstartedWrapper = ({
  type,
  state,
  className,
  divClassName,
}: Props): JSX.Element => {
  return (
    <button
      className={`all-[unset] box-border flex w-52 h-14 items-center gap-4 px-6 py-3 relative bg-[#e50814] rounded ${className}`}
    >
      <div
        className={`relative w-fit font-medium-title3 font-[number:var(--medium-title3-font-weight)] text-white text-[length:var(--medium-title3-font-size)] text-center tracking-[var(--medium-title3-letter-spacing)] leading-[var(--medium-title3-line-height)] whitespace-nowrap [font-style:var(--medium-title3-font-style)] ${divClassName}`}
      >
        Get Started
      </div>

      <img
        className="relative w-[10.34px] h-[17.55px]"
        alt="Polygon"
        src="https://c.animaapp.com/m8zprqm5u99XUd/img/polygon-3.svg"
      />
    </button>
  );
};
