//Index 0 = choice and index 1 = choice loses to
let choices = [["rock", "paper"], ["paper", "scissors"], ["scissors", "rock"]]

//Computer choses its move
function computerPlay() {
    return choices[Math.floor(Math.random() * (2 - 1 + 1)) + 1]
}

//Plays a single round and keeps score
function playRound(computerSelection, playerSelection) {
    if (computerSelection[0] === playerSelection) {
        alert(`Computer chose ${computerSelection[0]} you tie this round!`)
        ties++
    } else if (computerSelection[1] === playerSelection) {
        alert(`Computer chose ${computerSelection[0]} you win this round!`)
        playerWins++
    } else {
        alert(`Computer chose ${computerSelection[0]} you lose this round!`)
        computerWins++
    }
}

//Prompts the player the outcome of the match
function determineWinner() {
    if (computerWins > playerWins) {
        alert(`The computer won the match with ${computerWins} wins to your ${playerWins} with ${ties} ties(s)!`)
    } else if (ties === 5) {
        alert("Surprisingly, the match ended with 5 ties! No winner.")
    } else if (computerWins === playerWins) {
        alert(`You tied the match with ${playerWins} wins and ${computerWins} computer wins with ${ties}!`)
    } else {
        alert(`You won the match with ${playerWins} wins to the computers ${computerWins} with ${ties} tie(s)!`)
    }

    alert("Please reload the page to play again.")
}

//Scoreboard
let computerWins = 0
let playerWins = 0
let ties = 0

//Plays up to 5 rounds by calling playRound()
for (var i = 1; i <= 5; i++) {
    let computerSelection = computerPlay()
    let playerSelection = prompt("Rock, paper or scissors?: ").toLowerCase()

    //Check for player valid move; if invalid re-prompts player
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== 'scissors') {
        alert("Please choose rock, paper or scissors.")
        playerSelection = prompt("Rock, paper or scissors?").toLowerCase()
    }

    playRound(computerSelection, playerSelection)

    // Determine winner if all 5 rounds have been played; or if 3 wins from either side have been determined because it would be impossible for the losing player to catch up at this point
    if(i === 5 || computerWins === 3 || playerWins === 3) {
        determineWinner()
        break
    }
}


