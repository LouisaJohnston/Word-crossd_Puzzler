/***** Constants *****/


const letterKey = {
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
    twentyone: ""
}

/***** DOM References *****/
// select specific input elements
const inputs = document.querySelector(".box input");
const grid = document.querySelector(".grid-container");
const messageContainer = document.querySelector(".message-container")

/***** Game Logic Variables and State *****/

/***** Functions and Game Logic *****/
// initialize game

//store input value for at key index
const updateValue = (e) => {
    let boxNumber = e.target.id
    let inputValue = e.target.value
    letterInput[boxNumber] = inputValue
    // check user input against stored values
    for (letter in letterKey) {
        if (letterInput[boxNumber] === letterKey[letter] ) {
            console.log(`${inputValue} is correct`)
        }
    }
    // if (letterInput === letterKey) {
    //     messageContainer.classList.remove("hidden")
    // } 
};



// query select for all inputs (.box input) for loop through array check .value against letterKey


if (letterInput === letterKey) {
    messageContainer.classList.remove("hidden")
}

/***** Event Listeners *****/

grid.addEventListener("input", updateValue);