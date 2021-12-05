let employees = [
  { id: 101, name: "Ravi", sal: 45000 },
  { id: 102, name: "Prakash", sal: 55000 },
];
let createEmployee = () => {
  setTimeout(() => {
      employees.push({});
  }, 3000);
};
let getEmployee = () => {
  setTimeout(() => {
      
  }, 1000);
};

createEmployee();
getEmployee();
