function fibonacciSeries(n) {
  const series = [0, 1];
  for (let i = 2; i <= n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}

const n = 10; // Change this value to generate Fibonacci series up to a different number
const series = fibonacciSeries(n);

console.log("The Fibonacci series up to", n, "is:");
for (let i = 0; i < series.length; i++) {
  console.log(series[i]);
}


