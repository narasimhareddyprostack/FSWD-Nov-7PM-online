function cart() {
  var counter = 0;
  function incrCounter() {
    counter = counter + 1;
  }
  function decrCounter() {
    counter = counter - 1;
  }
  function getCounter() {
    return counter;
  }
  //getCounter();//invoking a function
  return { incr: incrCounter, decr: decrCounter, count: getCounter };
}
let obj = cart();
/* obj.incr();
obj.incr(); */
console.log(obj.count());
