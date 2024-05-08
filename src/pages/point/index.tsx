import React from 'react';
import { Header } from 'components/common';
import { Logs } from 'components/point/pointLog';
import * as S from './styled';
import pointIcon from 'assets/icons/point.png';
import { Balance } from 'constants/balance';

export const PointPage: React.FC = () => {
    return (
        <>
            <Header hasIcon={false} text="포인트 내역" />
            <S.MyPointBox>
                <S.Description>교내스포츠한마당 포인트</S.Description>
                <S.MyPoint>
                    <p>{Balance.data.balance}</p>
                    <img width={35} src={pointIcon} alt="" />
                </S.MyPoint>
            </S.MyPointBox>
            <Logs />
        </>
    );
};
