import styled from '@emotion/styled';

interface RankingBoxStyleProps {
    rank: number;
}

const colors = {
    border: ['#ffd600', '#DCDCDC', '#D48207', '#FFFFFF'],
    rank: ['#ffd600', '#DCDCDC', '#D48207', '#A3A3A3'],
    name: ['#ffd600', '#DCDCDC', '#D48207', '#000000'],
};

export const RankingBox = styled.div<RankingBoxStyleProps>`
    width: 100%;
    height: 70px;
    border: 3px solid ${({ rank }) => colors.border[rank - 1] || '#FFFFFF'};
    border-radius: 15px;
    background-color: #ffffff;
    margin-top: 15px;
    font-size: 17px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    padding: 0 10px;
    box-shadow: 0px 2px 8px 4px rgba(0, 0, 0, 0.1);
`;

export const Rank = styled.p<RankingBoxStyleProps>`
    color: ${({ rank }) => colors.rank[rank - 1] || '#A3A3A3'};
    font-size: 25px;
`;

export const Name = styled.p<RankingBoxStyleProps>`
    color: ${({ rank }) => colors.name[rank - 1] || '#000000'};
`;

export const RankBarLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const RankBarRight = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`;

export const MyPoint = styled.p``;

export const RankBarIcon = styled.span``;

export const Dept = styled.p`
    font-size: 10px;
    color: gray;
    font-weight: 500;
`;

export const introBox = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 5px;
`;
