import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PredictBox, SubmitButton } from 'src/components';
import { TeamType } from 'src/api';

import * as S from './styled';

export const PredictSection: React.FC = () => {
  const navigate = useNavigate();

  const [selectedTeam, setSelectedTeam] = useState<TeamType | null>(null);

  return (
    <section>
      <S.PredictSectionContainer>
        <S.PredictSectionInnerContainer>
          <S.SituationBox>
            <S.ColorBox />
            예측 진행 중
          </S.SituationBox>
          <S.Description>
            승리를 예상하는 팀을 <br />
            선택해 주세요!
          </S.Description>
          <S.PredictContainer>
            <PredictBox setSelectedTeam={setSelectedTeam} selectedTeam={selectedTeam} />
          </S.PredictContainer>
        </S.PredictSectionInnerContainer>
        <SubmitButton isDisabled={!selectedTeam} onClick={() => navigate('betting')} />
      </S.PredictSectionContainer>
    </section>
  );
};
