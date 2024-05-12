import React, { useState } from 'react';

import { PredictBox, SubmitButton } from 'src/components';
import { useAppBridge } from 'src/hooks';

import * as S from './styled';

export const PredictSection: React.FC = () => {
  const { goToScreen } = useAppBridge();

  const [selectedTeam, setSelectedTeam] = useState<'team_a' | 'team_b' | null>(null);

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
        <SubmitButton isDisabled={!selectedTeam} onClick={() => goToScreen()} />
      </S.PredictSectionContainer>
    </section>
  );
};
