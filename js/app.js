/***** Constants *****/
// for timer
var totalSeconds = 0;
let isGameWon = false;
let directionAcross = true;

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

// delete flow sequences

// store flow sequence
let flowSequence = {
  one: "two",
  two: "three",
  three: "four",
  four: "five",
  five: "six",
  six: "seven",
  seven: "eight",
  eight: "nine",
  nine: "ten",
  ten: "eleven",
  eleven: "twelve",
  twelve: "thirteen",
  thirteen: "fourteen",
  fourteen: "fifteen",
  fifteen: "sixteen",
  sixteen: "seventeen",
  seventeen: "eighteen",
  eighteen: "nineteen",
  nineteen: "twenty",
  twenty: "twentyone",
  twentyone: "one",
};

let flowSequenceDown = {
  one: "five",
  five: "ten",
  ten: "fifteen",
  fifteen: "nineteen",
  nineteen: "two",
  two: "six",
  six: "eleven",
  eleven: "sixteen",
  sixteen: "twenty",
  twenty: "three",
  three: "seven",
  seven: "twelve",
  twelve: "seventeen",
  seventeen: "twentyone",
  twentyone: "four",
  four: "eight",
  eight: "thirteen",
  thirteen: "nine",
  nine: "fourteen",
  fourteen: "eighteen",
  eighteen: "one",
};

inputsDown = [
  "one",
  "five",
  "ten",
  "fifteen",
  "nineteen",
  "two",
  "six",
  "eleven",
  "sixteen",
  "twenty",
  "three",
  "seven",
  "twelve",
  "seventeen",
  "twentyone",
  "four",
  "eight",
  "thirteen",
  "nine",
  "fourteen",
  "eighteen",
];

/***** DOM References *****/
const grid = document.querySelector(".grid-container");
const inputs = document.querySelectorAll(".box > input");
const messageContainer = document.querySelector(".message-container");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const clearButton = document.querySelector("#clear-puzzle");
const checkButton = document.querySelector("#check-puzzle");
const instructions = document.querySelector("#instructions");
const hideInstructionsButton = document.querySelector("#hide-instructions");
const instructionsContainer = document.querySelector("#instructions-container");
const reset = document.querySelector("#reset");
const reveal = document.querySelector("#reveal-puzzle");

/********************* Functions and Game Logic *********************/
// initialize game, Timer
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

/*********************  Buttons *********************/
// reveal puzzle
const revealPuzzle = () => {
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = letterKey[inputs[i].id];
  }
  reset.classList.remove("hidden");
  clearInterval(countUp);
};

// clear the puzzle
const clearPuzzle = () => {
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  for (letter in letterInput) {
    letterInput[letter] = "";
  }
};

// check puzzle answers
const checkPuzzle = () => {
  for (i = 0; i < inputs.length; i++) {
    let inputUpper = inputs[i].value.toUpperCase();
    if (inputs[i].value !== "" && inputUpper !== letterKey[inputs[i].id]) {
      inputs[i].classList.add("incorrect");
      grid.addEventListener("input", removeIncorrect);
    }
  }
};

const removeIncorrect = (e) => {
  let targetInput = e.target;
  targetInput.classList.remove("incorrect");
};

// show instructions
const showInstructions = () => {
  instructionsContainer.classList.remove("hidden");
};

// hide instructions
const hideInstructions = () => {
  instructionsContainer.classList.add("hidden");
};

// reset game
const resetGame = () => {
  isGameWon = false;
  clearPuzzle();
  resetTimer();
  messageContainer.classList.add("hidden");
  reset.classList.add("hidden");
};

const resetTimer = () => {
  countUp = setInterval(updateTimer, 1000);
  totalSeconds = 0;
  updateTimer();
};

/********************* Game Play *********************/
// focus on next input box
const focusNext = (e) => {
  if (directionAcross === true) {
    const nextID = flowSequence[e.target.id];
    document.querySelector("#" + nextID).focus();
  } else {
    const nextDownID = flowSequenceDown[e.target.id];
    document.querySelector("#" + nextDownID).focus();
  }
};

const toggleDirection = () => {
  if (directionAcross === true) {
    directionAcross = false;
  } else {
    directionAcross = true;
  }
};

// For "Delete key"
//  reverse array without mutating:
// var newarray = array.slice().reverse();

// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
const setCaretPosition = (ctrl, pos) => {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  // IE8 and below
  } else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}
const caretTarget = (e) => {
  let input = e.target
  setCaretPosition(input, input.value.length);
}



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
  isGameWon = true;
  messageContainer.classList.remove("hidden");
  reset.classList.remove("hidden");
  if (isGameWon === true) {
    clearInterval(countUp);
  }
  console.log(isGameWon);
};

const highlightLine = (e) => {
  let targetID = e.target.id;
  if (directionAcross === true) {
    if (
      targetID === "one" ||
      targetID === "two" ||
      targetID === "three" ||
      targetID === "four"
    ) {
      for (i = 0; i < 4; i++) {
        inputs[i].classList.add("word-highlight");
      }
      for (i = 4; i < inputs.length; i++) {
        inputs[i].classList.remove("word-highlight");
      }
    } else if (
      targetID === "five" ||
      targetID === "six" ||
      targetID === "seven" ||
      targetID === "eight"
    ) {
      for (i = 4; i < 8; i++) {
        inputs[i].classList.add("word-highlight");
      }
      for (i = 0; i < 4; i++) {
        inputs[i].classList.remove("word-highlight");
      }
      for (i = 8; i < 21; i++) {
        inputs[i].classList.remove("word-highlight");
      }
    } else if (
      targetID === "nine" ||
      targetID === "ten" ||
      targetID === "eleven" ||
      targetID === "twelve" ||
      targetID === "thirteen"
    ) {
      for (i = 8; i < 13; i++) {
        inputs[i].classList.add("word-highlight");
      }
      for (i = 0; i < 8; i++) {
        inputs[i].classList.remove("word-highlight");
      }
      for (i = 13; i < 21; i++) {
        inputs[i].classList.remove("word-highlight");
      }
    } else if (
      targetID === "fourteen" ||
      targetID === "fifteen" ||
      targetID === "sixteen" ||
      targetID === "seventeen"
    ) {
      for (i = 13; i < 17; i++) {
        inputs[i].classList.add("word-highlight");
      }
      for (i = 0; i < 13; i++) {
        inputs[i].classList.remove("word-highlight");
      }
      for (i = 17; i < 21; i++) {
        inputs[i].classList.remove("word-highlight");
      }
    } else if (
      targetID === "eighteen" ||
      targetID === "nineteen" ||
      targetID === "twenty" ||
      targetID === "twentyone"
    ) {
      for (i = 17; i < inputs.length; i++) {
        inputs[i].classList.add("word-highlight");
      }
      for (i = 0; i < 17; i++) {
        inputs[i].classList.remove("word-highlight");
      }
    }
  } else {
    if (
      targetID === "one" ||
      targetID === "five" ||
      targetID === "ten" ||
      targetID === "fifteen"||
      targetID === "nineteen"
    ) {
      for (i = 0; i < 5; i++) {
        document.querySelector("#" + inputsDown[i]).classList.add("word-highlight");
      }
      for (i = 5; i < inputs.length; i++) {
        document.querySelector("#" + inputsDown[i]).classList.remove("word-highlight");
      }
    } else if (
      targetID === "two" ||
      targetID === "six" ||
      targetID === "eleven" ||
      targetID === "sixteen" ||
      targetID === "twenty"
    ) {
      for (i = 5; i < 10; i++) {
        document.querySelector("#" + inputsDown[i]).classList.add("word-highlight");
      }
      for (i = 0; i < 5; i++) {
        document.querySelector("#" + inputsDown[i]).classList.remove("word-highlight");
      }
      for (i = 10; i < 21; i++) {
        document.querySelector("#" + inputsDown[i]).classList.remove("word-highlight");
      }
    } else if (
      targetID === "three" ||
      targetID === "seven" ||
      targetID === "twelve" ||
      targetID === "seventeen" ||
      targetID === "twentyone"
    ) {
      for (i = 10; i < 15; i++) {
        document.querySelector("#" + inputsDown[i]).classList.add("word-highlight");
      }
      for (i = 0; i < 10; i++) {
        document.querySelector("#" + inputsDown[i]).classList.remove("word-highlight");
      }
      for (i = 15; i < 21; i++) {
        document.querySelector("#" + inputsDown[i]).classList.remove("word-highlight");
      }
    } else if (
      targetID === "four" ||
      targetID === "eight" ||
      targetID === "thirteen"
    ) {
      for (i = 15; i < 18; i++) {
        document.querySelector("#" + inputsDown[i]).classList.add("word-highlight");
      }
      for (i = 0; i < 15; i++) {
        document.querySelector("#" + inputsDown[i]).classList.remove("word-highlight");
      }
      for (i = 18; i < 21; i++) {
        document.querySelector("#" + inputsDown[i]).classList.remove("word-highlight");
      }
    } else if (
      targetID === "nine" ||
      targetID === "fourteen" ||
      targetID === "eighteen"
    ) {
      for (i = 18; i < inputs.length; i++) {
        document.querySelector("#" + inputsDown[i]).classList.add("word-highlight");
      }
      for (i = 0; i < 18; i++) {
        document.querySelector("#" + inputsDown[i]).classList.remove("word-highlight");
      }
    }
  }
};



/***** Event Listeners *****/
// On load
document.addEventListener("DOMContentLoaded", updateTimer);
//Buttons
instructions.addEventListener("click", showInstructions);
hideInstructionsButton.addEventListener("click", hideInstructions);
clearButton.addEventListener("click", clearPuzzle);
checkButton.addEventListener("click", checkPuzzle);
reveal.addEventListener("click", revealPuzzle);
reset.addEventListener("click", resetGame);
// for puzzlegrid input
grid.addEventListener("input", updateValue);
grid.addEventListener("input", focusNext);
grid.addEventListener("dblclick", toggleDirection);
grid.addEventListener("click", highlightLine);
grid.addEventListener("input", highlightLine);
grid.addEventListener("dblclick", highlightLine);
grid.addEventListener("click", setCaretPosition);

/********************  TO DO ********************/
/********************  Event Listeners ********************/  
// clueContainer.addEventListener("click", highlightClue);

/******************** Functions ********************/
// hightlight selected clue
// const highlightClue = (e) => {
//   e.preventDefault();
//   let targetClue = e.target;
//     // targetClue.classList.add("cream-highlight");
//   for (i = 0; i < clues.length; i++) {
//     if (clues[i] === targetClue) {
//       clues[i].classList.add("cream-highlight");
//     }
//   }
//     for (i = 0; i < clues.length; i++) {
//     if (clues[i] !== targetClue) {
//       clues[i].classList.remove("cream-highlight");
//     }
//   }
// };

// let targetLetter = e.target;
// targetLetter.classList.add("highlight-letter");
// for (i = 0; i < blackBoxDivs.length; i++) {
//   blackBoxDivs[i].classList.remove("highlight-letter");
// }
// for (i = 0; i < inputs.length; i++) {
//   if (inputs[i].id !== targetID )
//     inputs[i].classList.remove("highlight-letter");
// }

/******************** DOM Elements ********************/
// const blackBoxDivs = document.querySelectorAll(".black-box");
// const clues = document.querySelectorAll(".clue");
// const clueContainer = document.querySelector(".clue-container");