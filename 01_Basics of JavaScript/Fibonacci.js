function fibonacciSeries(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

const n = 10; // Change this value to generate Fibonacci series up to a different number
const series = fibonacciSeries(n);
console.log(series);
