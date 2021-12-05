let sum = (a, b) => {
  return a + b;
};
let sub = (a, b) => {
  return a - b;
};
function calucalate(a, b, callback) {
  return callback(a, b);
}
let result = calucalate(10, 20, sum);
console.log(result);

let result1 = calucalate(30, 20, sub);
console.log(result1);
