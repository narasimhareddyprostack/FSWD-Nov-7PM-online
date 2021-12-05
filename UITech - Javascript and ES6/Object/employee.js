/*
JS - Object 
---- group of data and functionality
*/
let employee = {
  name: "Narasimha",
  sal: 45000,
  getDetails: () => {
    console.log(this);
  },
  getSalary: function () {
    return this.sal;
  },
};
console.log(employee.name);
console.log(employee.sal);
employee.getDetails();
console.log(employee.getSalary());
