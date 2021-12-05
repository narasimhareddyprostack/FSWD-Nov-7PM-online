let emp = {
  name: "Narasimha",
  sal: 45000,
  getDetails: function () {
    return this.sal;
  },
};
console.log(emp.name);
console.log(emp.loc); //undefined
console.log(emp.getDetails());
console.log(emp.getSal());//error
