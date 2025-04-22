import { Logo } from '../Logo'
import { Button } from '../Button'
import { strings } from '../../strings/strings'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AuthenticationHeader = () => {
    
    const navigate = useNavigate();

    const moveToSignIn = async () => {
        navigate('/');
      }

  return (
    <div className="flex justify-between relative w-[1200px] items-start pt-6 pb-7 px-12 h-[92px] !left-[120px] !bg-transparent !top-0">
        <Logo className="!bg-[unset]" size="medium" type="word" />
        <div className="inline-flex items-center flex-[0_0_auto] relative gap-6">
            <>
                <div className="flex w-[131px] h-8 items-center justify-center gap-4 pl-2 pr-4 py-1.5 relative bg-[#00000080] rounded border border-solid border-[#545454]">
                    <div className="inline-flex items-center justify-end gap-2 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px]">
                        <img className="relative w-4 h-4" alt="Translator icon" />
                        <div className="relative w-fit mt-[-1.00px] font-medium-body font-[number:var(--medium-body-font-weight)]
                         text-white text-[length:var(--medium-body-font-size)] tracking-[var(--medium-body-letter-spacing)]
                          leading-[var(--medium-body-line-height)] whitespace-nowrap [font-style:var(--medium-body-font-style)]">
                            English
                        </div>
                    </div>
                    <img className="relative w-[7.79px] h-[3.75px]" alt="Polygon" />
                </div>
                <Button size="small" state="default" type="sign-in" onClick={moveToSignIn}>{strings.login.signIn}</Button>
            </>
        </div>
    </div>
  )
}

export default AuthenticationHeader
