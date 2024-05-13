import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { colors } from 'src/styles';
import { thropyIcon, peoplesIcon, pointIcon } from 'src/assets';
import { TeamType } from 'src/api';
import { formatNumber } from 'src/utils';
import { useBettingStore, useLiveGameStore } from 'src/stores';

import * as S from './styled';

export interface PredictBoxProps {
  setSelectedTeam: React.Dispatch<React.SetStateAction<TeamType | null>>;
  selectedTeam: TeamType | null;
}

export const PredictBox: React.FC<PredictBoxProps> = ({ setSelectedTeam, selectedTeam }) => {
  const { setBetting } = useBettingStore();
  const { liveGame } = useLiveGameStore();

  const navigate = useNavigate();

  const handleTeamClick = (team: TeamType) => {
    setSelectedTeam((prevTeam) => (prevTeam === team ? null : team));
    setBetting({ team, amount: 0 });
  };

  useEffect(() => {
    if (!liveGame) {
      navigate('/');
    }
  }, [liveGame]);

  return (
    <S.PredictContainer>
      {liveGame && (
        <>
          {[liveGame.teamA, liveGame.teamB].map((team, index) => {
            const ratio = team.predictions && Math.floor(team.predictions.ratio * 100);

            return (
              <S.TeamBox
                key={index}
                isLeft={index === 0}
                onClick={() => handleTeamClick(`Team${index === 0 ? 'A' : 'B'}` as TeamType)}
                style={{
                  borderColor:
                    selectedTeam === `Team${index === 0 ? 'A' : 'B'}`
                      ? index === 0
                        ? colors.redTeamColor
                        : colors.blueTeamColor
                      : colors.defaultBorderColor,
                }}
              >
                <S.DeptBox isLeft={index === 0}>{team?.name}</S.DeptBox>
                <S.PercentageCont isLeft={index === 0}>
                  <S.PercentageBox
                    isLeft={index === 0}
                    color={index === 0 ? colors.redTeamColor : colors.blueTeamColor}
                  >
                    {ratio}%
                  </S.PercentageBox>
                  <S.PercentageBar
                    backgroundColor={index === 0 ? colors.redTeamColor : colors.blueTeamColor}
                    percentage={ratio || 0}
                  />
                </S.PercentageCont>
                <S.EtcBox isLeft={index === 0}>
                  <S.Etc isLeft={index === 0}>
                    <img src={pointIcon} width={20} alt="" />
                    <p>총 {formatNumber(team.predictions?.totalAmount || 0)}</p>
                  </S.Etc>
                  <S.Etc isLeft={index === 0}>
                    <img src={peoplesIcon} width={20} alt="" />
                    <p>{team.predictions?.count}명 참여</p>
                  </S.Etc>
                  <S.Etc isLeft={index === 0}>
                    <img src={thropyIcon} width={20} alt="" />
                    <p>{team.predictions?.multiplier.toFixed(2)}배</p>
                  </S.Etc>
                </S.EtcBox>
              </S.TeamBox>
            );
          })}
        </>
      )}
    </S.PredictContainer>
  );
};
