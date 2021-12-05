var a = 10; //global scope
var b = 20;
function add() {
  var c = 30;
  var d = 300;
  a = 110;
  console.log(a);
  function info() {
    let e = 50;
    console.log(e);
    console.log(a);
  } // inner function
  info();
}
add();
console.log(a);
console.log(c);
console.log(e);
