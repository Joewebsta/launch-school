function countNumberOfOccurrences(obj) {
  return Object.values(obj).reduce((counts, insult) => {
    counts[insult] = (counts[insult] || 0) + 1;
    return counts;
  }, {});
};