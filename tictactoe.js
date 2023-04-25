
//create three options: rock, paper and scissors
// have this function randomly select one each time it is called
// then return the selected option
// console.log(getComputerChoice(choices))
const choices = ["rock", "paper", "scissors"]
const getComputerChoice = choices => choices[Math.floor(Math.random()*choices.length)]

let playRound = (playerSelection, computerSelection) => {
  switch(playerSelection.toLowerCase()){
    case 'rock':
      if (computerSelection === 'rock') {
        return "it is a tie"
      }
      else if (computerSelection === 'paper'){
        return "you lose computer picked paper"
      }
      else if (computerSelection === 'scissors'){
        return "you win computer selected scissor"
      }
      break;
    case 'paper':
      if (computerSelection === 'paper') {
        return "it is a tie"
      }
      else if (computerSelection === 'scissors'){
        return "you lose computer picked scissors"
      }
      else if (computerSelection === 'rock'){
        return "you win computer selected rock"
      }
      break;
    case 'scissors':
      if (computerSelection === 'scissors') {
        return "it is a tie"
      }
      else if (computerSelection === 'rock'){
        return "you lose computer picked rock"
      }
      else if (computerSelection === 'paper'){
        return "you win computer selected paper"
      }
      break;
    default:
      return "that is not a valid selection"
  }
}
// const getPlayerChoice = prompt("Choose paper, rock or scissors")

const playerSelection = prompt("Choose paper, rock or scissors");
const computerSelection = getComputerChoice(choices)
console.log(playRound(playerSelection, getComputerChoice(choices)))

// let playerSelection = () => {

// }
