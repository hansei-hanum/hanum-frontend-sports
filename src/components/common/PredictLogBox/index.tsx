import React from 'react';

import { Bet, Summary, MatchList } from 'src/constants';
import { colors } from 'src/styles';

import { ScheduleProps, isButton } from '../gameSchedule';
import { SportGameType, Team } from '../Team';
import { SubmitButton } from '../SubmitButton';

import * as S from './styled';

export const PredictLogBox: React.FC<ScheduleProps & isButton> = ({
  scheduleData,

  isbutton,
}) => {
  const { gameType, redTeam, blueTeam, isDuring } = scheduleData;

  const myBetGameId = Bet.data.gameId;
  const gameId = Summary.data.gameId;

  const myBetTeam = Bet.data.teamId;
  const winTeam = Summary.data.winnerTeamId;

  const match = MatchList.data.games[0].gameType;
  console.log(gameType, match);

  const isSameGame = (myBetTeamId: number, gameId: number) => {
    const isSameGame = myBetTeamId == gameId ? true : false;
    return isSameGame ? (whoWin(myBetTeam, winTeam) ? '예측 성공!' : '예측 실패!') : '경기가 다릅니다';
  };

  const whoWin = (myBet: number, winTeam: number) => {
    return myBet === winTeam ? true : false;
  };

  return (
    <S.SheduleContainer>
      <S.Schedule isEnd={scheduleData.isEnd}>
        <S.ScheduleTop>
          <S.PredictLogEndText isSuccess={whoWin(myBetTeam, winTeam)}>
            {isSameGame(myBetGameId, gameId)}
          </S.PredictLogEndText>
          <p>{gameType}</p>
        </S.ScheduleTop>
        <S.Content isEnd={scheduleData.isEnd}>
          <S.AllBox>
            <Team
              textAlign="right"
              isEnd={scheduleData.isEnd}
              isDuring={isDuring}
              teamData={redTeam}
              alignItems="flex-end"
              color={colors.redTeamColor}
              sportGameType={SportGameType.Basketball}
              win={true}
            />
            <S.IconBox>:</S.IconBox>
            <Team
              textAlign="left"
              isEnd={scheduleData.isEnd}
              isDuring={isDuring}
              alignItems="flex-start"
              teamData={blueTeam}
              color={colors.blueTeamColor}
              sportGameType={SportGameType.Basketball}
              win={false}
            />
          </S.AllBox>
          {isbutton ? (
            <S.ButtonBox>
              <SubmitButton isChangeColor={false} />
            </S.ButtonBox>
          ) : (
            <S.ButtonBox />
          )}
        </S.Content>
      </S.Schedule>
    </S.SheduleContainer>
  );
};
