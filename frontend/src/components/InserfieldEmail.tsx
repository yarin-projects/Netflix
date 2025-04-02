import React from "react";
import { InputField } from "./InputField";
import { TypeGetstartedWrapper } from "./TypeGetstartedWrapper";

interface Props {
  className: any;
  divClassName: any;
  inputFieldDivClassName: any;
  typeGetstartedWrapperTypeGetstartedClassName: any;
  typeGetstartedWrapperDivClassName: any;
}

export const InserfieldEmail = ({
  className,
  divClassName,
  inputFieldDivClassName,
  typeGetstartedWrapperTypeGetstartedClassName,
  typeGetstartedWrapperDivClassName,
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex flex-col items-center gap-4 relative ${className}`}
    >
      <p
        className={`relative w-fit mt-[-1.00px] font-regular-title4 font-[number:var(--regular-title4-font-weight)] text-white text-[length:var(--regular-title4-font-size)] text-center tracking-[var(--regular-title4-letter-spacing)] leading-[var(--regular-title4-line-height)] whitespace-nowrap [font-style:var(--regular-title4-font-style)] ${divClassName}`}
      >
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="inline-flex items-start justify-center gap-2 relative flex-[0_0_auto]">
        <InputField
          className={inputFieldDivClassName}
          size="large"
          state="default"
          type="email"
        />
        <TypeGetstartedWrapper
          className={typeGetstartedWrapperTypeGetstartedClassName}
          divClassName={typeGetstartedWrapperDivClassName}
          state="default"
          type="get-started"
        />
      </div>
    </div>
  );
};
