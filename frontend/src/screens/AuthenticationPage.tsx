import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Login from "../features/login";

export const AuthenticationPage = (): JSX.Element => {

  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-primaryblack w-[1440px] h-[1209px]">
        <div className="relative h-[1209px] bg-[url(https://c.animaapp.com/m8yjaf66Id2LP9/img/hero-image.png)] bg-cover bg-[50%_50%]">
          <Header
            className="!gap-[744px] ![justify-content:unset] !absolute !left-[120px] !bg-transparent !top-0"
            hasCombo={false}
            type= "landing-page"
          />
          <Footer
            className="!border-[unset] !h-[366px] ![border-top-style:unset] !absolute !left-0 !border-t-[unset] !bg-transparentblack-60 !top-[843px]"
            divClassName="!text-greygrey-100"
            divClassName1="!text-greygrey-100"
            divClassName2="!text-greygrey-100"
            divClassName3="!text-greygrey-100"
            divClassName4="!text-greygrey-100"
            divClassName5="!text-greygrey-100"
            divClassName6="!text-greygrey-100"
            divClassName7="!text-greygrey-100"
            divClassName8="!text-primarywhite"
            divClassNameOverride="!text-greygrey-100"
            frameClassName="!gap-[21px]"
            hasDiv={false}
            hasDiv1={false}
            hasFrame={false}
            hasFrame1={false}
            href="https://www.netflix.com/dnsspi"
            questionsCallClassName="!text-greygrey-100"
            text="Netflix Shop"
            text1="Terms of Use"
            text2="Privacy"
            text3="Cookie Preferences"
            text4="Corporate Information"
            text5="Do Not Sell or Share My Personal Information"
            text6="Ad Choices"
            type="landing-page"
            visible={false}
          />
          <Login></Login>
        </div>
      </div>
    </div>
  );
};

