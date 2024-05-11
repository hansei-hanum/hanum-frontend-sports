import React from 'react';

import * as S from './styled';

import { Bet, Summary, MatchList } from '@constants';

export const PredictLogBox: React.FC = () => {
    const myBetGameId = Bet.data.gameId;
    const gameId = Summary.data.gameId;

    const myBetTeam = Bet.data.teamId;
    const winTeam = Summary.data.winnerTeamId;

    const match = MatchList.data.games[0].gameType;

    const isSameGame = (myBetTeamId: number, gameId: number) => {
        const isSameGame = myBetTeamId == gameId ? true : false;
        return isSameGame ? (whoWin(myBetTeam, winTeam) ? '예측 성공!' : '예측 실패!') : '경기가 다릅니다';
    };

    const whoWin = (myBet: number, winTeam: number) => {
        return myBet == winTeam ? true : false;
    };
    return (
        <S.PredictCont>
            <S.WinLoseBox>{isSameGame(myBetGameId, gameId)}</S.WinLoseBox>
            <S.MatchTypeBox>{match}</S.MatchTypeBox>
            <S.PredictBox></S.PredictBox>
        </S.PredictCont>
    );
};
