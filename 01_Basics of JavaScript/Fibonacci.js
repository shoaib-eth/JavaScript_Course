function fibonacciSeries(n) {
  let series = [];
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    series.push(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
  return series;
}

const n = 10; // Change this value to generate Fibonacci series up to a different number
const series = fibonacciSeries(n);

console.log("The Fibonacci series up to", n, "is:");
for (let i = 0; i < series.length; i++) {
  console.log(series[i]);
}
