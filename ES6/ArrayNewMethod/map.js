let size = [38, 40, 42, 44];
let new_size = size.map((s, index, arr) => {
  console.log(arr);
  console.log(index);
  return s + 1;
});
console.log(size);
console.log(new_size);
