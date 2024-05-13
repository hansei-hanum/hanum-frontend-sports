import React from 'react';

import { pointIcon } from 'src/assets';
import { colors } from 'src/styles';
import { GetMyPointResponse } from 'src/api';

import { Spinner } from '../Spinner';

import * as S from './styled';

export interface MyPointBoxProps {
  isLoading: boolean;
  data?: GetMyPointResponse;
}
export const MyPointBox: React.FC<MyPointBoxProps> = ({ isLoading, data }) => {
  return (
    <S.MyPointBox>
      내 포인트:{' '}
      {isLoading ? (
        <Spinner size="18px" color={colors.placeHolder} style={{ marginLeft: 10 }} />
      ) : (
        <>
          {data && data.amount.toLocaleString()}
          <img src={pointIcon} width={20} alt="" />
        </>
      )}
    </S.MyPointBox>
  );
};
