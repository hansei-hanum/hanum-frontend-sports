import React from 'react';

import * as S from './styled';

interface SubmitButtonProps {
  isDisabled: boolean;
  onClick?: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isDisabled, onClick }) => {
  return (
    <S.SubmitContainer isDisabled={isDisabled} onClick={onClick}>
      <S.SubmitBox>예측하기</S.SubmitBox>
    </S.SubmitContainer>
  );
};
