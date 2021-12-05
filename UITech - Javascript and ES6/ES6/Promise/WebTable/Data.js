let employees = [
  { id: 101, name: "Ravi", sal: 45000 },
  { id: 102, name: "Prakash", sal: 55000 },
];
let createEmployee = (emp) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      employees.push(emp);
      let flag = false;
      flag ? resolve() : reject("Unable to process the reject");
    }, 3000);
  });
};
let getEmployee = () => {
  setTimeout(() => {
    let rows = "";
    employees.forEach((employee) => {
      rows += `<tr> 
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.sal}</td>
                </tr>`;
    });
    document.getElementById("tbody_data").innerHTML = rows;
  }, 1000);
};
let execute = async () => {
  await createEmployee({ id: 103, name: "Ramesh", sal: 6565656 });
  getEmployee();
};
execute();
