import axios from 'axios';

export const API_SUFFIX = {
  BASEURL: 'https://xx.nekos.me/',
  CHAT: 'chats/global/messages',
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
