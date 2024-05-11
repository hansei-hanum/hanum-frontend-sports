import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Bridge, OnlyJSON, linkBridge } from '@webview-bridge/web';
import { useBridge } from '@webview-bridge/react';

import { pointIcon } from 'src/assets';
import { colors } from 'src/styles';

import * as S from './styled';

interface RankBarProps {
  children: React.ReactNode;
}

type AppBridgeState = {
  goToPointLogScreen: () => Promise<void>;
};

type AppBridge = {
  getState: () => AppBridgeState;
  setState: (newState: Partial<OnlyJSON<AppBridgeState>>) => void;
  subscribe: (listener: (newState: AppBridgeState, prevState: AppBridgeState) => void) => () => void;
};

export const MyRankBar: React.FC<RankBarProps> = ({ children }) => {
  const bridge = linkBridge<AppBridge>({
    onReady: async () => {
      await console.log('bridge is ready');
    },
  });

  const { goToPointLogScreen } = useBridge<Bridge, AppBridgeState>(bridge.store);

  return (
    <S.MyRankContainer onClick={() => goToPointLogScreen()}>
      {/* <S.RankBarLeft>
        <S.MyRank>{rank}위</S.MyRank>
        <S.MyName>{name}(나)</S.MyName>
      </S.RankBarLeft>
      <S.RankBarRight>
        <S.MyPoint>{point.toLocaleString()}</S.MyPoint>
        <img width={20} src={pointIcon} alt="" />
        <IoIosArrowForward size={20} color={colors.placeHolder} />
      </S.RankBarRight> */}
      {children}
    </S.MyRankContainer>
  );
};
