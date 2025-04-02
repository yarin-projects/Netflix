import React from "react";
import { FaqQuestions } from "../../../../components/FaqQuestions";
import { InserfieldEmail } from "../../../../components/InserfieldEmail";

export const Frame = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[1440px] items-start gap-2.5 px-[168px] py-[72px] absolute top-[2932px] left-0 bg-primaryblack border-t-8 [border-top-style:solid] border-[#232323]">
      <div className="inline-flex flex-col items-center gap-12 relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
          <div className="relative w-[1104px] mt-[-1.00px] font-bold-title1 font-[number:var(--bold-title1-font-weight)] text-primarywhite text-[length:var(--bold-title1-font-size)] text-center tracking-[var(--bold-title1-letter-spacing)] leading-[var(--bold-title1-line-height)] [font-style:var(--bold-title1-font-style)]">
            Frequently Asked Questions
          </div>

          <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
            <FaqQuestions
              className="!bg-greygrey-700"
              divClassName="!text-primarywhite"
              state="default"
            />
            <FaqQuestions
              className="!bg-greygrey-700"
              divClassName="!text-primarywhite"
              state="default"
              text="How much does Netflix cost?"
            />
            <FaqQuestions
              className="!bg-greygrey-700"
              divClassName="!text-primarywhite"
              state="default"
              text="Where can I watch?"
            />
            <FaqQuestions
              className="!bg-greygrey-700"
              divClassName="!text-primarywhite"
              state="default"
              text="How do I cancel?"
            />
            <FaqQuestions
              className="!bg-greygrey-700"
              divClassName="!text-primarywhite"
              state="default"
              text="What can I watch on Netflix?"
            />
            <FaqQuestions
              className="!bg-greygrey-700"
              divClassName="!text-primarywhite"
              state="default"
              text="Is Netflix good for kids?"
            />
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
  );
};
