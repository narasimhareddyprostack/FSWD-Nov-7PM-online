let emp_Id = [101, 102, 103, 104, 105];
//display array values using for(){}
for (let i = 0; i <= emp_Id.length - 1; i = i + 1) {
  console.log(emp_Id[i]);
}
console.log(">>>>>>>>>>>>>>>");
for (x of emp_Id) {
  console.log(x);
}
