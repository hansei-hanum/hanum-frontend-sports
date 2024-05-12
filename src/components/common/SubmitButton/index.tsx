import React from 'react';

import { Spinner } from '../Spinner';

import * as S from './styled';

interface SubmitButtonProps {
  isDisabled: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isDisabled, onClick, isLoading }) => {
  return (
    <S.SubmitContainer isDisabled={isDisabled || isLoading} onClick={!isDisabled ? onClick : undefined}>
      <S.SubmitBox>{isLoading && <Spinner />}예측하기</S.SubmitBox>
    </S.SubmitContainer>
  );
};
