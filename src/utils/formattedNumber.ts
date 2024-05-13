export const formatNumber = (point: number): string => {
  if (point >= 10000) {
    return `${(point / 10000).toFixed(1)}만`;
  } else if (point >= 1000) {
    return `${(point / 1000).toFixed(1)}천`;
  } else {
    return `${point}`;
  }
};
