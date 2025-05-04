import { strings } from "../strings/strings";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { SmallAvatar } from "./SmallAvatar";
import { FaBell, FaSearch } from 'react-icons/fa';

interface HeaderProps {//check the Headers folder I divided the headers into 2 types
  type: "home-page" | "landing-page"; 
  className?: string;
  hasCombo?: boolean;
  buttonDivClassName?: string;
  buttonTypeSigninSizeClassName?: string;
  divClassName?: string;
}

export const Header = ({ type }: HeaderProps): JSX.Element => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-14 
        ${type === "home-page" ? "h-[68px] bg-gradient-to-b from-black/75 to-transparent" : "h-[92px]"}`}>
          
      {type === "landing-page" && (
        <Logo className="!bg-[unset]" size="medium" type="word" />)}

      <div className={`inline-flex items-center flex-[0_0_auto] relative ${type === "home-page" ? "gap-[45px]" : "gap-6"}`}>
        {type === "landing-page" && (
          <>
            <div className="flex w-[131px] h-8 items-center justify-center gap-4 pl-2 pr-4 py-1.5 relative bg-[#00000080] rounded border border-solid border-[#545454]">
              <div className="inline-flex items-center justify-end gap-2 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px]">
                <img className="relative w-4 h-4" alt="Translator icon" />

                <div className="relative w-fit mt-[-1.00px] font-medium text-white text-sm tracking-[0] leading-[17px] whitespace-nowrap">
                  English
                </div>
              </div>

              <img className="relative w-[7.79px] h-[3.75px]" alt="Polygon" />
            </div>

            <Button size="small" state="default" type="sign-in">{strings.login.signIn}</Button>
          </>
        )}

        {type === "home-page" && (
          <>
            <Logo className="!bg-[unset]" size="small" type="word" />
            <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
              <a href="#" className="text-white hover:text-white/80 text-sm font-medium">
                Home
              </a>

              <a href="#" className="text-[#e5e5e5] hover:text-white/80 text-sm">
                TV Shows
              </a>

              <a href="#" className="text-[#e5e5e5] hover:text-white/80 text-sm">
                Movies
              </a>

              <a href="#" className="text-[#e5e5e5] hover:text-white/80 text-sm">
                New &amp; Popular
              </a>

              <a href="#" className="text-[#e5e5e5] hover:text-white/80 text-sm">
                My List
              </a>

              <a href="#" className="text-[#e5e5e5] hover:text-white/80 text-sm">
                Browse by Languages
              </a>
            </div>
          </>
        )}
      </div>

      {type === "home-page" && (
        <div className="flex items-center gap-6">
          <div className="w-5 h-5 text-white cursor-pointer hover:text-white/80">
            <FaSearch />
          </div>
          <div className="w-5 h-5 text-white cursor-pointer hover:text-white/80">
            <FaBell />
          </div>
          <SmallAvatar size="small" type="user-profile-menu" />
        </div>
      )}
    </div>
  );
};
