function fibonacciSeries(n) {
    if (n <= 1) {
        return [0, 1];
    } else {
        const series = fibonacciSeries(n - 1);
        series.push(series[series.length - 1] + series[series.length - 2]);
        return series;
    }
}

const n = 10; // Change this value to generate Fibonacci series up to a different number
const series = fibonacciSeries(n);

console.log("The Fibonacci series up to", n, "is:");
for (let i = 0; i < series.length; i++) {
    console.log(series[i]);
}


