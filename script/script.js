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
let stats = [0, 0, 0];


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
        gameStart("rock"); 
});

const paper = document.querySelector('#paper');
paper.onclick = () => gameStart("paper"); 

const scissors = document.querySelector('#scissors');
scissors.onclick = () => gameStart("scissors"); 

const divResult = document.createElement("div");
divResult.textContent = "Results: ";
document.body.appendChild(divResult);

// create new text element for round results
function roundResults(result) {
    const roundResults = document.createElement("p");
    roundResults.textContent = result;
    document.body.appendChild(roundResults);    
}

// display score on scoreboard
function displayScore(score) {
    document.getElementById('score').innerHTML = score;
}


function winner(score) {
    const pWinner = document.createElement("p");
    pWinner.textContent = score;
    document.body.appendChild(pWinner);
    
}

// Play one round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {

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


// start a game, storing the score at stats[]
function gameStart(playerSelection) {
    const result = playRound(playerSelection, computerSelection);
    console.log(result[1]);
    roundResults(result[1]);
    if (result[0] === 1) {
        stats[0] ++;
        gameScore();
        return stats;
    } else if (result[0] === -1) {
        stats[1] ++;
        gameScore();
        return stats;
    } else {
        stats[2] ++;
        displayScore("Wins: " + stats[0] + " Losses: " + stats[1] + " Draws: " + stats[2]);
        return stats;
    }
}

// creates an element for the current game score, and call endResults function if either player has 5 points
function gameScore() {
    if (stats[0] >= 5 || stats[1] >= 5) {
        endResults();
    } else {
        displayScore("Wins: " + stats[0] + " Losses: " + stats[1] + " Draws: " + stats[2]);
    }
}

// creates a new element for a winner and resets the game score
function endResults() {
    displayScore("Wins: " + stats[0] + " Losses: " + stats[1] + " Draws: " + stats[2]);
    if (stats[0] > stats[1]) {
        winner("Congratulations, you have won!");

        return stats = [0, 0, 0]; //clears the score for the new game
    } else if (stats[0] < stats[1]) {
        winner("You have lost, better luck next time!");
        return stats = [0, 0, 0]; //clears the score for the new game
    }
}





