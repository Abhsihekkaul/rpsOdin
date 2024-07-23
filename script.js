console.log("0 : rock, 1 : Paper, 2 : Scissor");

let userScoreBoard = 0;
let computerScoreBoard = 0;

function getUserChoice() {
    const userChoice = parseInt(prompt("Please enter your choice: 0 for rock, 1 for paper, 2 for scissors"));
    if (![0, 1, 2].includes(userChoice)) {
        console.log("Invalid choice, please try again.");
        return getUserChoice();
    }
    return userChoice;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playground(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Game is a Draw");
    } else if (
        (humanChoice === 0 && computerChoice === 2) ||
        (humanChoice === 1 && computerChoice === 0) ||
        (humanChoice === 2 && computerChoice === 1)
    ) {
        console.log("User Wins!");
        userScoreBoard++;
    } else {
        console.log("Computer Wins!");
        computerScoreBoard++;
    }
}

let rounds = parseInt(prompt("How many rounds would you like to play?"));

for (let i = 0; i < rounds; i++) {
    let humanChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    playground(humanChoice, computerChoice);
    console.log(`Computer's Score is ${computerScoreBoard}`);
    console.log(`User's Score is ${userScoreBoard}`);
}

console.log("Game Over!");
console.log(`Final Computer's Score is ${computerScoreBoard}`);
console.log(`Final User's Score is ${userScoreBoard}`);
