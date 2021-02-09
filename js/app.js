/***** Constants *****/
let correctLetters = [];


/***** DOM References *****/
// select specific input elements
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const ten = document.querySelector("#ten");
const eleven = document.querySelector("#eleven");
const twelve = document.querySelector("#twelve");
const thirteen = document.querySelector("#thirteen");
const fourteen = document.querySelector("#fourteen");
const fifteen = document.querySelector("#fifteen");
const sixteen = document.querySelector("#sixteen");
const seventeen = document.querySelector("#seventeen");
const eighteen = document.querySelector("#eighteen");
const nineteen = document.querySelector("#nineteen");
const twenty = document.querySelector("#twenty");
const twentyone = document.querySelector("#twentyone");

const grid = document.querySelector(".grid-container");
const input = document.querySelectorAll(".box > form > input")
const messageContainer = document.querySelector(".message-container")

/***** Game Logic Variables and State *****/

/***** Functions and Game Logic *****/
//check user input against stored values

const oneGuess= (e) => {
  e.preventDefault();
  if (one.value === "c") {
    correctLetters.push(one.value)
  }
};

if (correctLetters.length === 21) {
    messageContainer.classList.remove("hidden")
}

/***** Event Listeners *****/
// grid.addEventListener("submit", letterGuess);

one.addEventListener("submit", oneGuess);
