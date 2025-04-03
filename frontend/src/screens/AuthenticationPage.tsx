import AuthenticationFooter from "../components/Footers/AuthenticationFooter";
import AuthenticationHeader from "../components/Headers/AuthenticationHeader";
import Login from "../features/login";

export const AuthenticationPage = (): JSX.Element => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-primaryblack w-[1440px] h-[1209px]">
        <div className="relative h-[1209px] bg-[url(https://c.animaapp.com/m8yjaf66Id2LP9/img/hero-image.png)] bg-cover bg-[50%_50%]">
          <AuthenticationHeader></AuthenticationHeader>
          <AuthenticationFooter></AuthenticationFooter>
          <Login></Login>
        </div>
      </div>
    </div>
  );
};