/***** Constants *****/
let correctLetters = [];
let wrongLetters = [];


let letterKey = {
    one: "c",
    two: "h",
    three: "e",
    four: "r",
    five: "l",
    six: "o",
    seven: "w",
    eight: "e",
    nine: "b",
    ten: "a",
    eleven: "t",
    twelve: "e",
    thirteen: "d",
    fourteen: "e",
    fifteen: "v",
    sixteen: "e",
    seventeen: "r",
    eighteen: "e",
    nineteen: "e",
    twenty: "l",
    twentyone: "s"
}

// object with keys each 


/***** DOM References *****/
// select specific input elements
const input = document.querySelector(".box input");
const grid = document.querySelector(".grid-container");
const messageContainer = document.querySelector(".message-container")

/***** Game Logic Variables and State *****/

/***** Functions and Game Logic *****/
// initialize game

// check user input against stored values
const updateValue = (e) => {
 console.log(e.target.value)

    //   if () {

//   } else {
//       wrongLetters.push(one.value)
//   }
};

// query select for all inputs (.box input) for loop through array check .value against letterKey


// if (correctLetters.length === 21) {
//     messageContainer.classList.remove("hidden")
// }

/***** Event Listeners *****/

grid.addEventListener("input", updateValue);