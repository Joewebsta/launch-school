function bubbleSort(arr) {
  let isSorted = false;

  while (!isSorted) {
    let swaps = 0;
    for (let i = 0; i < arr.length - 1; i += 1) {
      let first = arr[i];
      let second = arr[i + 1];

      if (first > second) {
        swaps += 1;
        [ arr[i + 1], arr[i] ] = [arr[i], arr[i + 1]]
      }
    }

    if (swaps === 0) isSorted = true;
  }

  return arr;
}