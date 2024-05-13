import axios from 'axios';

export const API_SUFFIX = {
  BASEURL: 'https://sports.hanum.us/',
  CHAT: 'chats/global/messages',
  LIVE_GAME: 'sports/live',
  GAMES: 'sports/games',
  BETTING_HISTORY: 'sports/points/@me/history',
  MY_POINT: 'sports/points/@me',
  BETTING: 'sports/',
};

// const token = localStorage.getItem('token');
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ilx1YmMxNVx1Y2MyY1x1YzYwMSIsInZhbGlkYXRpb25TdHJpbmciOiJcdWJiZjhcdWM3NzhcdWM5OWQgXHVjMGFjXHVjNmE5XHVjNzkwIn0.TRuDFLEZwDTTTWk96ma4Bf8ezNRJbjeMLvKB-CARR84';

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
