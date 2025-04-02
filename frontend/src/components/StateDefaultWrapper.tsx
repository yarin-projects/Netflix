import React from "react";

interface Props {
  state: "on-hover" | "open-answer" | "default";
  className: any;
}

export const StateDefaultWrapper = ({
  state,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`w-[1104px] flex relative ${state === "open-answer" ? "flex-col" : ""} ${state === "open-answer" ? "items-start" : "items-center"} ${state === "open-answer" ? "gap-px" : ""} ${["default", "on-hover"].includes(state) ? "p-6" : ""} ${["default", "on-hover"].includes(state) ? "h-[84px]" : ""} ${["default", "on-hover"].includes(state) ? "justify-between" : ""} ${state === "default" ? "bg-[#2d2d2d]" : (state === "on-hover") ? "bg-[#414141]" : ""} ${className}`}
    >
      {["default", "on-hover"].includes(state) && (
        <>
          <div className="font-regular-title2 w-fit tracking-[var(--regular-title2-letter-spacing)] [font-style:var(--regular-title2-font-style)] text-[length:var(--regular-title2-font-size)] text-white font-[number:var(--regular-title2-font-weight)] leading-[var(--regular-title2-line-height)] whitespace-nowrap relative">
            What is Netflix?
          </div>

          <img
            className="w-[29.7px] mr-[-0.85px] h-[29.7px] relative"
            alt="Global icon"
          />
        </>
      )}

      {state === "open-answer" && (
        <>
          <div className="flex w-[1104px] h-[84px] items-center justify-between p-6 relative bg-[#2d2d2d]">
            <div className="relative w-fit font-regular-title2 font-[number:var(--regular-title2-font-weight)] text-white text-[length:var(--regular-title2-font-size)] tracking-[var(--regular-title2-letter-spacing)] leading-[var(--regular-title2-line-height)] whitespace-nowrap [font-style:var(--regular-title2-font-style)]">
              What is Netflix?
            </div>

            <img
              className="relative w-[27.41px] h-[27.41px] mr-[-0.71px]"
              alt="Faq questions"
            />
          </div>

          <div className="flex w-[1104px] items-start gap-2.5 p-6 relative flex-[0_0_auto] bg-greygrey-700">
            <p className="relative flex-1 mt-[-1.00px] font-regular-title2 font-[number:var(--regular-title2-font-weight)] text-white text-[length:var(--regular-title2-font-size)] tracking-[var(--regular-title2-letter-spacing)] leading-[var(--regular-title2-line-height)] [font-style:var(--regular-title2-font-style)]">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, <br />
              anime, documentaries, and more on thousands of internet-connected
              devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want – all for one
              low monthly price. There&#39;s always something new to discover
              and new TV shows and movies are added every week!
            </p>
          </div>
        </>
      )}
    </div>
  );
};
