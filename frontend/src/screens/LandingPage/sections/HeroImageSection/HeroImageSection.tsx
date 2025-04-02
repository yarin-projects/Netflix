import React from "react";
import { Header } from "../../../../components/Header";
import { InserfieldEmail } from "../../../../components/InserfieldEmail";

export const HeroImageSection = (): JSX.Element => {
  return (
    <div className="absolute w-[1440px] h-[700px] top-0 left-0">
      <div className="relative h-[700px]">
        <div className="absolute w-[1440px] h-[700px] top-0 left-0 bg-[url(https://c.animaapp.com/m8zprqm5u99XUd/img/hero-image.png)] bg-cover bg-[50%_50%]">
          <div className="h-[700px]" />
        </div>

        <Header
          buttonDivClassName="!text-primarywhite"
          buttonTypeSigninSizeClassName="!bg-primaryred"
          className="!absolute !left-[120px] !bg-transparent !top-0"
          divClassName="!text-primarywhite"
          type="landing-page"
        />
        <div className="inline-flex flex-col items-center gap-6 absolute top-[280px] left-[277px]">
          <div className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-bold-title1 font-[number:var(--bold-title1-font-weight)] text-primarywhite text-[length:var(--bold-title1-font-size)] text-center tracking-[var(--bold-title1-letter-spacing)] leading-[var(--bold-title1-line-height)] whitespace-nowrap [font-style:var(--bold-title1-font-style)]">
              Unlimited movies, TV shows, and more
            </p>

            <div className="relative w-[885px] h-[30px] font-regular-title2 font-[number:var(--regular-title2-font-weight)] text-primarywhite text-[length:var(--regular-title2-font-size)] text-center tracking-[var(--regular-title2-letter-spacing)] leading-[var(--regular-title2-line-height)] whitespace-nowrap [font-style:var(--regular-title2-font-style)]">
              Watch anywhere. Cancel anytime.
            </div>
          </div>

          <InserfieldEmail
            className="!flex-[0_0_auto]"
            divClassName="!text-primarywhite"
            inputFieldDivClassName="!text-greygrey-50"
            typeGetstartedWrapperDivClassName="!text-primarywhite"
            typeGetstartedWrapperTypeGetstartedClassName="!bg-primaryred"
          />
        </div>
      </div>
    </div>
  );
};
