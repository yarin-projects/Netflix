import React from "react";

interface Props {
  type: "home-page" | "authentication-page" | "landing-page";
  className: any;
  href: string;
}

export const Footer = ({ type, className, href }: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex flex-col items-start relative ${type === "landing-page" ? "border-[#232323]" : ""} ${type === "landing-page" ? "border-t-8" : ""} ${type === "landing-page" ? "[border-top-style:solid]" : ""} ${type === "home-page" ? "gap-3" : "gap-2.5"} ${type === "home-page" ? "pt-[68px] pb-1 px-[230px]" : "px-[168px] py-[72px]"} ${type === "authentication-page" ? "h-[366px]" : ""} ${className}`}
    >
      {["authentication-page", "landing-page"].includes(type) && (
        <div className="w-[1104px] flex flex-col items-start gap-8 flex-[0_0_auto] relative">
          <div className="inline-flex flex-col items-start max-w-[1104px] gap-6 flex-[0_0_auto] relative">
            <p className="[font-family:'Netflix_Sans-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-[#b3b3b3] font-normal leading-4 relative">
              <span className="[font-family:'Netflix_Sans-Regular',Helvetica] tracking-[0] text-base text-[#b3b3b3] font-normal">
                Questions? Call{" "}
              </span>

              <a
                href="tel:1-844-505-2993"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="underline leading-5">1-844-505-2993</span>
              </a>
            </p>

            <div
              className={`inline-flex flex-col items-start flex-[0_0_auto] relative ${type === "authentication-page" ? "gap-[21px]" : "gap-4"}`}
            >
              <div className="w-[1104px] flex items-start gap-3 flex-[0_0_auto] relative">
                <div className="[font-family:'Netflix_Sans-Regular',Helvetica] w-[267px] mt-[-1.00px] tracking-[0] text-sm text-[#b3b3b3] underline font-normal leading-[18px] relative">
                  FAQ
                </div>

                <div className="[font-family:'Netflix_Sans-Regular',Helvetica] w-[267px] mt-[-1.00px] tracking-[0] text-sm text-[#b3b3b3] underline font-normal leading-[18px] relative">
                  Help Center
                </div>

                <div className="[font-family:'Netflix_Sans-Regular',Helvetica] w-[267px] mt-[-1.00px] tracking-[0] text-sm text-[#b3b3b3] underline font-normal leading-[18px] relative">
                  {type === "authentication-page" && <>Netflix Shop</>}

                  {type === "landing-page" && <>Account</>}
                </div>

                <div className="[font-family:'Netflix_Sans-Regular',Helvetica] w-[267px] mt-[-1.00px] tracking-[0] text-sm text-[#b3b3b3] underline font-normal leading-[18px] relative">
                  {type === "authentication-page" && <>Terms of Use</>}

                  {type === "landing-page" && <>Media Center</>}
                </div>
              </div>

              <div className="w-[1104px] flex items-start gap-3 flex-[0_0_auto] relative">
                <div className="[font-family:'Netflix_Sans-Regular',Helvetica] w-[267px] mt-[-1.00px] tracking-[0] text-sm text-[#b3b3b3] underline font-normal leading-[18px] relative">
                  {type === "landing-page" && <>Investor Relations</>}

                  {type === "authentication-page" && <>Privacy</>}
                </div>

                <div className="[font-family:'Netflix_Sans-Regular',Helvetica] w-[267px] mt-[-1.00px] tracking-[0] text-sm text-[#b3b3b3] underline font-normal leading-[18px] relative">
                  {type === "landing-page" && <>Jobs</>}

                  {type === "authentication-page" && <>Cookie Preferences</>}
                </div>

                <div className="[font-family:'Netflix_Sans-Regular',Helvetica] w-[267px] mt-[-1.00px] tracking-[0] text-sm text-[#b3b3b3] underline font-normal leading-[18px] relative">
                  {type === "landing-page" && <>Netflix Shop</>}

                  {type === "authentication-page" && <>Corporate Information</>}
                </div>

                <a
                  className="[font-family:'Netflix_Sans-Regular',Helvetica] w-[267px] mt-[-1.00px] tracking-[0] text-sm text-[#b3b3b3] underline font-normal leading-[18px] relative"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {type === "landing-page" && <>Redeem Gift Cards</>}

                  {type === "authentication-page" && (
                    <p>Do Not Sell or Share My Personal Information</p>
                  )}
                </a>
              </div>

              <div className="w-[1104px] flex items-start gap-3 flex-[0_0_auto] relative">
                <div className="[font-family:'Netflix_Sans-Regular',Helvetica] w-[267px] mt-[-1.00px] tracking-[0] text-sm text-[#b3b3b3] underline font-normal leading-[18px] relative">
                  {type === "authentication-page" && <>Ad Choices</>}

                  {type === "landing-page" && <>Buy Gift Cards</>}
                </div>

                {type === "landing-page" && (
                  <>
                    <div className="relative w-[267px] mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#b3b3b3] text-sm tracking-[0] leading-[18px] underline">
                      Ways to Watch
                    </div>

                    <div className="relative w-[267px] mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#b3b3b3] text-sm tracking-[0] leading-[18px] underline">
                      Terms of Use
                    </div>

                    <div className="relative w-[267px] mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#b3b3b3] text-sm tracking-[0] leading-[18px] underline">
                      Privacy
                    </div>
                  </>
                )}
              </div>

              {type === "landing-page" && (
                <>
                  <div className="flex w-[1104px] items-start gap-3 relative flex-[0_0_auto]">
                    <div className="relative w-[267px] mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#b3b3b3] text-sm tracking-[0] leading-[18px] underline">
                      Cookie Preferences
                    </div>

                    <div className="relative w-[267px] mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#b3b3b3] text-sm tracking-[0] leading-[18px] underline">
                      Corporate Information
                    </div>

                    <div className="relative w-[267px] mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#b3b3b3] text-sm tracking-[0] leading-[18px] underline">
                      Contact Us
                    </div>

                    <div className="relative w-[267px] mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#b3b3b3] text-sm tracking-[0] leading-[18px] underline">
                      Speed Test
                    </div>
                  </div>

                  <div className="flex w-[1104px] items-start gap-3 relative flex-[0_0_auto]">
                    <div className="relative w-[267px] mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#b3b3b3] text-sm tracking-[0] leading-[18px] underline">
                      Legal Notices
                    </div>

                    <div className="relative w-[267px] mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#b3b3b3] text-sm tracking-[0] leading-[18px] underline">
                      Only on Netflix
                    </div>

                    <p className="relative w-[267px] mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#b3b3b3] text-sm tracking-[0] leading-[18px] underline">
                      Do Not Sell or Share Personal <br />
                      Information
                    </p>

                    <div className="relative w-[267px] mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#b3b3b3] text-sm tracking-[0] leading-[18px] underline">
                      Ad Choices
                    </div>
                  </div>
                </>
              )}
            </div>
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
        </div>
      )}

      {type === "home-page" && (
        <>
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <img className="relative w-9 h-[30px]" alt="Icon socialmedia" />

            <img className="relative w-9 h-[30px]" alt="Icon socialmedia" />

            <img className="relative w-9 h-[30px]" alt="Icon socialmedia" />

            <img className="relative w-9 h-[30px]" alt="Icon socialmedia" />
          </div>

          <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[980px] items-start gap-4 relative flex-[0_0_auto]">
                <div className="flex w-[980px] items-start gap-3 relative flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Audio Description
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Help Center
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Gift Cards
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Media Center
                  </div>
                </div>

                <div className="flex w-[980px] items-start gap-3 relative flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Investor Relations
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Jobs
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Netflix Shop
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Terms of Use
                  </div>
                </div>

                <div className="flex w-[980px] items-start gap-3 relative flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Privacy
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Legal Notices
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Cookie Preferences
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Corporate Information
                  </div>
                </div>

                <div className="flex w-[980px] items-start gap-3 relative flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Contact Us
                  </div>

                  <p className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Do Not Sell or Share My Personal
                    <br />
                    Information
                  </p>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    Ad Choices
                  </div>

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4">
                    {""}
                  </div>
                </div>
              </div>

              <div className="flex w-[91px] h-[34px] items-center justify-center gap-2.5 p-2.5 relative border border-solid border-[#7f7f7f]">
                <div className="relative w-fit mt-[-2.00px] ml-[-4.50px] mr-[-4.50px] [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-greygrey-200 text-[13px] tracking-[0] leading-4 whitespace-nowrap">
                  Service Code
                </div>
              </div>
            </div>

            <p className="relative w-[267px] font-regular-caption2 font-[number:var(--regular-caption2-font-weight)] text-greygrey-200 text-[length:var(--regular-caption2-font-size)] tracking-[var(--regular-caption2-letter-spacing)] leading-[var(--regular-caption2-line-height)] [font-style:var(--regular-caption2-font-style)]">
              © 1997 - 2024 Netflix, Inc.
            </p>
          </div>
        </>
      )}
    </div>
  );
};
