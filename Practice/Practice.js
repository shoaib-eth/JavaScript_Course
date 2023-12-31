function foo() {
  var x = 1;

  function bar() {
    var y = 2;

    console.log(x);
    console.log(y);
  }
  bar();

  console.log(x);
  console.log(y);
}
foo();
