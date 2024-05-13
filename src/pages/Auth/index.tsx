import React, { useEffect, useRef, useState } from 'react';

import { Logo } from 'src/assets';

import * as S from './styled';

export interface AuthValues {
  phone: string;
  code: string;
}

export const checkNumber = (text: string) => {
  let newText = '';
  const numbers = '0123456789';
  for (let i = 0; i < text.length; i++) {
    if (numbers.indexOf(text[i]) > -1) {
      newText = newText + text[i];
    } else {
      newText = newText.replace(text[i], '');
    }
  }
  return newText;
};

export const checkString = (text: string) => {
  let newText = '';
  const notKorean =
    '0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/`~|₩~`"\'' + 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < text.length; i++) {
    if (notKorean.indexOf(text[i]) < 0) {
      newText = newText + text[i];
    } else {
      newText = newText.replace(text[i], '');
    }
  }
  return newText;
};

export const AuthPage: React.FC = () => {
  const [isAuthScuccess, setIsAuthSuccess] = useState(false);

  const [code, setCode] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(true);

  const codeFormRef = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    phone !== '' ? setIsAuthSuccess(true) : setIsAuthSuccess(false);
  };

  const PHONE_REGEX = /^010-?\d{4}-?\d{4}$/;
  const VERIFICATION_CODE_REGEX = /^\d{6}$/;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, isPhone: boolean) => {
    const value = e.target.value;
    const validInput = isPhone ? checkNumber(value) : checkString(value);
    setIsDisabled(!RegExp(isPhone ? PHONE_REGEX : VERIFICATION_CODE_REGEX).test(validInput));
    isPhone ? setPhone(validInput) : setCode(validInput);
    isPhone && setIsAuthSuccess(false);
  };

  useEffect(() => {
    console.log('isAuthScuccess', isAuthScuccess);
    const codeFormElement = codeFormRef.current;
    if (!codeFormElement) return;

    const { scrollHeight } = codeFormElement;
    codeFormElement.style.height = !isAuthScuccess ? '0' : `${scrollHeight}px`;
  }, [isAuthScuccess]);

  return (
    <S.AuthPageContainer>
      <S.AuthPageInnerContainer>
        <S.AuthPageMainSection>
          <S.AuthPageLogoContainer>
            <S.AuthPageLogo src={Logo} alt="logo" />
            <S.Description>한세어울림한마당 서비스</S.Description>
          </S.AuthPageLogoContainer>
          <S.AuthPageFormGroup>
            <S.AuthPageFormInput
              placeholder="전화번호를 입력해주세요"
              onChange={(event) => onChange(event, true)}
              value={phone}
              maxLength={11}
            />
            <S.AuthPageFormLabel>전화번호</S.AuthPageFormLabel>
          </S.AuthPageFormGroup>
          <S.AuthPageFormGroup ref={codeFormRef}>
            <S.AuthPageFormInput
              placeholder="인증코드를 입력해주세요"
              onChange={(event) => onChange(event, false)}
              value={code}
              maxLength={6}
            />
            <S.AuthPageFormLabel>인증코드</S.AuthPageFormLabel>
          </S.AuthPageFormGroup>
        </S.AuthPageMainSection>
        <S.Button onClick={onSubmit} isDisabled={isDisabled}>
          로그인
        </S.Button>
      </S.AuthPageInnerContainer>
    </S.AuthPageContainer>
  );
};
