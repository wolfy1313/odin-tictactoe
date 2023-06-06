
//create three options: rock, paper and scissors

// have this function randomly select one each time it is called
// then return the selected option
// const playerSelection = prompt("Choose paper, rock or scissors"); (this was for single round game)

const choices = ["Rock", "Paper", "Scissors"]

const getComputerChoice = choices => choices[Math.floor(Math.random()*choices.length)]

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

const restartGame = () => {
  winCount = 0;
  lossCount = 0;
  tieCount = 0;
}

const playerChoiceDisplay = document.querySelector('#playerChoice')
const computerChoiceDisplay = document.querySelector('#computerChoice')
const winsDisplay = document.querySelector('#playerWins')
const lossesDisplay = document.querySelector('#computerWins')
const tieDisplay  = document.querySelector('#ties')
const winnnerDisplay = document.querySelector('#winner')

const buttons = document.querySelectorAll('button')
const resetButton = document.querySelector('#restart')


let playRound = (playerSelection, computerSelection) => {
  
  if(!playerSelection){
    return "fine don't play then"
  }
  if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
    tieCount++
    return "TIE"
  }
  switch(playerSelection.toLowerCase()){
    case 'rock':
      
      if (computerSelection === 'Paper'){
        lossCount++
        return "LOSE"
      }
      else if (computerSelection === 'Scissors'){
        winCount++
        return "WIN"
      }
      break;
      case 'paper':
        if (computerSelection === 'Scissors'){
          lossCount++
          return "LOSE"
        }
        else if (computerSelection === 'Rock'){
          winCount++
          return "WIN"
        }
        break;
        case 'scissors':
          if (computerSelection === 'Rock'){
            lossCount++
            return "LOSE"
          }
          else if (computerSelection === 'Paper'){
            winCount++
            return "WIN"
          }
          break;
          default:
            return "that is not a valid selection."
          }
        }
        // do{
        buttons.forEach((button) => {
          button.addEventListener('click', () => {
            // do{
              //get player selection via click
              if(button.id === 'rock'){
                playerSelection = 'Rock'
              } else if(button.id === 'paper'){
                playerSelection = 'Paper'
              } else if(button.id === 'scissors'){
                playerSelection = 'Scissors'
              }
              winnnerDisplay.textContent = ""
              //get computerSelection each time a new button is clicked
              computerSelection = getComputerChoice(choices)
              //play round with current selections
              playRound(playerSelection, computerSelection);
              //display choices and game tally
              // } 
              // while (winCount<5 && lossCount <5)
              playerChoiceDisplay.textContent = `Player Choice: ${playerSelection}`
              computerChoiceDisplay.textContent = `Computer Choice: ${computerSelection}`
              winsDisplay.textContent = `Player Wins: ${winCount}`
              lossesDisplay.textContent = `Computer Wins: ${lossCount}`
              tieDisplay.textContent = `TIES: ${tieCount}`

              if (winCount === 5){
                winnnerDisplay.textContent = "PLAYER WINS OMG -- Make Selection to play another round"
                winnnerDisplay.style.color = 'blue'
                restartGame()
              }
              
              if (lossCount === 5) {
                winnnerDisplay.textContent = "Computer Overlords Win CHEATING -- Make Selection to play another round";
                winnnerDisplay.style.color = 'black'
                winnnerDisplay.style.backgroundColor = 'red'
                restartGame()
              }
            })
          })

          //previous iteration of game below//

        // }
          // while(winCount <5 || lossCount <5)
          // function game() {
            //   // do {
        //     // let playerSelection
        //     //  = prompt("Paper, Rock or Scissors?")
        //     // console.log(playRound(playerSelection, getComputerChoice(choices)))
        //     console.log(`Wins: ${winCount}, Losses: ${lossCount}, Ties: ${tieCount}`)
        //     // }
        //     // while(winCount < 3 && lossCount < 3)
            
        //     // if (winCount >= 3){
        //       //   console.log("PLAYER WINS")
        //       // } else if (lossCount >= 3 ){
        //         //   console.log("PLAYER LOSES")
        //         // }
                
        //       }
              
              // game()
              