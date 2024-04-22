import React from 'react';
import * as S from './styled';
import pointIcon from '../../assets/icons/point.png';

export interface RankingBoxProps {
    rank: number;
    name: string;
    dept: string;
    point: number;
}

export const RankBox: React.FC<RankingBoxProps> = ({ rank, name, dept, point }) => {
    return (
        <S.RankingBox rank={rank}>
            <S.RankBarLeft>
                <S.Rank rank={rank}>{rank}위</S.Rank>
                <S.introBox>
                    <S.Name rank={rank}>{name}</S.Name>
                    <S.Dept>{dept}</S.Dept>
                </S.introBox>
            </S.RankBarLeft>
            <S.RankBarRight>
                <S.RankBarIcon>
                    {point >= 10000
                        ? `${(point / 10000).toFixed(1)}만`
                        : point >= 1000
                        ? `${(point / 1000).toFixed(1)}천`
                        : point}
                </S.RankBarIcon>
                <S.RankBarIcon>
                    <img width={25} src={pointIcon} alt="" />
                </S.RankBarIcon>
            </S.RankBarRight>
        </S.RankingBox>
    );
};
