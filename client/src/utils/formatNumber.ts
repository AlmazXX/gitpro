export function formatNumber(num: number | undefined) {
  if (!num) {
    return 0;
  }

  if (num < 1000) {
    return String(num);
  }
  if (num < 1000000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return (num / 1000000).toFixed(1) + 'm';
}
