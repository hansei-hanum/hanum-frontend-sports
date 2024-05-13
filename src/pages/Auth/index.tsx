import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from 'src/assets';
import { useAuth } from 'src/hooks';
import useAuthStore from 'src/stores/auth';
import { Spinner } from 'src/components';

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
  const { setToken } = useAuthStore();

  const { mutate, isError, isSuccess, data, isPending } = useAuth();

  const navigate = useNavigate();

  const [isAuthSuccess, setIsAuthSuccess] = useState(false);
  const [code, setCode] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(true);

  const codeFormRef = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    if (code === '') {
      mutate({ phone, code: '' });
    } else {
      mutate({ phone, code });
    }
  };

  const PHONE_REGEX = /^010-?\d{4}-?\d{4}$/;
  const VERIFICATION_CODE_REGEX = /^\d{6}$/;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, isPhone: boolean) => {
    const value = e.target.value;
    const validInput = isPhone ? checkNumber(value) : value;
    setIsDisabled(!RegExp(isPhone ? PHONE_REGEX : VERIFICATION_CODE_REGEX).test(validInput));
    isPhone ? setPhone(validInput) : setCode(validInput);
    isPhone && setIsAuthSuccess(false);
  };

  useEffect(() => {
    const codeFormElement = codeFormRef.current;
    if (!codeFormElement) return;

    const { scrollHeight } = codeFormElement;
    codeFormElement.style.height = isAuthSuccess ? `${scrollHeight}px` : `0`;
  }, [isAuthSuccess]);

  useEffect(() => {
    if (isSuccess && data && data.data) {
      localStorage.setItem('token', data.data);
      setToken(data.data);
      navigate('/');
    }
    isSuccess && setIsAuthSuccess(true);
  }, [data]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  return (
    <S.AuthPageContainer>
      <S.AuthPageInnerContainer>
        <S.AuthPageMainSection>
          <S.AuthPageLogoContainer>
            <S.AuthPageLogo src={Logo} alt="logo" />
            <S.Description>교내스포츠한마당 서비스</S.Description>
          </S.AuthPageLogoContainer>
          <S.AuthPageFormGroup onSubmit={(e) => e.preventDefault()}>
            <S.AuthPageFormInput
              placeholder="전화번호를 입력해주세요"
              onChange={(event) => onChange(event, true)}
              value={phone}
              maxLength={11}
            />
            <S.AuthPageFormLabel>전화번호</S.AuthPageFormLabel>
          </S.AuthPageFormGroup>
          <S.AuthPageFormGroup ref={codeFormRef} onSubmit={(e) => e.preventDefault()}>
            <S.AuthPageFormInput
              placeholder="인증코드를 입력해주세요"
              onChange={(event) => onChange(event, false)}
              value={code}
              maxLength={6}
            />
            <S.AuthPageFormLabel>인증코드</S.AuthPageFormLabel>
          </S.AuthPageFormGroup>
          {isError && (
            <S.AuthErrorDescription>
              알 수 없는 오류가 발생했어요
              <br /> 이 문제가 지속적으로 발생한다면, 한움 팀에 문의 해주세요
            </S.AuthErrorDescription>
          )}
        </S.AuthPageMainSection>
        <S.Button onClick={onSubmit} isDisabled={isDisabled || isPending}>
          {isPending ? <Spinner /> : '로그인'}
        </S.Button>
      </S.AuthPageInnerContainer>
    </S.AuthPageContainer>
  );
};
