function commonElements(arr1, arr2) {
  return [...new Set(arr1.filter(elem => arr2.includes(elem)))];
}