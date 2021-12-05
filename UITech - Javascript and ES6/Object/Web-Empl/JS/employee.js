let employees = [
  { id: 1, name: "Ruò", sal: "Yuan Renminbi" },
  { id: 2, name: "Cécilia", sal: "Dollar" },
  { id: 3, name: "Noëlla", sal: "Rupiah" },
  { id: 4, name: "Annotés", sal: "Ruble" },
  { id: 5, name: "Ruò", sal: "Peso" },
  { id: 6, name: "Léonie", sal: "Dollar" },
  { id: 7, name: "Alizée", sal: "Yuan Renminbi" },
  { id: 8, name: "Aí", sal: "Euro" },
  { id: 9, name: "Adélaïde", sal: "Koruna" },
  { id: 10, name: "Sòng", sal: "Ruble" },
  { id: 11, name: "Irène", sal: "Yuan Renminbi" },
  { id: 12, name: "Maëline", sal: "Rupiah" },
  { id: 13, name: "Bénédicte", sal: "Dollar" },
  { id: 14, name: "Joséphine", sal: "Rupee" },
  { id: 15, name: "Mélissandre", sal: "Baht" },
  { id: 16, name: "Bérangère", sal: "Ruble" },
  { id: 17, name: "Dafnée", sal: "Yuan Renminbi" },
  { id: 18, name: "Erwéi", sal: "Krona" },
  { id: 19, name: "Cunégonde", sal: "Euro" },
  { id: 20, name: "Gösta", sal: "Shilling" },
  { id: 21, name: "Åsa", sal: "Franc" },
  { id: 22, name: "Cléopatre", sal: "Peso" },
  { id: 23, name: "Céline", sal: "Yuan Renminbi" },
  { id: 24, name: "Mélinda", sal: "Dirham" },
  { id: 25, name: "Marie-françoise", sal: "Yuan Renminbi" },
  { id: 26, name: "Cléopatre", sal: "Yuan Renminbi" },
  { id: 27, name: "Cloé", sal: "Ruble" },
  { id: 28, name: "Félicie", sal: "Ruble" },
  { id: 29, name: "Irène", sal: "Hryvnia" },
  { id: 30, name: "Cloé", sal: "Shilling" },
  { id: 31, name: "Mélanie", sal: "Kyat" },
  { id: 32, name: "Réjane", sal: "Dollar" },
  { id: 33, name: "Gérald", sal: "Won" },
  { id: 34, name: "Mà", sal: "Yuan Renminbi" },
  { id: 35, name: "Måns", sal: "Koruna" },
  { id: 36, name: "Ráo", sal: "Dollar" },
  { id: 37, name: "Måns", sal: "Ariary" },
  { id: 38, name: "Estée", sal: "Yuan Renminbi" },
  { id: 39, name: "Måns", sal: "Euro" },
  { id: 40, name: "Maïly", sal: "Guarani" },
  { id: 41, name: "Miléna", sal: "Yuan Renminbi" },
  { id: 42, name: "Stévina", sal: "Real" },
  { id: 43, name: "Marie-ève", sal: "Ruble" },
  { id: 44, name: "Tú", sal: "Denar" },
  { id: 45, name: "Loïca", sal: "Yuan Renminbi" },
  { id: 46, name: "Maëlle", sal: "Euro" },
  { id: 47, name: "Cunégonde", sal: "Hryvnia" },
  { id: 48, name: "Marie-hélène", sal: "Euro" },
  { id: 49, name: "Léone", sal: "Dollar" },
  { id: 50, name: "Zhì", sal: "Euro" },
];

function execute() {
  let rows = "";
  for (employee of employees) {
    rows =
      rows +
      `<tr><td>${employee.id}</td>
    <td>${employee.name}</td>
    <td>${employee.sal}</td></tr>`;
  }
  document.getElementById("tbody_data").innerHTML = rows;
}
