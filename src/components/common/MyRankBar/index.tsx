import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { OnlyJSON, linkBridge } from '@webview-bridge/web';
import { useBridge } from '@webview-bridge/react';

import { pointIcon } from 'src/assets';
import { colors } from 'src/styles';

import * as S from './styled';

interface RankBarProps {
  rank: number;
  name: string;
  point: number;
}

type AppBridgeState = {
  goToPointLogScreen: () => Promise<void>;
};

type AppBridge = {
  getState: () => AppBridgeState;
  setState: (newState: Partial<OnlyJSON<AppBridgeState>>) => void;
  subscribe: (listener: (newState: AppBridgeState, prevState: AppBridgeState) => void) => () => void;
};

export const MyRankBar: React.FC<RankBarProps> = ({ rank, name, point }) => {
  const bridge = linkBridge<AppBridge>({
    onReady: async () => {
      await console.log('bridge is ready');
    },
  });

  const { goToPointLogScreen } = useBridge(bridge.store);

  return (
    <S.MyRankContainer onClick={() => goToPointLogScreen()}>
      <S.RankBarLeft>
        <S.MyRank>{rank}위</S.MyRank>
        <S.MyName>{name}(나)</S.MyName>
      </S.RankBarLeft>
      <S.RankBarRight>
        <S.MyPoint>{point.toLocaleString()}</S.MyPoint>
        <img width={20} src={pointIcon} alt="" />
        <IoIosArrowForward size={20} color={colors.placeHolder} />
      </S.RankBarRight>
    </S.MyRankContainer>
  );
};
