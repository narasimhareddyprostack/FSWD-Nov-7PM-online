function outer() {
  console.log("Inside - outer function");
  function inner() {
    console.log("Inside - inner function");
  }
  //inner() // function invocation
  return inner; // return function ref
}
let a = outer();
a();//we are invoking inner function outside with help of ref.
