function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();
/*
The array will not be garbage collected because the closure formed by the 
returned arrow function will maintain a reference to the array.

*/