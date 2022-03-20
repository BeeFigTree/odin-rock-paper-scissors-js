//Index 0 = choice and index 1 = loses to
let choices = [["rock", "paper"], ["paper", "scissors"], ["scissors", "rock"]];

function computerPlay() {
    return choices[Math.floor(Math.random() * (2 - 1 + 1)) + 1]
}

const computerSelection = computerPlay()
const playerSelection = prompt("Rock, paper or scissors?: ").toLowerCase()

function playRound(computerSelection, playerSelection) {
    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== 'scissors') {
        console.log("Please choose rock, paper or scissors; reload the page to play again.")
        return
    }

    if(computerSelection[0] === playerSelection) {
        return `Computer chose ${computerSelection[0]}. Tie!`
    } else if(computerSelection[1] === playerSelection) {
        return `Computer chose ${computerSelection[0]}. You win!`
    } else {
        return `Computer chose ${computerSelection[0]}. You lose!`
    }
}

alert(playRound(computerSelection, playerSelection))
