let tbody = document.getElementsByTagName("tbody")[0];
let button = document.getElementById("submit");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");

button.onclick = () => {
  //Kiolvason az értékeket a bemeneti mezőkből
  let firstInput = firstName.value;
  let lastInput = lastName.value;

  //Készítek egy sor taget
  let row = document.createElement("tr");

  //Készítek két cella taget
  let firstNameCell = document.createElement("td");
  //Beleírom a cellába a bemeneti mező értékét
  firstNameCell.innerText = firstInput;
  let lastNameCell = document.createElement("td");
  lastNameCell.innerText = lastInput;

  //Belerakom a tbody-ba a sort és belerakom a cellákat a sorba
  tbody.append(row);
  row.append(firstNameCell);
  row.append(lastNameCell);

  //kitörlöm a bemeneti mezők tartalmát
  firstName.value = "";
  lastName.value = "";
};
