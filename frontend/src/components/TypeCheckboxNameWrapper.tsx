interface Props {
  type: "checkbox";
  name: "remember-me";
  state: "default";
  boolean1: boolean;
  className: any;
  divClassName: any;
}

export const TypeCheckboxNameWrapper = ({
  type,
  name,
  state,
  boolean1,
  className,
  divClassName,
}: Props): JSX.Element => {
  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-3 relative ${className}`}
    >
      <div className="relative w-[18px] h-[18px] rounded-sm border border-solid border-[#ffffff59]" />

      <div
        className={`relative w-fit mt-[-1.00px] font-regular-body font-[number:var(--regular-body-font-weight)] text-white text-[length:var(--regular-body-font-size)] tracking-[var(--regular-body-letter-spacing)] leading-[var(--regular-body-line-height)] [font-style:var(--regular-body-font-style)] ${divClassName}`}
      >
        Remember me
      </div>
    </button>
  );
};
