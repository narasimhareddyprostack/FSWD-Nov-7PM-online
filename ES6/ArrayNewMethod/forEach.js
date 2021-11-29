let values = [10, 20, 30];
values.forEach((value, index) => {
  value = value + 1;
  console.log(index);
  console.log(value);
});
for (value of values) {
  console.log(value);
}
