// Script to play Rock - Paper - Scissors against the computer


const plays = ["rock", "paper", "scissors"];

// returns randomly either 'Rock', 'Paper' or 'Scissors'
function computerPlay(plays) {
    const play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}

let input;
let playerSelection;
let computerSelection;


// Play one round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    
    // User input for the play, will ask untill input is correct and matches for the plays
    do {
        input = prompt("Enter your play from Rock, Paper or Scissors: ");
    } while (plays.indexOf(input.toLowerCase()) < 0);
    
    playerSelection = input.toLowerCase();
    computerSelection = computerPlay(plays);


    // return the winner of the round and round score [1 for winning, -1 for losing ,and 0 for a tie]
    if (playerSelection === computerSelection) {
        return [0, "It is a draw! " + playerSelection + " is equal to " + computerSelection];
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return [-1, "You lose! Paper beats Rock!"];
        } else {
            return [1, "You win! Rock beats Scissors"];
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return [1 , "You win! Paper beats Rock"];
        } else {
            return [-1, "You lose! Scissors beats Paper"];
        }
    } else {
        if (computerSelection === "rock") {
            return [-1, "You lose! Rock beats Scissors"];
        } else {
            return [1, "You win! Scissors beats Paper"];
        }
    }
}

let stats = [0, 0, 0];

// 5 round game, returning and displaying the winner

function game() {
    for (let i = 0; i < 5 ; i++) {
        result = playRound(playerSelection, computerSelection);
        console.log(result[1])
        if (result[0] === 1) {
            stats[0] ++;
        } else if (result[0] === -1) {
            stats[1] ++;
        } else {
            stats[2] ++;
        }
    }
    console.log("Game results: Wins: " + stats[0] + " Losses: " + stats[1] + " Draws: " + stats[2]);
    
    if (stats[0] > stats[1]) {
        console.log("Congratulations, you have won!")
        return "Congratulations, you have won!";
    } else if (stats[0] < stats[1]) {
        console.log("You have lost, better luck next time!")
        return "You have lost, better luck next time!";
    } else {
        console.log("It is a draw, nobody wins!")
        return "It is a draw, nobody wins!";
    }
}

game()


