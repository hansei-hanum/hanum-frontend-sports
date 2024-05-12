import React, { useState } from 'react';

import { SubmitButton, PredictBox } from 'src/components';

import * as S from './styled';

export const Predict: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<'team_a' | 'team_b' | null>(null);

  return (
    <section>
      <S.PredictSectionContainer>
        <S.PredictSectionInnerContainer>
          <S.SituationBox>
            <S.ColorBox />
            예측 진행 중
          </S.SituationBox>
          <S.ExplainBox>
            승리를 예상하는 팀을 <br />
            선택해 주세요!
          </S.ExplainBox>
          <S.PredictContainer>
            <PredictBox setSelectedTeam={setSelectedTeam} selectedTeam={selectedTeam} />
          </S.PredictContainer>
        </S.PredictSectionInnerContainer>
        <SubmitButton isDisabled={!selectedTeam} />
      </S.PredictSectionContainer>
    </section>
  );
};
