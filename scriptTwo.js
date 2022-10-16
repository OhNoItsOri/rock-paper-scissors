

const playerSelection = prompt("Input Rock, Paper, or Scissors")
const computerSelection = getComputerChoice()

function getComputerChoice(min,max) {
    // Generates a number 1, 2 or 3.
    min = Math.ceil(1)
    max = Math.floor(3)
    return Math.floor(Math.random() * (max - min +1) + min)
}
function pcSymbol(number){
    // prints if pc chose rock paper or scissors
    if (number === 1){
        console.log("computer chose rock")
    } else if (number === 2) {
        console.log("computer chose paper")
    } else if (number === 3) {
        console.log("computer chose scissors")
    } else {
    }
}
function playRound(player , computer){
    // Game logic
    let choice = player.toLowerCase();
    if (choice === "rock") {
        console.log("you selected rock")
        if (computer === 1) {
            console.log("tie game!")
            return "t"
        } else if (computer === 2) {
            console.log("Computer wins! Better Luck Next Time")
            return "p"
        } else if (computer === 3) {
            console.log("You win! Congrats")
            return "u"
        } else ;{
        }
    } else if (choice === "paper") {
        console.log("you selected paper");
        if (computer === 1) {
            console.log("You win! Congrats!")
            return "u"
        } else if (computer === 2) {
            console.log("Tie game!")
            return "t"
        } else if (computer === 3) {
            console.log("Computer wins. Better luck next time!")
            return "p"
        } else ;{
        }
    } else if (choice === "scissors") {
        console.log("you selected scissors");
        if (computer === 1) {
            console.log("computer wins. better luck next time!")
            return "p"
        } else if (computer === 2) {
            console.log("you win! congrats")
            return "u"
        } else if (computer === 3) {
            console.log("tie game!")
            return "t"
        } else ;{
        }
    } else ;{
    }
}
function game(){
    // is suppose to add 1 per win, don't know how to reset it.
    switch(playRound(playerSelection, computerSelection)) {
        case "u":
            for (let i = 0; i < 5; i++) {
                console.log(i)
            break;
            }
        case "p":
            for (let u = 0; u < 5; u++) {
                console.log(u)
            break;
            }
    }
}

pcSymbol(computerSelection)
game()


