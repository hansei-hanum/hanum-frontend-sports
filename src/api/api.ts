import axios from 'axios';

export const API_SUFFIX = {
  BASEURL: 'https://sports.hanum.us/',
  CHAT: 'chats/global/messages',
  LIVE_GAME: 'sports/live',
  GAMES: 'sports/games',
  BETTING_HISTORY: 'sports/points/@me/history',
  MY_POINT: 'sports/points/@me',
  BETTING: 'sports/',
  LOGIN: 'https://account.hanum.us/auth/login/',
  PHONE: 'https://account.hanum.us/auth/phone/',
};

const token = localStorage.getItem('token');

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
