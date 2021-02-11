/***** Constants *****/
// for timer
var totalSeconds = 0;

// store correct values
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
  twentyone: "S",
};

// store user input
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
// for event listener on grid
const grid = document.querySelector(".grid-container");
//box input
const inputs = document.querySelectorAll(".box > input");
// display win message
const messageContainer = document.querySelector(".message-container");
// timer selectors
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
// clear puzzle button
const clearButton = document.querySelector("#clear-puzzle");
console.log();

/***** Game Logic Variables and State *****/

/***** Functions and Game Logic *****/
// initialize game
const updateTimer = () => {
  ++totalSeconds;
  seconds.innerText = formatTimer(totalSeconds % 60);
  minutes.innerText = formatTimer(parseInt(totalSeconds / 60));
};

function formatTimer(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

countUp = setInterval(updateTimer, 1000);

//store input value for letterInput at key index
const updateValue = (e) => {
  let boxNumber = e.target.id;
  let inputValue = e.target.value;
  let uppercase = inputValue.toUpperCase();
  letterInput[boxNumber] = uppercase;
  checkWin();
};

// check if puzzle has been solved
const checkWin = () => {
  for (letter in letterKey) {
    if (letterKey[letter] !== letterInput[letter]) {
      return;
    }
  }
  return winState();
};

// display winState message
const winState = () => {
  messageContainer.classList.remove("hidden");
  clearInterval(countUp);
  //remove button divs, add button to restart game
};

// clear the puzzle
const clearPuzzle = () => {
  for (i=0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  for (letter in letterInput) {
    letterInput[letter] = "";
  }
};

/***** Event Listeners *****/
// update letterInput
grid.addEventListener("input", updateValue);
document.addEventListener("DOMContentLoaded", updateTimer);
clearButton.addEventListener("click", clearPuzzle);

// TODO
// clear function
// auto check
