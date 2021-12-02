function outer() {
  function inner() {}
}

outer();
inner(); // error
