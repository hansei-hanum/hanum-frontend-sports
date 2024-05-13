import { io } from 'socket.io-client';

const token = localStorage.getItem('token');

export const socket = io('wss://sports.hanum.us/chats/ws', {
  withCredentials: false,
  auth: {
    token: token,
  },
  transports: ['websocket'],
});
