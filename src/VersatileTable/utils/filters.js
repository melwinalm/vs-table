export const ValueTruncator = (value, limit=10, truncateString='...') => {
  if (value && value.length > limit) {
    return value.slice(0, limit) + truncateString;
  }
  return value;
}