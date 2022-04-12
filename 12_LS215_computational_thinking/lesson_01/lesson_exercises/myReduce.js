function myReduce(array, func, initial) {  
  let result = initial;
  
  if (initial === undefined) {
    initial = array[0];
    array = array.slice(1)
  }

  array.forEach(elem => result = func(result, elem));
  
  console.log(result);
  return result;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 0);            // 39
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49

/*
Iterate through the array
on each iteration
  set first elem to result
  set second elem to value

  set return value of callback to result


*/