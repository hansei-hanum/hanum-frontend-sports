import React from 'react';

import * as S from './styled';

interface SubmitButtonProps {
  isDisabled: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isDisabled }) => {
  return (
    <S.SubmitContainer isDisabled={isDisabled}>
      <S.SubmitBox>예측하기</S.SubmitBox>
    </S.SubmitContainer>
  );
};
