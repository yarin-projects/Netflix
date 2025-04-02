import React from "react";
import { ScreensPreview } from "../../../../components/ScreensPreview";
import { TypeHeadlineImageWrapper } from "../../../../components/TypeHeadlineImageWrapper";

export const Blocks = (): JSX.Element => {
  return (
    <div className="inline-flex flex-col items-center absolute top-[699px] left-0">
      <TypeHeadlineImageWrapper
        className="!bg-primaryblack"
        divClassName="!text-primarywhite"
        divClassNameOverride="!text-primarywhite"
        type="headline-image"
      />
      <TypeHeadlineImageWrapper
        className="!bg-primaryblack"
        divClassName="!text-primarywhite"
        divClassNameOverride="!text-primarywhite"
        type="image-headline"
      />
      <TypeHeadlineImageWrapper
        className="!border-[#232323] ![border-top-style:solid] !border-t-8 !bg-primaryblack"
        divClassName="!text-primarywhite"
        divClassNameOverride="!text-primarywhite"
        screensPreviewScreen="picture-kids"
        text="Create profiles for kids"
        text1="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        type="headline-image"
      />
      <div className="relative w-[1440px] h-[558px] bg-primaryblack border-t-8 [border-top-style:solid] border-[#232323]">
        <div className="relative w-[1104px] h-[410px] top-[72px] left-[168px]">
          <div className="flex w-[546px] left-[558px] flex-col items-start gap-4 absolute top-[125px]">
            <p className="relative w-[546px] mt-[-1.00px] font-bold-title1 font-[number:var(--bold-title1-font-weight)] text-primarywhite text-[length:var(--bold-title1-font-size)] tracking-[var(--bold-title1-letter-spacing)] leading-[var(--bold-title1-line-height)] [font-style:var(--bold-title1-font-style)]">
              Download your shows to watch offline
            </p>

            <p className="relative w-fit font-regular-title2 font-[number:var(--regular-title2-font-weight)] text-primarywhite text-[length:var(--regular-title2-font-size)] tracking-[var(--regular-title2-letter-spacing)] leading-[var(--regular-title2-line-height)] whitespace-nowrap [font-style:var(--regular-title2-font-style)]">
              Watch on a plane, train, or submarine...
            </p>
          </div>

          <div className="absolute w-[546px] h-[410px] top-0 left-0">
            <div className="inline-flex flex-col h-[410px] items-center justify-around gap-[10.79px] relative">
              <img
                className="relative w-[546px] h-[410.04px] mt-[-0.02px] mb-[-0.02px] object-cover"
                alt="Mobile"
                src="https://c.animaapp.com/m8zprqm5u99XUd/img/mobile-0819-1.png"
              />

              <ScreensPreview
                boxshotClassName="!h-[86.32px] !w-[60.43px]"
                className="!h-28 !rounded-[12.95px] !gap-[17.26px] !border-[2.14px] !border-solid !px-[12.95px] !py-[8.63px] !absolute !left-[98px] !bg-primaryblack !w-[325px] !top-[277px]"
                divClassName="!mt-[-1.07px] !text-primarywhite !text-[21.4px] !leading-[32.2px]"
                divClassNameOverride="!text-secondaryblue-100 !text-[15px] !leading-[19.3px]"
                downloadIcon="https://c.animaapp.com/m8zprqm5u99XUd/img/download-icon-2.png"
                downloadIconClassName="!h-[64.74px] !w-[51.79px]"
                frameClassName="!mr-[-1.08px] !gap-[8.58px] !w-[222.28px]"
                screen="download-gif-preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
