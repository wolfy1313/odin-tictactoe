
//create three options: rock, paper and scissors
// have this function randomly select one each time it is called
// then return the selected option
// console.log(getComputerChoice(choices))
const choices = ["rock", "paper", "scissors"]
const getComputerChoice = choices => choices[Math.floor(Math.random()*choices.length)]
const computerSelection = getComputerChoice(choices)
const playerSelection = prompt("Choose paper, rock or scissors");

function winIncrement() {
  let winCount = 0;
  function newWinCount(){
    console.log(winCount)
    winCount++
  }
  return newWinCount
}

function lossIncrement() {
  let lossCount = 0;
  function newLossCount(){
    console.log(lossCount)
    lossCount++
  }
  return newLossCount
}

function tieIncrement(){
  let tieCount
  function newTieCount(){
    console.log(tieCount)
    tieCount+=1
  }
  return newTieCount
}
let playRound = (playerSelection, computerSelection) => {
  if(!playerSelection){
    return "fine don't play then"
  }
  switch(playerSelection.toLowerCase()){
    case 'rock':
      if (computerSelection === 'rock') {
        console.log(tieIncrement())
        return "TIE"
      }
      else if (computerSelection === 'paper'){
        lossIncrement()
        return "LOSE"
      }
      else if (computerSelection === 'scissors'){
        winIncrement()
        return "WIN"
      }
      break;
    case 'paper':
      if (computerSelection === 'paper') {
        console.log(tieIncrement())
        return "TIE"
      }
      else if (computerSelection === 'scissors'){
        lossIncrement()
        return "LOSE"
      }
      else if (computerSelection === 'rock'){
        winCount++
        return "WIN"
      }
      break;
    case 'scissors':
      if (computerSelection === 'scissors') {
        console.log(tieIncrement())
        return "TIE"
      }
      else if (computerSelection === 'rock'){
        lossIncrement()
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
// const getPlayerChoice = prompt("Choose paper, rock or scissors")

function game() {
  console.log(playRound(playerSelection, getComputerChoice(choices)));
  console.log(playRound(playerSelection, getComputerChoice(choices)));
  console.log(playRound(playerSelection, getComputerChoice(choices)));
  console.log(playRound(playerSelection, getComputerChoice(choices)));
  console.log(playRound(playerSelection, getComputerChoice(choices)));
  
}

game()

// console.log(playRound(playerSelection, getComputerChoice(choices)))

// let playerSelection = () => {

// }
