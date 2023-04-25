
//create three options: rock, paper and scissors
// have this function randomly select one each time it is called
// then return the selected option
const choices = ["rock", "paper", "scissors"]
let getComputerChoice = choices => choices[Math.floor(Math.random()*choices.length)]
// console.log(getComputerChoice(choices))

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "rock"){
    return "It's a tie!"
  } else if (playerSelection === "rock" && computerSelection === "scissors"){
    return "Computer selected scissors, you WIN!"
  } else {
    return "Computer selected paper, you LOSE!"
  }
}

const playerSelection = "rock"
const computerSelection = getComputerChoice(choices)
console.log(playRound("rock", getComputerChoice(choices)))

// let playerSelection = () => {

// }
