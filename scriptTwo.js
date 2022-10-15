

const playerSelection = prompt("Input Rock, Paper, or Scissors")
const computerSelection = getComputerChoice()

function getComputerChoice(min,max) {
    //randomly return R, P or S.
    //Returns a random integer between 1 and 3
    //1 = rock
    //2 = paper
    //3 = scissors
    min = Math.ceil(1)
    max = Math.floor(3)
    return Math.floor(Math.random() * (max - min +1) + min)
}
function pcSymbol(number){
    if (number === 1){
        console.log("computer chose rock")
    } else if (number === 2) {
        console.log("computer chose Paper")
    } else if (number === 3) {
        console.log("computer chose Scissors")
    } else {
    }
}
function playRound(player , computer){
    let choice = player.toLowerCase()
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
    playRound(playerSelection, computerSelection)
    //console.log(playRound(playerSelection, computerSelection))
    for (let i = 0; i <5; i++){
        //this adds to user points
        //if the return of playRound is "u"
        
    }


}

//console.log(choice)
pcSymbol(computerSelection)
game()
// if pc wins, add 1 to their tally
// if user wins add 1 to their tally
// to a maximum of 5
