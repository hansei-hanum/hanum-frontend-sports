import React from 'react';
import * as S from './styled';
import { pointIcon } from '@assets';

export interface RankingBoxProps {
    rank: number;
    name: string;
    dept: string;
    point: number;
}

export const RankBox: React.FC<RankingBoxProps> = ({ rank, name, dept, point }) => {
    const formatNumber = (point: number): string => {
        if (point >= 10000) {
            return `${(point / 10000).toFixed(1)}만`;
        } else if (point >= 1000) {
            return `${(point / 1000).toFixed(1)}천`;
        } else {
            return `${point}`;
        }
    };
    return (
        <S.RankingBox rank={rank}>
            <S.RankBarLeft>
                <S.Rank rank={rank}>{rank}위</S.Rank>
                <S.IntroBox>
                    <S.Name rank={rank}>{name}</S.Name>
                    <S.Dept>{dept}</S.Dept>
                </S.IntroBox>
            </S.RankBarLeft>
            <S.RankBarRight>
                <S.RankBarIcon>{formatNumber(point)}</S.RankBarIcon>
                <S.RankBarIcon>
                    <img width={25} src={pointIcon} alt="" />
                </S.RankBarIcon>
            </S.RankBarRight>
        </S.RankingBox>
    );
};
