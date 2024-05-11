import { io } from 'socket.io-client';

export const socket = io('ws://115.140.8.35:3000/chats/ws', {
  extraHeaders: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ilx1ZDY0ZFx1YWUzOFx1YjNkOSIsInZhbGlkYXRpb25TdHJpbmciOiJcdWIyOTBcdWFlMDhcdWI5YzgifQ.XrZz6olEG-k6NoHT5aBIl88igmZgJO6q9LqEndCXckU',
  },
});
