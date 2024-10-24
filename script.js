let turno = false;

var matrice = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

function CreoTabella() {
  let table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  let tbody = document.createElement("tbody");

  for (let i = 0; i < 6; i++) {
    // Corretto per creare 6 righe
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      // Corretto per creare 7 colonne
      let cell = document.createElement("td");
      cell.id = `cell-${i}-${j}`;
      cell.style.width = "50px";
      cell.style.height = "50px";
      cell.style.border = "1px solid black";
      cell.addEventListener("click", handleCellClick);
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  document.body.appendChild(table);
}
