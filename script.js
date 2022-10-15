// Rock Paper Scissors App.
//user inputs "rock", "paper", or "scissors" into console(currently not case sensitive)
//pc randomly decides between the 3 options
//users selection ranks against pcs selection, and a winner is decided
//prints the winner, asks to play again

function setup(){
    console.log("welcome to Rock Paper Scissors");
}

function userInput(){
    // Takes user input
    let input = prompt("rock, paper, or scissors");
    return input;
}

function pcInput(min, max){
    //Returns a random integer between 1 and 3
    //1 = rock
    //2 = paper
    //3 = scissors
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min +1) + min);
}

function gameLogic(){
// logic if user types rock
    if (userInput() === "rock"){
        if (pcInput() === "1"){
            console.log("its a tie!");
            return;
        }
        else if (pcInput() === "2"){
            console.log("Computer wins, Sorry!");
            return "pcWin"
        }
        else if (pcInput() === "3"){
            console.log("You win! Congrats!!");
            return "userWin"
        }
    }
    else if (userInput() === "paper"){
        if (pcInput() === "1"){
            console.log("Computer wins. Sorry!");
            return "pcWin";
        }
        else if (pcInput() === "2"){
            console.log("Its a tie!");
            return;
        }
        else if (pcInput() === "3"){
            console.log("You win! Congrats!");
            return "userWin";
        }
    }
    else if (userInput() === "scissors"){
        if (pcInput() === "1"){
            console.log("Computer wins, Sorry!");
            return "pcWin";
        }
        else if (pcInput() === "2"){
            console.log("You win! Congrats!");
            return "userWin";
        }
        else if (pcInput() === "3"){
            console.log("Its a tie!");
            return;
        }
    } 
}

function pointCounter() {
    let pcPoints = 0;
    let userPoints = 0;
    if (gameLogic() === "userWin"){
        userPoints = userPoints + 1;
    }
    else if (gameLogic() === "pcWin") {
        pcPoints = pcPoints + 1;
    }
}
        
function game(){
    setup();
    userInput();
    pcInput(); 
    gameLogic();
    pointCounter();
}
        
game();
console.log(gameLogic());
//console.log(pcInput());