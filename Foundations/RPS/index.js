const RPS = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return RPS[Math.floor(Math.random() * 3)];
}

const rps_btns = document.querySelectorAll(".rps_btn");

rps_btns.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.innerHTML.toLowerCase());
    });
});

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    const display = document.querySelector("#display");
    const human_score = document.querySelector("#human_score");
    const computer_score = document.querySelector("#computer_score");

    display.innerHTML = `
        <p>You chose ${humanChoice}.</p>
        <p>Computer chose ${computerChoice}.</p>
    `;

    if (humanChoice === computerChoice) {
        display.innerHTML += `<p>It's a tie!</p>`;
    } 
    
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        display.innerHTML += `<p>You win this round!</p>`;
    } 
    
    else {
        computerScore++;
        display.innerHTML += `<p>Computer wins this round!</p>`;
    }

    human_score.textContent = `Human: ${humanScore}`;
    computer_score.textContent = `Computer: ${computerScore}`;

    if (humanScore === 5) {
        display.innerHTML += `<h2>You won the game! 🎉</h2>`;
        endGame();
    } 
    
    else if (computerScore === 5) {
        display.innerHTML += `<h2>Computer won the game!</h2>`;
        endGame();
    }
}

function endGame() {
    rps_btns.forEach(button => {
        button.disabled = true;
    });
}