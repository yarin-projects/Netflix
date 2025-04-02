import React from "react";

interface Props {
  state: "on-hover" | "default";
  className: any;
  divClassName: any;
  text: string;
}

export const FaqQuestions = ({
  state,
  className,
  divClassName,
  text = "What is Netflix?",
}: Props): JSX.Element => {
  return (
    <div
      className={`w-[1104px] flex items-center p-6 h-[84px] justify-between relative ${state === "on-hover" ? "bg-[#414141]" : "bg-[#2d2d2d]"} ${className}`}
    >
      <div
        className={`font-regular-title2 w-fit tracking-[var(--regular-title2-letter-spacing)] [font-style:var(--regular-title2-font-style)] text-[length:var(--regular-title2-font-size)] text-white font-[number:var(--regular-title2-font-weight)] leading-[var(--regular-title2-line-height)] whitespace-nowrap relative ${divClassName}`}
      >
        {text}
      </div>

      <img
        className="w-[29.7px] mr-[-0.85px] h-[29.7px] relative"
        alt="Global icon"
        src="https://c.animaapp.com/m8zprqm5u99XUd/img/global-icon.svg"
      />
    </div>
  );
};
