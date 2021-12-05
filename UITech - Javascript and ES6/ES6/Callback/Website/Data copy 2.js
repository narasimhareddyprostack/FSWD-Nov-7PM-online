let employees = [
  { id: 101, name: "Ravi", sal: 45000 },
  { id: 102, name: "Prakash", sal: 55000 },
];
let createEmployee = (emp, callback) => {
  setTimeout(() => {
    employees.push(emp);
    callback();
  }, 3000);
};

let getEmployee = () => {
  setTimeout(() => {
    let rows = "";
    employees.forEach((employee) => {
      rows += `<tr><td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.sal}</td>
              </tr>`;
    });
    document.getElementById("tbody_data").innerHTML = rows;
  }, 1000);
};
createEmployee({ id: 103, name: "Ravi kumar", sal: 95000 }, getEmployee);
