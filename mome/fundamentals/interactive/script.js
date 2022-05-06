//alert("Hello világ!");

//átírni a paragrafus tartalmát
let message = document.getElementById("welcome-message");

message.innerText = "Helló, Szia!";

//gomb amivel szamlalot tudunk növelni
let button = document.getElementById("cookie");
let counter = document.getElementById("counter");

let number = 0;

button.onclick = () => {
  number = number + 1;
  counter.innerText = number;
};

//történjen meg amikor valaki a gombra kattint
/*function kattintas() {
  number = number + 1;
  counter.innerText = number;
}*/

let jar = document.getElementById("jar");
let moreButton = document.getElementById("one-more");

let cookie = "🍪";

moreButton.onclick = () => {
  jar.innerText = jar.innerText + cookie;
};
