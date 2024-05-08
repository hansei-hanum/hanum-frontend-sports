import React from 'react';
import { Header } from '@common';
import { Logs } from '@components';
import * as S from './styled';
import { pointIcon } from '@assets';
import { Balance } from '@constants';

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
