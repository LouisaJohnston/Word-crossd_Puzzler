/***** Constants *****/

const letterKey = {
  one: "C",
  two: "H",
  three: "E",
  four: "R",
  five: "L",
  six: "O",
  seven: "W",
  eight: "E",
  nine: "B",
  ten: "A",
  eleven: "T",
  twelve: "E",
  thirteen: "D",
  fourteen: "E",
  fifteen: "V",
  sixteen: "E",
  seventeen: "R",
  eighteen: "E",
  nineteen: "E",
  twenty: "L",
  twentyone: "S"
};

let letterInput = {
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
  six: "",
  seven: "",
  eight: "",
  nine: "",
  ten: "",
  eleven: "",
  twelve: "",
  thirteen: "",
  fourteen: "",
  fifteen: "",
  sixteen: "",
  seventeen: "",
  eighteen: "",
  nineteen: "",
  twenty: "",
  twentyone: "",
};

/***** DOM References *****/
// select specific input elements
const inputs = document.querySelector(".box input");
const grid = document.querySelector(".grid-container");
const messageContainer = document.querySelector(".message-container");

/***** Game Logic Variables and State *****/

/***** Functions and Game Logic *****/
// initialize game

//store input value for letterInput at key index
const updateValue = (e) => {
  let boxNumber = e.target.id;
  let inputValue = e.target.value;
  let uppercase = inputValue.toUpperCase()
  letterInput[boxNumber] = uppercase;
  console.log(uppercase)
  checkWin();
};



const checkWin = () => {
  for (letter in letterKey) {
    if (letterKey[letter] !== letterInput[letter]) {
      return;
    }
  }
  return winState()
};

const winState = () => {
    messageContainer.classList.remove("hidden")
}

/***** Event Listeners *****/

grid.addEventListener("input", updateValue);
