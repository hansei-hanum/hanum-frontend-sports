import React from 'react';

import * as S from './styled';

import { Bet, Summary, MatchList } from '@constants';

export const PredictLogBox: React.FC = () => {
    const myBetTeamId = Bet.data.gameId;
    const gameId = Summary.data.gameId;
    const myBet = Bet.data.teamId;
    const winTeam = Summary.data.winnerTeamId;
    const match = MatchList.data.games[0].gameType;

    const isSameGame = (myBetTeamId: number, gameId: number) => {
        return myBetTeamId == gameId ? true : false;
    };

    const whoWin = (myBet: number, winTeam: number, isSameGame: boolean) => {
        return isSameGame == true ? (myBet == winTeam ? true : false) : 'NoSame';
    };
    return (
        <S.PredictCont>
            <S.WinLoseBox>
                {whoWin(myBet, winTeam, isSameGame(myBetTeamId, gameId)) ? '예측 성공!' : '예측 실패!'}
            </S.WinLoseBox>
            <S.MatchTypeBox>{match}</S.MatchTypeBox>
            <S.PredictBox></S.PredictBox>
        </S.PredictCont>
    );
};
