import styled from '@emotion/styled';

import { colors } from 'src/styles';

interface CategoryItemProps {
  isSelected: boolean;
  width: number;
}

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${colors.appBackground};
  padding: 0 20px;
  padding-bottom: 10px;
`;

export const CategoryItem = styled.div<CategoryItemProps>`
  height: 33px;
  width: ${(props) => props.width}px;
  border-radius: 20px;
  color: ${({ isSelected }) => (isSelected ? '#FFFFFF' : '')};
  background-color: ${({ isSelected }) => (isSelected ? colors.blueTeamColor : '#F9F9F9')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 200ms ease-out;
`;
