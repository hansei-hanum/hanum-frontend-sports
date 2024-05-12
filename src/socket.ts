import { io } from 'socket.io-client';

const token = localStorage.getItem('token');

export const socket = io('wss://xx.nekos.me/chats/ws', {
  withCredentials: false,
  auth: {
    token: token,
  },
  transports: ['websocket'],
});
