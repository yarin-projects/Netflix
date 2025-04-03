import netflixLogo from "../assets/netflix-2015-n-logo-1.png";
import wordmark from "../assets/wordmark-3.png";

interface Props {
  size: "large" | "medium" | "small";
  type: "word" | "letter";
  className: any;
}

export const Logo = ({ size, type, className }: Props): JSX.Element => {
  return (
    <div
      className={`bg-cover bg-[50%_50%] relative ${size === "medium" ? "w-[148px]" : (size === "small") ? "w-[93px]" : type === "letter" ? "w-[22px]" : ""} ${size === "small" ? "h-[25px]" : "h-10"} ${className}`}
      style={{ backgroundImage: `url(${type === "letter" ? netflixLogo : wordmark})` }}
    />
  );
};
