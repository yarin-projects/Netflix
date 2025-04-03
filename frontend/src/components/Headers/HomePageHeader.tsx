import { Logo } from "../Logo"
import { SmallAvatar } from "../SmallAvatar"

const HomePageHeader = () => {
  return (
    <div className="flex justify-between relative w-[1440px] items-center px-[58px] py-0 h-[68px]">
      <div className="inline-flex items-center flex-[0_0_auto] relative gap-[45px]">
            <>
                <Logo className="!bg-[unset]" size="small" type="word" />
                <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[17px] whitespace-nowrap">
                    Home
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-regular-smallbody font-[number:var(--regular-smallbody-font-weight)] text-greygrey-10 text-[length:var(--regular-smallbody-font-size)] tracking-[var(--regular-smallbody-letter-spacing)] leading-[var(--regular-smallbody-line-height)] whitespace-nowrap [font-style:var(--regular-smallbody-font-style)]">
                      TV Shows
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-regular-smallbody font-[number:var(--regular-smallbody-font-weight)] text-greygrey-10 text-[length:var(--regular-smallbody-font-size)] tracking-[var(--regular-smallbody-letter-spacing)] leading-[var(--regular-smallbody-line-height)] whitespace-nowrap [font-style:var(--regular-smallbody-font-style)]">
                      Movies
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-regular-smallbody font-[number:var(--regular-smallbody-font-weight)] text-greygrey-10 text-[length:var(--regular-smallbody-font-size)] tracking-[var(--regular-smallbody-letter-spacing)] leading-[var(--regular-smallbody-line-height)] whitespace-nowrap [font-style:var(--regular-smallbody-font-style)]">
                      New &amp; Popular
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-regular-smallbody font-[number:var(--regular-smallbody-font-weight)] text-greygrey-10 text-[length:var(--regular-smallbody-font-size)] tracking-[var(--regular-smallbody-letter-spacing)] leading-[var(--regular-smallbody-line-height)] whitespace-nowrap [font-style:var(--regular-smallbody-font-style)]">
                      My List
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-regular-smallbody font-[number:var(--regular-smallbody-font-weight)] text-greygrey-10 text-[length:var(--regular-smallbody-font-size)] tracking-[var(--regular-smallbody-letter-spacing)] leading-[var(--regular-smallbody-line-height)] whitespace-nowrap [font-style:var(--regular-smallbody-font-style)]">
                      Browse by Languages
                    </div>
                </div>
            </>
        </div>
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
            <img className="relative w-9 h-8" alt="Icon medium search" />
            <img className="relative w-9 h-8" alt="Icon medium" />
            <SmallAvatar size="small" type="user-profile-menu" />
        </div>
    </div>
  )
}

export default HomePageHeader
