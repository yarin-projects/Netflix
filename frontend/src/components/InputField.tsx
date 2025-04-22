interface InputFieldProps {
  size: "medium" | "large";
  type: "email-or-phone" | "password" | "email";
  state: "default";
  sizeMediumTypeClassName?: any;
  className: any;
  inputType?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({size, type, state, sizeMediumTypeClassName, className, inputType}: InputFieldProps): JSX.Element => {
  return (
    <input
      className={`border border-solid border-[#7f7f7f] w-[314px] pl-4 pr-6 py-2 h-14 rounded bg-[#00000080] 
        relative font-medium-body tracking-[var(--medium-body-letter-spacing)] [font-style:var(--medium-body-font-style)] 
        text-[length:var(--medium-body-font-size)] text-[#bdbcbb] font-[number:var(--medium-body-font-weight)] 
        text-center whitespace-nowrap leading-[var(--medium-body-line-height)] ${className}`}
      placeholder={type === "email-or-phone" ? "Email or phone number" : type === "password" ? "Password" : undefined}
      type={inputType}
    />
  );
};
