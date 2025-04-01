import React from "react";
import { StateDefaultWrapper } from "../../../../components/StateDefaultWrapper";

export const FaqQuestions = (): JSX.Element => {
  return (
    <div className="inline-flex flex-col items-start gap-6 p-20 relative flex-[0_0_auto] bg-greygrey-850 rounded-lg overflow-hidden border border-dashed border-[#f50723]">
      <StateDefaultWrapper state="default" />
      <StateDefaultWrapper state="on-hover" />
      <StateDefaultWrapper className="!flex-[0_0_auto]" state="open-answer" />
    </div>
  );
};
