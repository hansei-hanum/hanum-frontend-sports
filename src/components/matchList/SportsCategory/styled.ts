import styled from "styled-components";
import { colors } from "../../../../styles";

interface CategoryItemProps {
  isSelected: boolean;
}

export const CategoryContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const CategoryItem = styled.div<CategoryItemProps>`
  width: 60px;
  height: 35px;
  border-radius: 20px;
  color: ${({ isSelected }) => (isSelected ? "#FFFFFF" : "")};
  background-color: ${({ isSelected }) =>
    isSelected ? colors.blueTeamColor : "#F9F9F9"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
