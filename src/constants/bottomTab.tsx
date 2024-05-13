import React from 'react';
import {
  MdOutlinePlayCircle,
  MdSportsBasketball,
  MdOutlineAccountBalanceWallet,
  MdOutlineAccessTime,
} from 'react-icons/md';

export interface BottomTabItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const size = 28;

export const BOTTOM_TAB_MENUS: BottomTabItem[] = [
  {
    title: '실시간',
    icon: <MdOutlinePlayCircle size={size} />,
    href: '/',
  },
  {
    title: '경기',
    icon: <MdSportsBasketball size={size} />,
    href: '/match',
  },
  {
    title: '포인트',
    icon: <MdOutlineAccountBalanceWallet size={size} />,
    href: '/point',
  },
  {
    title: '예측 기록',
    icon: <MdOutlineAccessTime size={size} />,
    href: '/predict-log',
  },
];
