//create new array based on existin array
let size = [38, 40, 42, 44];
let new_Size = [];
for (value of size) {
  new_Size.push(value);
}
console.log(size);
console.log(new_Size);
size.push(46);
console.log(size);
console.log(new_Size);
