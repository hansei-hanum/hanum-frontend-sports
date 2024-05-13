import { create } from 'zustand';

import { instance } from 'src/api';

export interface TokenPayload {
  /**
   * 유저 아이디
   */
  id: number;
  /**
   * 유저 이름
   */
  name: string;
  /**
   * 인증정보
   */
  validationString: string | null;
}

export interface AuthStore {
  /**
   * 토큰
   */
  token: string | null;
  /**
   * 토큰 페이로드
   */
  payload: TokenPayload | null;
  setToken: (token: string | null) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  payload: null,
  setToken: (token: string | null) => {
    if (token) {
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      set({
        token,
        payload: token ? JSON.parse(atob(token.split('.')[1])) : null,
      });
    }
  },
}));

export default useAuthStore;
