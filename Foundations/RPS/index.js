// human score
// robot score

// function getComputerChoise
// Math.Random(1,3);
// 1 - rock, 2 - paper, 3 - scicssors
// 

// function getHumanChoice 
// ansewr = prompt("Rock, Paper or Scissors")

// compare if computerChoise === humanChoise 
//      play again
// else update score

const RPS = new Map();

RPS.set("rock", 0);
RPS.set("paper", 1);
RPS.set("scissors", 2);

let RPS_arr = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoise() {
    return RPS_arr[Math.floor(Math.random() * 3)];
}

function getHumanChoise() {
    const userChoise = prompt("Rock Paper or Scissors").toLowerCase();
    if(!RPS.has(userChoise)) {
        alert(`'${userChoise}' isn't a valid choise`);
        return getHumanChoise();
    } else {
        return userChoise;
    }
}

const humanChoise = getHumanChoise();
const computerChoise = getComputerChoise();

console.log(`Computer chose ${computerChoise}!`);

if(humanChoise === computerChoise) {
    console.log("It's a tie!");
} else if (
    (humanChoise === 'rock' && computerChoise === 'paper') 
    || (humanChoise === 'paper' && computerChoise === 'scissors') 
    || (humanChoise === "scissors" && computerChoise === "rock")
) {
    computerScore++;
} else {
    humanScore++;
}

console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);