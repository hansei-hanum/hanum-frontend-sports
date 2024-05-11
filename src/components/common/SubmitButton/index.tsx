import React from 'react';

import * as S from './styled';

interface isChangeColor {
  isChangeColor: boolean;
}

export const SubmitButton: React.FC<isChangeColor> = ({ isChangeColor }) => {
  return (
    <S.SubmitContainer isChangeColor={isChangeColor}>
      <S.SubmitBox>예측하기</S.SubmitBox>
    </S.SubmitContainer>
  );
};
