import React from 'react';
import * as S from './styled';
import { pointIcon } from '@assets';
import { Balance } from '@constants';

export const MyPointBox: React.FC = () => {
    const myPoint = Balance.data.balance;
    const formatNumber = (myPoint: number): string => {
        const point = myPoint.toString().split(/(?=(?:\d{3})+(?!\d))/);
        return point.join(',');
    };

    return (
        <S.MyPointContainer>
            <S.MyPointBox>내 포인트: {formatNumber(myPoint)}</S.MyPointBox>
            <S.MyPointBox>
                <img src={pointIcon} width={20} />
            </S.MyPointBox>
        </S.MyPointContainer>
    );
};
