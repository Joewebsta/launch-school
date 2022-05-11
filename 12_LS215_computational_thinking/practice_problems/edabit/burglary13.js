function sortList(obj) {
  let sortedEntries = Object.entries({...obj}).sort(([keyA], [keyB]) => {
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
  })

  return Object.fromEntries(sortedEntries);