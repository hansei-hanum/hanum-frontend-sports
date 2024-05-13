import axios from 'axios';

export const API_SUFFIX = {
  BASEURL: 'https://xx.nekos.me/',
  CHAT: 'chats/global/messages',
  LIVE_GAME: 'sports/live',
  GAMES: 'sports/games',
  BETTING_HISTORY: 'sports/points/@me/history',
};

// const token = localStorage.getItem('token');
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6Iuq5gO2DnO2biCIsInZhbGlkYXRpb25TdHJpbmciOiLtgbTrnbzsmrDrk5zrs7TslYggMy0xIiwicm9sZXMiOlsibWFuYWdlciJdfQ.hoar8Y8v8vAqJYAc1UBjMGYuy8Bm94OTeQ0bv0uLrP8';

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
  },
});

export interface APIResponse<T = unknown> {
  message: string;
  data: T;
}

export interface APIErrorResponse {
  message: string;
  data?: null;
}
