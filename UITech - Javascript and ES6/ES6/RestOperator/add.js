function add(a, ...b) {
  sum = a;
  for (value of b) {
    sum = sum + value;
  }
  console.log(sum);
}
//add(10);
// add(10, 20);
add(10, 20, 30);
add(10, 20, 30, 40);
