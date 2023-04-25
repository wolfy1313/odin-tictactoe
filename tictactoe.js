
//create three options: rock, paper and scissors
// have this function randomly select one each time it is called
// then return the selected option
// console.log(getComputerChoice(choices))
const choices = ["rock", "paper", "scissors"]
const getComputerChoice = choices => choices[Math.floor(Math.random()*choices.length)]
const computerSelection = getComputerChoice(choices)
// const playerSelection = prompt("Choose paper, rock or scissors"); (this was for single round game)

let playRound = (playerSelection, computerSelection) => {
  if(!playerSelection){
    return "fine don't play then"
  }
  switch(playerSelection.toLowerCase()){
    case 'rock':
      if (computerSelection === 'rock') {
        tieCount++
        return "TIE"
      }
      else if (computerSelection === 'paper'){
        lossCount++
        return "LOSE"
      }
      else if (computerSelection === 'scissors'){
        winCount++
        return "WIN"
      }
      break;
    case 'paper':
      if (computerSelection === 'paper') {
        tieCount++
        return "TIE"
      }
      else if (computerSelection === 'scissors'){
        lossCount++
        return "LOSE"
      }
      else if (computerSelection === 'rock'){
        winCount++
        return "WIN"
      }
      break;
    case 'scissors':
      if (computerSelection === 'scissors') {
        tieCount++
        return "TIE"
      }
      else if (computerSelection === 'rock'){
        lossCount++
        return "LOSE"
      }
      else if (computerSelection === 'paper'){
        winCount++
        return "WIN"
      }
      break;
    default:
      return "that is not a valid selection."
  }
}
let winCount = 0;
let lossCount = 0;
let tieCount = 0;
function game() {
  do {
    let playerSelection = prompt("Paper, Rock or Scissors?")
    console.log(playRound(playerSelection, getComputerChoice(choices)))
    console.log(`Wins: ${winCount}, Losses: ${lossCount}, Ties: ${tieCount}`)
  }
  while(winCount < 3 && lossCount < 3)
  
  if (winCount >= 3){
    console.log("PLAYER WINS")
  } else if (lossCount >= 3 ){
    console.log("PLAYER LOSES")
  }
  
}

game()
