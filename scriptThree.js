// 1 = rock
// 2 = paper
// 3 = scissors


const pcInput = function getComputerChoice(min,max) {
    // Generates a number 1, 2 or 3.
    min = Math.ceil(1)
    max = Math.floor(3)
    return Math.floor(Math.random() * (max - min +1) + min)
}