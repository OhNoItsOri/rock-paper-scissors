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
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    const scorePlayer = 0;
    const scoreComputer = 0;
    console.log("so it begins")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
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
        console.log("player was the winner");
    } else if ( scorePlayer < scoreComputer){
        console.log("computer was the winner");
    }

}

game()