import React from 'react';

import { RankBox } from 'src/components';
import { result } from 'src/constants';

import * as S from './styled';

export const RankList: React.FC = () => {
  const sortedUsers = Object.values(result.data).sort((a, b) => b.total_points - a.total_points);

  const users = sortedUsers.map((userData, index) => (
    <RankBox key={index} rank={index + 1} name={userData.username} point={userData.total_points} dept={userData.dept} />
  ));

  return (
    <section>
      <S.RankSectionContainer>{users}</S.RankSectionContainer>
    </section>
  );
};
