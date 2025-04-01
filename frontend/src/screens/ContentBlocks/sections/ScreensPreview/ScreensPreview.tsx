import React from "react";
import { ScreenTvScreenWrapper } from "../../../../components/ScreenTvScreenWrapper";

export const ScreensPreview = (): JSX.Element => {
  return (
    <div className="flex flex-wrap w-[1878px] items-center gap-[40px_40px] p-20 relative flex-[0_0_auto] bg-greygrey-850 rounded-lg overflow-hidden border border-dashed border-[#f50723]">
      <ScreenTvScreenWrapper
        className="!flex-[0_0_auto] !w-[unset]"
        frameClassName="bg-[url(https://c.animaapp.com/m8yif6pjxD4azg/img/tv-1.png)]"
        screen="TV-screen"
      />
      <ScreenTvScreenWrapper screen="mac-computer-screen" />
      <ScreenTvScreenWrapper
        className="bg-[url(https://c.animaapp.com/m8yif6pjxD4azg/img/aaaabejkyujiidqciqmgjj8btxkykkti5jiqexltvn1ymvxyifx8b9cywoousizo.png)]"
        screen="picture-kids"
      />
      <div className="relative w-[546px] h-[410px]">
        <div className="inline-flex flex-col h-[410px] items-center justify-around gap-[10.79px] relative">
          <img
            className="relative w-[546px] h-[410.04px] mt-[-0.02px] mb-[-0.02px] object-cover"
            alt="Mobile"
            src="https://c.animaapp.com/m8yif6pjxD4azg/img/mobile-0819.png"
          />

          <ScreenTvScreenWrapper
            boxshotClassName="!h-[86.32px] !w-[60.43px]"
            className="!h-28 !rounded-[12.95px] !gap-[17.26px] !border-[2.14px] !border-solid !px-[12.95px] !py-[8.63px] !absolute !left-[98px] !w-[325px] !top-[277px]"
            divClassName="!mt-[-1.07px] !text-[21.4px] !leading-[32.2px]"
            divClassNameOverride="!text-[15px] !leading-[19.3px]"
            downloadIconClassName="!h-[64.74px] !w-[51.79px]"
            frameClassNameOverride="!mr-[-1.08px] !gap-[8.58px] !w-[222.28px]"
            screen="download-gif-preview"
          />
        </div>
      </div>

      <ScreenTvScreenWrapper screen="download-gif-preview" />
    </div>
  );
};
