let employees = [
  { id: 101, name: "Rahul", sal: 45000 },
  { id: 102, name: "Priyanka", sal: 55000 },
  { id: 103, name: "Sonia", sal: 65000 },
  { id: 104, name: "Robert", sal: 75000 },
  { id: 103, name: "Sonia", sal: 65000 },
  { id: 104, name: "Robert", sal: 75000 },
];

function execute() {
  let rows = "";
  for (let i = 0; i <= employees.length - 1; i++) {
    rows =
      rows +
      `<tr> <td>${employees[i].id}</td><td>${employees[i].name}</td><td>${employees[i].sal}</td></tr>`;
  }
  document.getElementById("tbody_data").innerHTML = rows;
}
