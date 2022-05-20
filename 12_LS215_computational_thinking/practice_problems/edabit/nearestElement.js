function nearestElement(n, arr) {
  let distances = arr.map(num => Math.abs(num - n));
  let minDistance = Math.min(...distances);

  if (distances.indexOf(minDistance) === distances.lastIndexOf(minDistance)) {
    return distances.indexOf(minDistance);
  } else {
    let equalDistances = arr.filter(num => Math.abs(num - n) === minDistance);
    let maxVal = Math.max(...equalDistances)
    return arr.indexOf(maxVal);
  }
}