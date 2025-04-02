import TypographyFooter from "../Typography/TypographyFooter"

const AuthenticationFooter = () => {
  return (
    <div className="inline-flex flex-col items-start gap-2.5 px-[168px] py-[72px] !border-[unset] !h-[366px] ![border-top-style:unset] !absolute
             !left-0 !border-t-[unset] !bg-transparentblack-60 !top-[843px]" >
        <div className="w-[1104px] flex flex-col items-start gap-8 flex-[0_0_auto] relative">
            <p className="[font-family:'Netflix_Sans-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-[#b3b3b3] font-normal leading-4 relative">
                <span className="[font-family:'Netflix_Sans-Regular',Helvetica] tracking-[0] text-base text-[#b3b3b3] font-normal">
                    Questions? {" "}
                </span>
                <a href="" rel="noopener noreferrer" target="_blank">
                    <span className="underline leading-5">Contact Us</span>
                </a>
            </p>
            <div className="inline-flex flex-col items-start flex-[0_0_auto] relative gap-[21px]">
                <div className="w-[1104px] flex items-start gap-3 flex-[0_0_auto] relative">
                    <TypographyFooter>FAQ</TypographyFooter>
                    <TypographyFooter>Help Center</TypographyFooter>
                    <TypographyFooter>Terms Of Use</TypographyFooter>
                    <TypographyFooter>Privacy</TypographyFooter>
                </div>
                <div className="w-[1104px] flex items-start gap-3 flex-[0_0_auto] relative">
                    <TypographyFooter>Cookie Preferences</TypographyFooter>
                    <TypographyFooter>Corporate Information</TypographyFooter>
                </div>
                <div className="border border-solid border-[#545454] w-[131px] flex items-center gap-4 pl-2 pr-4 py-1.5 h-8 rounded justify-center bg-[#00000080] relative">
                    <div className="inline-flex mt-[-2.00px] items-center gap-2 flex-[0_0_auto] justify-end mb-[-2.00px] relative">
                      <img className="w-4 h-4 relative" alt="Translator icon" />
                      <div className="font-medium-body w-fit mt-[-1.00px] tracking-[var(--medium-body-letter-spacing)] text-[length:var(--medium-body-font-size)] [font-style:var(--medium-body-font-style)] text-white font-[number:var(--medium-body-font-weight)] leading-[var(--medium-body-line-height)] whitespace-nowrap relative">
                        English
                      </div>
                    </div>
                    <img className="w-[7.79px] h-[3.75px] relative" alt="Polygon" />
                </div>
                <p className="relative w-[267px] font-regular-caption2 font-[number:var(--regular-caption2-font-weight)] text-greygrey-200 text-[length:var(--regular-caption2-font-size)] tracking-[var(--regular-caption2-letter-spacing)] leading-[var(--regular-caption2-line-height)] [font-style:var(--regular-caption2-font-style)]">
                    © 1997 - 2024 Netflix, Inc.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AuthenticationFooter
