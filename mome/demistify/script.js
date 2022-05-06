const template = document.querySelector("[data-template]");
const tableBody = document.querySelector("[data-table-body]");

let names = ["Barna", "Alíz", "Dorottya", "Bendegúz"];

function render(inp) {
  tableBody.innerHTML = "";
  inp.forEach((name) => {
    let newRow = document.createElement("tr");
    let newTableCell = document.createElement("td");
    let newTableCellWithButton = document.createElement("td");
    let newButton = document.createElement("button");

    newTableCell.innerText = name;
    newButton.innerText = "×";

    newButton.addEventListener("click", (evt) => {
      evt.target.parentElement.parentElement.remove();
      names = names.filter((n) => !(n == name));
      console.log(names);
    });

    newRow.append(newTableCell, newTableCellWithButton);
    newTableCellWithButton.append(newButton);

    tableBody.append(newRow);
  });
}

render(names);

let input = document.querySelector("[data-input]");
let inputButtone = document.querySelector("[data-input-button]");
inputButtone.addEventListener("click", (evt) => {
  names.push(input.value);
  render(names);
});
