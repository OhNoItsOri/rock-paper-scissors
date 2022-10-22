/* Trying to figure out to get input from the buttons to actually return something
    useful. In the process the score counting went and offed itself so I'm about to commit
    a warcrime.
*/

/* Below this is the game logic. Set up for the site is above*/

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function winChecker(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = winChecker(computerSelection, playerSelection);
    if (result == "Tie"){
        return "it's a tie!"
    }
    else if (result == "Player"){
        return "You win!"
    }
    else{
        return "you lose!"
    }
}

function getPlayerChoice(){
    const button = document.querySelectorAll("button");
    button.forEach((button) => {
        button.addEventListener("click", () => {
            getPlayerClick = button.id;
            console.log("your choice is " + getPlayerClick);
        });
    });
}

function game(){
    var scorePlayer = 0;
    var scoreComputer = 0;
    console.log("so it begins")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice(); // GET INPUT FROM BUTTONS
        console.log(playerSelection);
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (winChecker(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if(winChecker(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }
    
    console.log("game over")
    if (scorePlayer > scoreComputer){
        console.log("player was the winner" + " pc score =" + scoreComputer);
    } else if ( scorePlayer < scoreComputer){
        console.log("computer was the winner" + " player score " + scorePlayer);
    }
}

game()
