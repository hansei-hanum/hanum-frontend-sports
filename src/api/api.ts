import axios from 'axios';

export const API_SUFFIX = {
  BASEURL: 'https://xx.nekos.me/',
  CHAT: 'chats/global/messages',
  LIVE_GAME: 'sports/live',
  GAMES: 'sports/games',
};

// const token = localStorage.getItem('token');
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFzZGYiLCJ2YWxpZGF0aW9uU3RyaW5nIjoiQXNkZiJ9.mB5tb7ZCJKgOQoNxscZPD8JVU40tmoht8Wg525EBX60';

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
