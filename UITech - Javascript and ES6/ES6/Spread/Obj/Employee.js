let employee = { name: "Narasimha", sal: 45000, loc: "Bangalore" };
//create new object , based on employee - object
let new_Employee = { ...employee };
console.log(new_Employee); //{ name: 'Narasimha', sal: 45000, loc: 'Bangalore' }
