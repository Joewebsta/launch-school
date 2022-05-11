function getVodkaBottle(obj, num) {
  for (let key in obj) {
    let val = obj[key];

    if (val === num && /Rammstein/.test(key)) return key;
  }
}