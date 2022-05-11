function calculateLosses(obj) {
  if (Object.keys(obj).length === 0) return 'Lucky you!';
​
  return Object.values(obj).reduce((sum, val) => sum + val);
}