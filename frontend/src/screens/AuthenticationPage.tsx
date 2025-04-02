import AuthenticationFooter from "../components/Footers/AuthenticationFooter";
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
          <AuthenticationFooter></AuthenticationFooter>
          <Login></Login>
        </div>
      </div>
    </div>
  );
};

