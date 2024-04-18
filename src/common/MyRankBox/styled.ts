import styled from 'styled-components';
import { fonts } from '../../styles/font';

export const MyRankContainer = styled.div`
    width: 100%;
    height: 35px;
    border-radius: 50px;
    background-color: #f9f9f9;
    margin-top: 15px;
    font-size: 17px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    padding: 0 10px;
`;

export const RankBarLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const RankBarRight = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    font-family: ${fonts.bold};
`;

export const MyRank = styled.p`
    color: gray;
`;

export const MyName = styled.p``;

export const MyPoint = styled.p`
    font-size: 14px;
`;

export const RankBarIcon = styled.span``;
