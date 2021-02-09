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

//store input value for letterInput at key index
const updateValue = (e) => {
    let boxNumber = e.target.id
    let inputValue = e.target.value
    letterInput[boxNumber] = inputValue
    // check user input against stored values for checking button
    // for (letter in letterKey) {
    //     if (letterInput[boxNumber] === letterKey[boxNumber]) {
    //         console.log(`${inputValue} is correct`)
    //     }
    // } 
    checkWin()

};

const checkWin = () => {
    for (letter in letterKey) {
        console.log(letter)
        if (letterKey[letter] !== letterInput[letter]) {
            return false
        }
        // if (Object.values(letterKey) === Object.values(letterInput)) {
        //     messageContainer.classList.remove("hidden")
        //     console.log("you win")
        // }
    }
    return true
}

/***** Event Listeners *****/

grid.addEventListener("input", updateValue);