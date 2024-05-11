import React from 'react';

import { Header, Logs } from 'src/components';
import { pointIcon } from 'src/assets';
import { Balance } from 'src/constants';

import * as S from './styled';

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
