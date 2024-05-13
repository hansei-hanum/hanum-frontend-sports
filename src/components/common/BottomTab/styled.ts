import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const BottomTabContainer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: ${colors.Background};
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BottomTabUl = styled.ul`
  padding: 10px 20px;
  max-width: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomTabWrapper = styled(Link)<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? 'black' : colors.placeHolder)};
  text-decoration: none;
`;

export const BottomTabItem = styled.li`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  align-items: center;
`;
