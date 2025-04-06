import { Logo } from "../../components/Logo";
import { Blocks } from "./sections/Blocks";
import { FaqQuestions } from "./sections/FaqQuestions";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { ScreensPreview } from "./sections/ScreensPreview";

export const ContentBlocks = (): JSX.Element => {
  return (
    <div className="inline-flex flex-col items-start gap-20 p-20 relative bg-greygrey-800">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-20 h-20 rounded-[57.14px] overflow-hidden border-[1.43px] border-solid border-white">
            <Logo className="!left-[29px] !top-5" size="large" type="letter" />
          </div>

          <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans_-Bold',Helvetica] font-bold text-white text-[80px] tracking-[0] leading-[normal]">
            Content Blocks
          </div>
        </div>

        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Divider"
          src="https://c.animaapp.com/m8yif6pjxD4azg/img/divider.svg"
        />
      </div>

      <div className="relative w-fit [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[normal]">
        Header
      </div>

      <Frame />
      <img
        className="relative self-stretch w-full h-px object-cover"
        alt="Divider"
        src="https://c.animaapp.com/m8yif6pjxD4azg/img/divider.svg"
      />

      <div className="relative w-fit [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[normal]">
        Footer
      </div>

      <FrameWrapper />
      <img
        className="relative self-stretch w-full h-px object-cover"
        alt="Divider"
        src="https://c.animaapp.com/m8yif6pjxD4azg/img/divider.svg"
      />

      <div className="relative w-fit [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[normal]">
        FAQ
      </div>

      <FaqQuestions />
      <img
        className="relative self-stretch w-full h-px object-cover"
        alt="Divider"
        src="https://c.animaapp.com/m8yif6pjxD4azg/img/divider.svg"
      />

      <div className="relative w-fit [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[normal]">
        Landing Page Screens Preview
      </div>

      <ScreensPreview />
      <img
        className="relative self-stretch w-full h-px object-cover"
        alt="Divider"
        src="https://c.animaapp.com/m8yif6pjxD4azg/img/divider.svg"
      />

      <div className="relative w-fit [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[normal]">
        Landing Page Blocks
      </div>

      <Blocks />
    </div>
  );
};
