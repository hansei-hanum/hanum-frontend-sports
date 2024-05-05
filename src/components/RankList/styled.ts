import styled from '@emotion/styled';
import { colors } from '../../styles';

export const RankSectionContainer = styled.section`
    height: 100vh;
    width: 100%;
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-color: ${colors.rankListBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start
    row-gap: 0.6rem;
`;
