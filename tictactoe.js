
const choices = ["rock", "paper", "scissors"]
let getComputerChoice = (choices) => {
  return choices[Math.floor(Math.random()*choices.length)]
}
console.log(getComputerChoice(choices))
//create three options: rock, paper and scissors
// have this function randomly select one each time it is called
// then return the selected option