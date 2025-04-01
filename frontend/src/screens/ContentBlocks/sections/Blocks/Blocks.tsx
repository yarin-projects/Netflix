import React from "react";
import { TypeHeadlineImageWrapper } from "../../../../components/TypeHeadlineImageWrapper";

export const Blocks = (): JSX.Element => {
  return (
    <div className="inline-flex flex-col items-start gap-10 p-20 relative flex-[0_0_auto] bg-greygrey-850 rounded-lg overflow-hidden border border-dashed border-[#f50723]">
      <TypeHeadlineImageWrapper
        screenTvScreenWrapperFrameClassName="bg-[url(https://c.animaapp.com/m8yif6pjxD4azg/img/tv-1.png)]"
        type="headline-image"
      />
      <TypeHeadlineImageWrapper type="image-headline" />
    </div>
  );
};
