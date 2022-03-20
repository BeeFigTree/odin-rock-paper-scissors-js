let choices = [["rock", "paper"], ["paper", "scissors"], ["scissors", "rock"]];

function computerPlay() {
    return choices[Math.floor(Math.random() * (3 - 1 + 1)) + 1]
}

const computerSelection = computerPlay().toUpperCase;
const playerSelection = prompt("Rock paper or scissors?: ")
