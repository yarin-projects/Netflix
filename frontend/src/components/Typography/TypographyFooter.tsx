type TypographyFooterProps = {
    children: React.ReactNode;
}

const TypographyFooter = ({children} : TypographyFooterProps) => {
  return (
    <div className="[font-family:'Netflix_Sans-Regular',Helvetica] w-[267px] mt-[-1.00px] 
    tracking-[0] text-sm text-[#b3b3b3] underline font-normal leading-[18px] relative">
    {children}
    </div>
  )
}

export default TypographyFooter
