function fibonacci(n) {
  let first = 1;
  let second = 1;
  let fibonacci;
  let count = 3;

  if (n === 1) return first;
  if (n === 2) return second;

  while (count <= n) {
    fibonacci = first + second;
    first = second;
    second = fibonacci;
    count += 1; 
  }

  console.log(fibonacci);
}

// fibonacci(1);       // 1
// fibonacci(2);       // 1
// fibonacci(3);       // 2
// fibonacci(4);       // 3
// fibonacci(5);       // 5
// fibonacci(12);      // 144
// fibonacci(20);      // 6765
// fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050