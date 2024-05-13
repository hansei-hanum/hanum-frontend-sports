import React from 'react';
import { useLocation } from 'react-router-dom';

import { BOTTOM_TAB_MENUS } from 'src/constants';

import * as S from './styled';

export const BottomTab: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <S.BottomTabContainer>
      <S.BottomTabUl>
        {BOTTOM_TAB_MENUS.map(({ title, icon, href }) => (
          <S.BottomTabWrapper to={href} key={title} isActive={pathname === href}>
            <S.BottomTabItem>
              {icon}
              <span>{title}</span>
            </S.BottomTabItem>
          </S.BottomTabWrapper>
        ))}
      </S.BottomTabUl>
    </S.BottomTabContainer>
  );
};
