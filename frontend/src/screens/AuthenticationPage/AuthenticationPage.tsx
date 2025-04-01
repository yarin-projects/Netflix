import React from "react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";
import { TypeCheckboxNameWrapper } from "../../components/TypeCheckboxNameWrapper";
import { TypeUsesignincodeWrapper } from "../../components/TypeUsesignincodeWrapper";

export const AuthenticationPage = (): JSX.Element => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-primaryblack w-[1440px] h-[1209px]">
        <div className="relative h-[1209px] bg-[url(https://c.animaapp.com/m8yjaf66Id2LP9/img/hero-image.png)] bg-cover bg-[50%_50%]">
          <Header
            className="!gap-[744px] ![justify-content:unset] !absolute !left-[120px] !bg-transparent !top-0"
            hasCombo={false}
            type="landing-page"
          />
          <Footer
            className="!border-[unset] !h-[366px] ![border-top-style:unset] !absolute !left-0 !border-t-[unset] !bg-transparentblack-60 !top-[843px]"
            divClassName="!text-greygrey-100"
            divClassName1="!text-greygrey-100"
            divClassName2="!text-greygrey-100"
            divClassName3="!text-greygrey-100"
            divClassName4="!text-greygrey-100"
            divClassName5="!text-greygrey-100"
            divClassName6="!text-greygrey-100"
            divClassName7="!text-greygrey-100"
            divClassName8="!text-primarywhite"
            divClassNameOverride="!text-greygrey-100"
            frameClassName="!gap-[21px]"
            hasDiv={false}
            hasDiv1={false}
            hasFrame={false}
            hasFrame1={false}
            href="https://www.netflix.com/dnsspi"
            questionsCallClassName="!text-greygrey-100"
            text="Netflix Shop"
            text1="Terms of Use"
            text2="Privacy"
            text3="Cookie Preferences"
            text4="Corporate Information"
            text5="Do Not Sell or Share My Personal Information"
            text6="Ad Choices"
            type="landing-page"
            visible={false}
          />
          <div className="flex flex-col w-[450px] h-[708px] items-start gap-3 px-[68px] py-12 absolute top-[92px] left-[495px] bg-transparentblack-60 rounded overflow-hidden">
            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-7 relative flex-[0_0_auto]">
                <div className="relative w-[314px] mt-[-1.00px] [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-primarywhite text-[32px] tracking-[0] leading-10">
                  Sign In
                </div>

                <div className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
                  <InputField
                    className="!text-greygrey-50"
                    size="medium"
                    sizeMediumTypeClassName="!gap-4"
                    state="default"
                    type="emailor-phone"
                  />
                  <InputField
                    className="!text-greygrey-50"
                    size="medium"
                    sizeMediumTypeClassName="!gap-4"
                    state="default"
                    type="password"
                  />
                  <Button
                    className="!bg-primaryred"
                    divClassName="!text-primarywhite"
                    size="large"
                    state="default"
                    type="sign-in"
                  />
                  <div className="relative w-fit font-regular-body font-[number:var(--regular-body-font-weight)] text-transparent-white70 text-[length:var(--regular-body-font-size)] text-center tracking-[var(--regular-body-letter-spacing)] leading-[var(--regular-body-line-height)] [font-style:var(--regular-body-font-style)]">
                    OR
                  </div>

                  <TypeUsesignincodeWrapper
                    divClassName="!text-primarywhite"
                    state="default"
                    type="use-sign-in-code"
                  />
                  <div className="relative w-[134px] h-5">
                    <div className="relative h-5">
                      <div className="absolute -top-px left-0 font-regular-body font-[number:var(--regular-body-font-weight)] text-primarywhite text-[length:var(--regular-body-font-size)] tracking-[var(--regular-body-letter-spacing)] leading-[var(--regular-body-line-height)] [font-style:var(--regular-body-font-style)]">
                        Forgot Password?
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[314px] items-start gap-3 relative flex-[0_0_auto]">
                <div className="flex flex-col w-[314px] items-start gap-4 relative flex-[0_0_auto]">
                  <TypeCheckboxNameWrapper
                    boolean1={false}
                    className="!flex-[0_0_auto]"
                    divClassName="!text-primarywhite"
                    name="remember-me"
                    state="default"
                    type="checkbox"
                  />
                  <p className="relative w-fit [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-primaryblack text-base tracking-[0] leading-4">
                    <span className="text-[#ffffffb2] leading-[0.1px]">
                      New to Netflix?
                    </span>

                    <span className="text-black">&nbsp;</span>

                    <span className="[font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-white leading-6">
                      Sign up{" "}
                    </span>

                    <span className="font-medium-body font-[number:var(--medium-body-font-weight)] text-white leading-[var(--medium-body-line-height)] [font-style:var(--medium-body-font-style)] tracking-[var(--medium-body-letter-spacing)] text-[length:var(--medium-body-font-size)]">
                      now.
                    </span>
                  </p>
                </div>

                <p className="relative w-[314px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-[13px]">
                  <span className="text-[#7f7f7f] leading-4">
                    This page is protected by Google reCAPTCHA to ensure you’re
                    not a bot.{" "}
                  </span>

                  <span className="text-[#0071eb] leading-4">Learn more.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
