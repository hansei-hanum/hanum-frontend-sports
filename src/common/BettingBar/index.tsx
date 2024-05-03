import React from 'react';
import * as S from './styled';

export const BettingBar: React.FC = () => {
    return (
        <S.BettingContainer>
            <S.BettingBox type="number" placeholder="베팅할 금액을 입력해주세요." />
        </S.BettingContainer>
    );
};
