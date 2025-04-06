import { IconMediumArrowleft } from "../../../icons/IconMediumArrowleft";

export const HomeSubPreview = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[1292px] h-36 items-center justify-around gap-2.5 pl-[367px] pr-[374px] py-[22px] absolute top-[627px] left-[74px] rounded overflow-hidden shadow-[0px_-8px_50px_25px_#00000080] [background:linear-gradient(0deg,rgba(14,27,79,0.2)_0%,rgba(14,27,79,0.2)_100%),radial-gradient(50%_50%_at_32%_-524%,rgba(255,153,0,0.6)_0%,rgba(229,9,20,0.6)_14%,rgba(14,27,79,0.6)_77%,rgba(0,4,19,0.6)_100%)]">
      <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
        <img
          className="relative w-24 h-24 object-cover"
          alt="Element"
          src="https://c.animaapp.com/m8zprqm5u99XUd/img/8468553-1.png"
        />
        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-medium-headline2 font-[number:var(--medium-headline2-font-weight)] text-primarywhite text-[length:var(--medium-headline2-font-size)] tracking-[var(--medium-headline2-letter-spacing)] leading-[var(--medium-headline2-line-height)] whitespace-nowrap [font-style:var(--medium-headline2-font-style)]">
              The Netflix you love for just $6.99.
            </p>

            <p className="relative w-fit font-regular-body font-[number:var(--regular-body-font-weight)] text-primarywhite text-[length:var(--regular-body-font-size)] tracking-[var(--regular-body-letter-spacing)] leading-[var(--regular-body-line-height)] [font-style:var(--regular-body-font-style)]">
              Get the Standard with ads plan.
            </p>
          </div>
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-px relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-medium-body font-[number:var(--medium-body-font-weight)]
               text-secondaryblue-200 text-[length:var(--medium-body-font-size)] tracking-[var(--medium-body-letter-spacing)]
                leading-[var(--medium-body-line-height)] whitespace-nowrap [font-style:var(--medium-body-font-style)]">
                Learn More
              </div>
              <img
                className="absolute w-[85px] h-px top-[19px] left-0 object-cover"
                alt="Line"
                src="https://c.animaapp.com/m8zprqm5u99XUd/img/line-4.svg"
              />
            </div>
            <IconMediumArrowleft className="!relative !w-[11.24px] !h-[19.07px] !mr-[-1.55px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
