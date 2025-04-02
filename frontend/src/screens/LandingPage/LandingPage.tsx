import { Blocks } from "./sections/Blocks";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { HeroImageSection } from "./sections/HeroImageSection";
import { HomeSubPreview } from "./sections/HomeSubPreview";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-primaryblack w-[1440px] h-[4280px] relative">
        <div className="absolute w-[1440px] h-[2931px] top-px left-0">
          <HeroImageSection />
          <Blocks />
          <HomeSubPreview />
        </div>
        <Frame />
        <Footer />
      </div>
    </div>
  );
};
