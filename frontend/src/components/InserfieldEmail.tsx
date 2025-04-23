import { useState } from "react";
import { InputField } from "./InputField";
import { useNavigate } from "react-router-dom";

interface Props {
  className: any;
  divClassName: any;
  inputFieldDivClassName: any;
  typeGetstartedWrapperTypeGetstartedClassName: any;
  typeGetstartedWrapperDivClassName: any;
  value?: string;
}

export const InserfieldEmail = ({
  className,
  divClassName,
  inputFieldDivClassName,
}: Props): JSX.Element => {
  
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleRegister = async () => { //check if there is a function to check an email exist or not?
    try {
      const res = await fetch('/api/auth/register', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Invalid credentials')
      const { token } = await res.json()
  
      // e.g. store JWT, then… if email is already registered, navigate to sign in page
      // else navigate to sign up page
      navigate('/signin')
    } catch (err: any) {
      console.error(err)
      alert(err.message)
    }
  }

  return (
    <div
      className={`inline-flex flex-col items-center gap-4 relative ${className}`}
    >
      <p
        className={`relative w-fit mt-[-1.00px] font-regular-title4 font-[number:var(--regular-title4-font-weight)] text-white text-[length:var(--regular-title4-font-size)] text-center tracking-[var(--regular-title4-letter-spacing)] leading-[var(--regular-title4-line-height)] whitespace-nowrap [font-style:var(--regular-title4-font-style)] ${divClassName}`}
      >
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="inline-flex items-start justify-center gap-2 relative flex-[0_0_auto]">
        <InputField
          className={inputFieldDivClassName}
          size="large"
          state="default"
          type="email"
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className={`cursor-pointer all-[unset] box-border flex w-52 h-14 items-center gap-4 px-6 py-3 relative bg-[#e50814] rounded ${className}`}
          onClick={handleRegister}
        >
          <div
            className={`relative w-fit font-medium-title3 font-[number:var(--medium-title3-font-weight)] text-white text-[length:var(--medium-title3-font-size)] text-center tracking-[var(--medium-title3-letter-spacing)] leading-[var(--medium-title3-line-height)] whitespace-nowrap [font-style:var(--medium-title3-font-style)] ${divClassName}`}
          >
            Get Started
          </div>
    
          <img
            className="relative w-[10.34px] h-[17.55px]"
            alt="Polygon"
            src="https://c.animaapp.com/m8zprqm5u99XUd/img/polygon-3.svg"
          />
        </button>
      </div>
    </div>
  );
};
