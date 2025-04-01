import React from "react";
import { Footer } from "../../../../components/Footer";

export const FrameWrapper = (): JSX.Element => {
  return (
    <div className="relative w-[1740px] h-[1276px]">
      <footer className="inline-flex flex-col items-start gap-10 p-8 absolute top-0 left-0 bg-greygrey-850 rounded-lg overflow-hidden border border-dashed border-[#f50723]">
        <Footer className="!flex-[0_0_auto]" type="landing-page" />
        <Footer
          href="https://www.netflix.com/dnsspi"
          type="authentication-page"
        />
        <Footer className="!flex-[0_0_auto]" type="home-page" />
      </footer>

      <div className="absolute h-[25px] top-[230px] left-[1544px] font-regular-title3 font-[number:var(--regular-title3-font-weight)] text-white text-[length:var(--regular-title3-font-size)] tracking-[var(--regular-title3-letter-spacing)] leading-[var(--regular-title3-line-height)] whitespace-nowrap [font-style:var(--regular-title3-font-style)]">
        Landing Page
      </div>

      <div className="absolute h-[25px] top-[665px] left-[1544px] font-regular-title3 font-[number:var(--regular-title3-font-weight)] text-white text-[length:var(--regular-title3-font-size)] tracking-[var(--regular-title3-letter-spacing)] leading-[var(--regular-title3-line-height)] whitespace-nowrap [font-style:var(--regular-title3-font-style)]">
        Authentication Page
      </div>

      <div className="absolute h-[25px] top-[1059px] left-[1544px] font-regular-title3 font-[number:var(--regular-title3-font-weight)] text-white text-[length:var(--regular-title3-font-size)] tracking-[var(--regular-title3-letter-spacing)] leading-[var(--regular-title3-line-height)] whitespace-nowrap [font-style:var(--regular-title3-font-style)]">
        Home Page
      </div>
    </div>
  );
};
