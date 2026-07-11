const RPS = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return RPS[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    const userChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

    if (!RPS.includes(userChoice)) {
        alert(`"${userChoice}" isn't a valid choice.`);
        return getHumanChoice();
    }

    return userChoice;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`You chose ${humanChoice}.`);
    console.log(`Computer chose ${computerChoice}.`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        console.log("Computer wins this round!");
    } else {
        humanScore++;
        console.log("You win this round!");
    }

    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

    await sleep(5000);
}

async function playGame(){
    humanScore = 0;
    computerScore = 0;

    for(let i = 0; i < 5; i++) {
        await playRound();
        console.clear();
    }

    console.log("\nGame Over!");

    if(humanScore > computerScore) console.log("You've won!");
    else if (computerScore > humanScore) console.log("Computer won!");
    else console.log("ggz");
}

playGame();