let employees = [
  { id: 101, name: "Rahul", salary: 45000 },
  { id: 102, name: "Priyanka", salary: 55000 },
  { id: 103, name: "Sonia", salary: 65000 },
];
function loadData() {
  console.log("Test Case");
  let rows = "";
  employees.map((x, index) => {
    console.log("Test case", index);
    rows += `<tr><td>${x.id}</td>
                 <td>${x.name}</td>
                 <td>${x.salary}</td>
             <tr>`;
  });
  document.getElementById("abc").innerHTML = rows;
}
