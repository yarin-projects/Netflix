import React from "react";
import { Header } from "../../../../components/Header";

export const Frame = (): JSX.Element => {
  return (
    <div className="relative w-[1677px] h-[264px]">
      <div className="inline-flex flex-col items-center gap-10 p-8 absolute top-0 left-0 bg-greygrey-850 rounded-lg overflow-hidden border border-dashed border-[#f50723]">
        <Header type="landing-page" />
        <Header type="home-pgae" />
      </div>

      <div className="absolute h-[25px] top-16 left-[1544px] font-regular-title3 font-[number:var(--regular-title3-font-weight)] text-white text-[length:var(--regular-title3-font-size)] tracking-[var(--regular-title3-letter-spacing)] leading-[var(--regular-title3-line-height)] whitespace-nowrap [font-style:var(--regular-title3-font-style)]">
        Landing Page
      </div>

      <div className="absolute h-[25px] top-[184px] left-[1544px] font-regular-title3 font-[number:var(--regular-title3-font-weight)] text-white text-[length:var(--regular-title3-font-size)] tracking-[var(--regular-title3-letter-spacing)] leading-[var(--regular-title3-line-height)] whitespace-nowrap [font-style:var(--regular-title3-font-style)]">
        Home Page
      </div>
    </div>
  );
};
