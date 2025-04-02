import React from "react";

interface Props {
  screen:
    | "mac-computer-screen"
    | "iphone-screen"
    | "download-gif-preview"
    | "TV-screen"
    | "picture-kids";
  className: any;
  boxshotClassName: any;
  frameClassName: any;
  divClassName: any;
  divClassNameOverride: any;
  downloadIconClassName: any;
  downloadIcon: string;
}

export const ScreensPreview = ({
  screen,
  className,
  boxshotClassName,
  frameClassName,
  divClassName,
  divClassNameOverride,
  downloadIconClassName,
  downloadIcon = "https://c.animaapp.com/m8zprqm5u99XUd/img/download-icon-1.png",
}: Props): JSX.Element => {
  return (
    <div
      className={`relative ${screen === "download-gif-preview" ? "border-[1.99px] border-solid" : ""} ${screen === "download-gif-preview" ? "border-[#7f7f7f]" : ""} ${screen === "download-gif-preview" ? "w-[301px]" : "w-[546px]"} ${screen === "download-gif-preview" ? "flex" : ""} ${screen === "download-gif-preview" ? "items-center" : ""} ${screen === "picture-kids" ? "bg-cover" : ""} ${screen === "download-gif-preview" ? "gap-4" : ""} ${screen === "download-gif-preview" ? "px-3 py-2" : ""} ${screen === "download-gif-preview" ? "h-[104px]" : "h-[410px]"} ${screen === "picture-kids" ? "bg-[url(https://c.animaapp.com/m8zprqm5u99XUd/img/aaaabejkyujiidqciqmgjj8btxkykkti5jiqexltvn1ymvxyifx8b9cywoousizo-1.png)]" : ""} ${screen === "download-gif-preview" ? "rounded-xl" : ""} ${screen === "picture-kids" ? "bg-[50%_50%]" : ""} ${screen === "download-gif-preview" ? "bg-black" : ""} ${className}`}
    >
      {["TV-screen", "iphone-screen", "mac-computer-screen"].includes(
        screen,
      ) && (
        <div
          className={`h-[410px] ${screen === "TV-screen" ? "w-[546px]" : ""} ${screen === "iphone-screen" ? "inline-flex" : ""} ${screen === "iphone-screen" ? "flex-col" : ""} ${screen === "iphone-screen" ? "items-center" : ""} ${screen === "TV-screen" ? "bg-cover" : ""} ${screen === "iphone-screen" ? "gap-[10.79px]" : ""} ${screen === "TV-screen" ? "bg-[url(https://c.animaapp.com/m8zprqm5u99XUd/img/tv-2.png)]" : ""} ${screen === "iphone-screen" ? "justify-around" : ""} ${screen === "TV-screen" ? "bg-[50%_50%]" : ""} ${["TV-screen", "iphone-screen"].includes(screen) ? "relative" : ""}`}
        >
          {screen === "TV-screen" && (
            <img
              className="absolute w-[398px] h-56 top-[85px] left-[71px] object-cover"
              alt="Screenshot"
              src="https://c.animaapp.com/m8zprqm5u99XUd/img/screenshot-2024-02-09-at-4-04-1-2.png"
            />
          )}

          {screen === "mac-computer-screen" && (
            <div className="relative w-[546px] h-[410px]">
              <img
                className="absolute w-[333px] h-[189px] top-11 left-[103px] object-cover"
                alt="Screenshot"
                src="https://c.animaapp.com/m8zprqm5u99XUd/img/screenshot-2024-02-09-at-4-31-1-2.png"
              />

              <img
                className="absolute w-[546px] h-[410px] top-0 left-0 object-cover"
                alt="Device pile"
                src="https://c.animaapp.com/m8zprqm5u99XUd/img/device-pile-2.png"
              />
            </div>
          )}

          {screen === "iphone-screen" && (
            <>
              <img
                className="relative w-[546px] h-[410.04px] mt-[-0.02px] mb-[-0.02px] object-cover"
                alt="Mobile"
                src="https://c.animaapp.com/m8zprqm5u99XUd/img/mobile-0819-1.png"
              />

              <div className="flex w-[325px] h-28 items-center gap-[17.26px] px-[12.95px] py-[8.63px] absolute top-[277px] left-[98px] bg-black rounded-[12.95px] border-[2.14px] border-solid border-[#7f7f7f]">
                <img
                  className="relative w-[60.43px] h-[86.32px] object-cover"
                  alt="Boxshot"
                  src="https://c.animaapp.com/m8zprqm5u99XUd/img/boxshot-2.png"
                />

                <div className="flex w-[222.28px] items-center gap-[8.58px] relative mr-[-1.08px]">
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.07px] [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-white text-[21.4px] tracking-[0] leading-[32.2px] whitespace-nowrap">
                      Stranger Things
                    </div>

                    <div className="relative w-fit [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#0071eb] text-[15px] tracking-[0] leading-[19.3px] whitespace-nowrap">
                      Downloading...
                    </div>
                  </div>

                  <img
                    className="relative w-[51.79px] h-[64.74px]"
                    alt="Download icon"
                    src="https://c.animaapp.com/m8zprqm5u99XUd/img/download-icon-1.png"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {screen === "download-gif-preview" && (
        <>
          <img
            className={`relative w-14 h-20 object-cover ${boxshotClassName}`}
            alt="Boxshot"
            src="https://c.animaapp.com/m8zprqm5u99XUd/img/boxshot-2.png"
          />

          <div
            className={`flex w-[206px] items-center gap-[7.95px] relative mr-[-1.00px] ${frameClassName}`}
          >
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div
                className={`relative w-fit mt-[-0.99px] [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-white text-[19.9px] tracking-[0] leading-[29.8px] whitespace-nowrap ${divClassName}`}
              >
                Stranger Things
              </div>

              <div
                className={`relative w-fit [font-family:'Netflix_Sans-Regular',Helvetica] font-normal text-[#0071eb] text-[13.9px] tracking-[0] leading-[17.9px] whitespace-nowrap ${divClassNameOverride}`}
              >
                Downloading...
              </div>
            </div>

            <img
              className={`relative w-12 h-[60px] ${downloadIconClassName}`}
              alt="Download icon"
              src={downloadIcon}
            />
          </div>
        </>
      )}
    </div>
  );
};
