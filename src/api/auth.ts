import axios from 'axios';
import { API_SUFFIX } from './api';

export interface AuthValues {
  phone: string;
  code: string;
}

export const phone = async ({ phone }: Pick<AuthValues, 'phone'>) => {
  const { data } = await axios.post(API_SUFFIX.PHONE, {
    phone,
  });

  return data;
};

export const login = async ({ phone, code }: AuthValues) => {
  const { data } = await axios.post(API_SUFFIX.LOGIN, {
    phone,
    code,
    type: 'sports',
  });

  if (data?.token) {
    localStorage.setItem('token', data.token);
  }

  return data;
};
