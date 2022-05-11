function signAll(obj, name) {
  for (let key in obj) {
    if (key === 'signature') {
      obj.signature = name;
    } else {
      let roomObj = obj[key]
      roomObj.signature = name;
    }
  }
  return obj;
}