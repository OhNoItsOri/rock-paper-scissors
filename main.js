/* Trying to figure out to get input from the buttons to actually return something
    useful. In the process the score counting went and offed itself so I'm about to commit
    a warcrime.
*/

const button = document.querySelectorAll("button");
const options = ["rock", "paper", "scissors"];

button.forEach((button) => {
    button.addEventListener("click", () => {
        result(button.id, getComputerChoice());
    });
});

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

// playerSelection is inherrited from button interface and the function call
// ComputerSelection is inherrited from the function getComputerChoice()

var result = function winChecker(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log("Tie game");
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        console.log("Player Wins" + " Player chose " + playerSelection + " PC chose " + computerSelection );
        return "Player";
    }
    else {
        console.log("Computer Wins" + " Player chose " + playerSelection + " PC chose " + computerSelection );
        return "Computer";
    }
}

// Not sure where to implement the score thing.

function game(){
    var scorePlayer = 0;
    var scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        if (result == "Player"){
            scorePlayer++;
        }
        else if(result == "Computer"){
            scoreComputer++;
        }
    }
    if (scorePlayer > scoreComputer){
        console.log("player was the winner" + " player score = " + scorePlayer);
    } else if ( scorePlayer < scoreComputer){
        console.log("computer was the winner" + " computer score = " + scoreComputer);
    }
}
