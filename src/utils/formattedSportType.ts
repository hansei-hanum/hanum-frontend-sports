import { SportGameType } from 'src/api';

export const formattedSportType = (type: SportGameType) => {
  switch (type) {
    case SportGameType.Basketball:
      return '🏀 농구';
    case SportGameType.FootVolleyball:
      return '⚽️ 족구';
    case SportGameType.Dodgeball:
      return '🏐 피구';
    default:
      return '';
  }
};
