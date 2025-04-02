import React from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { SmallAvatar } from "./SmallAvatar";

interface Props {
  type: "home-pgae" | "landing-page";
}

export const Header = ({ type }: Props): JSX.Element => {
  return (
    <div
      className={`flex justify-between relative ${type === "home-pgae" ? "w-[1440px]" : "w-[1200px]"} ${type === "home-pgae" ? "items-center" : "items-start"} ${type === "home-pgae" ? "px-[58px] py-0" : "pt-6 pb-7 px-12"} ${type === "home-pgae" ? "h-[68px]" : "h-[92px]"}`}
    >
      {type === "landing-page" && (
        <Logo className="!bg-[unset]" size="medium" type="word" />
      )}

      <div
        className={`inline-flex items-center flex-[0_0_auto] relative ${type === "home-pgae" ? "gap-[45px]" : "gap-6"}`}
      >
        {type === "landing-page" && (
          <>
            <div className="flex w-[131px] h-8 items-center justify-center gap-4 pl-2 pr-4 py-1.5 relative bg-[#00000080] rounded border border-solid border-[#545454]">
              <div className="inline-flex items-center justify-end gap-2 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px]">
                <img className="relative w-4 h-4" alt="Translator icon" />

                <div className="relative w-fit mt-[-1.00px] font-medium-body font-[number:var(--medium-body-font-weight)] text-white text-[length:var(--medium-body-font-size)] tracking-[var(--medium-body-letter-spacing)] leading-[var(--medium-body-line-height)] whitespace-nowrap [font-style:var(--medium-body-font-style)]">
                  English
                </div>
              </div>

              <img className="relative w-[7.79px] h-[3.75px]" alt="Polygon" />
            </div>

            <Button size="small" state="default" type="sign-in" />
          </>
        )}

        {type === "home-pgae" && (
          <>
            <Logo className="!bg-[unset]" size="small" type="word" />
            <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[17px] whitespace-nowrap">
                Home
              </div>

              <div className="relative w-fit mt-[-1.00px] font-regular-smallbody font-[number:var(--regular-smallbody-font-weight)] text-greygrey-10 text-[length:var(--regular-smallbody-font-size)] tracking-[var(--regular-smallbody-letter-spacing)] leading-[var(--regular-smallbody-line-height)] whitespace-nowrap [font-style:var(--regular-smallbody-font-style)]">
                TV Shows
              </div>

              <div className="relative w-fit mt-[-1.00px] font-regular-smallbody font-[number:var(--regular-smallbody-font-weight)] text-greygrey-10 text-[length:var(--regular-smallbody-font-size)] tracking-[var(--regular-smallbody-letter-spacing)] leading-[var(--regular-smallbody-line-height)] whitespace-nowrap [font-style:var(--regular-smallbody-font-style)]">
                Movies
              </div>

              <div className="relative w-fit mt-[-1.00px] font-regular-smallbody font-[number:var(--regular-smallbody-font-weight)] text-greygrey-10 text-[length:var(--regular-smallbody-font-size)] tracking-[var(--regular-smallbody-letter-spacing)] leading-[var(--regular-smallbody-line-height)] whitespace-nowrap [font-style:var(--regular-smallbody-font-style)]">
                New &amp; Popular
              </div>

              <div className="relative w-fit mt-[-1.00px] font-regular-smallbody font-[number:var(--regular-smallbody-font-weight)] text-greygrey-10 text-[length:var(--regular-smallbody-font-size)] tracking-[var(--regular-smallbody-letter-spacing)] leading-[var(--regular-smallbody-line-height)] whitespace-nowrap [font-style:var(--regular-smallbody-font-style)]">
                My List
              </div>

              <div className="relative w-fit mt-[-1.00px] font-regular-smallbody font-[number:var(--regular-smallbody-font-weight)] text-greygrey-10 text-[length:var(--regular-smallbody-font-size)] tracking-[var(--regular-smallbody-letter-spacing)] leading-[var(--regular-smallbody-line-height)] whitespace-nowrap [font-style:var(--regular-smallbody-font-style)]">
                Browse by Languages
              </div>
            </div>
          </>
        )}
      </div>

      {type === "home-pgae" && (
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
          <img className="relative w-9 h-8" alt="Icon medium search" />

          <img className="relative w-9 h-8" alt="Icon medium" />

          <SmallAvatar size="small" type="user-profile-menu" />
        </div>
      )}
    </div>
  );
};
