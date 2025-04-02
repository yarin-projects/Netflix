import React from "react";
import { ScreenTvScreenWrapper } from "../ScreenTvScreenWrapper";

interface Props {
  type: "image-headline" | "headline-image";
  screenTvScreenWrapperFrameClassName: any;
}

export const TypeHeadlineImageWrapper = ({
  type,
  screenTvScreenWrapperFrameClassName,
}: Props): JSX.Element => {
  return (
    <div
      className={`w-[1440px] h-[558px] bg-black relative ${type === "image-headline" ? "border-[#232323]" : ""} ${type === "image-headline" ? "border-t-8" : ""} ${type === "image-headline" ? "[border-top-style:solid]" : ""}`}
    >
      <div className="w-[1104px] left-[168px] top-[72px] h-[410px] relative">
        <div
          className={`flex-col items-start top-[125px] gap-4 absolute ${type === "image-headline" ? "w-[546px]" : ""} ${type === "image-headline" ? "flex" : "inline-flex"} ${type === "image-headline" ? "left-[558px]" : "left-0"}`}
        >
          <div
            className={`font-bold-title1 mt-[-1.00px] tracking-[var(--bold-title1-letter-spacing)] text-[length:var(--bold-title1-font-size)] [font-style:var(--bold-title1-font-style)] text-white font-[number:var(--bold-title1-font-weight)] leading-[var(--bold-title1-line-height)] relative ${type === "image-headline" ? "w-[546px]" : "w-fit"} ${type === "headline-image" ? "whitespace-nowrap" : ""}`}
          >
            {type === "headline-image" && <>Enjoy on your TV</>}

            {type === "image-headline" && <>Watch everywhere</>}
          </div>

          <div className="font-regular-title2 w-fit tracking-[var(--regular-title2-letter-spacing)] [font-style:var(--regular-title2-font-style)] text-[length:var(--regular-title2-font-size)] text-white font-[number:var(--regular-title2-font-weight)] leading-[var(--regular-title2-line-height)] relative">
            {type === "headline-image" && (
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            )}

            {type === "image-headline" && (
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            )}
          </div>
        </div>

        <ScreenTvScreenWrapper
          className={
            type === "image-headline"
              ? "!absolute !left-0 !top-0"
              : "!absolute !left-[558px] !top-0"
          }
          frameClassName={screenTvScreenWrapperFrameClassName}
          screen={
            type === "image-headline" ? "mac-computer-screen" : "TV-screen"
          }
        />
      </div>
    </div>
  );
};
