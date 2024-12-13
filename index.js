// As per the odin project instructions, the game can be played entirely via console.
// The idea is to plan psedocode or make the problem into sub problems. Understand what the odin project is trying to tell.

// Let's create a new function: getComputerChoice
// Variables at play: computer randomly selects "rock", "paper" or "scissors"
// Math.random() selects random number between 0 and 1, how to use it. Let's start with creating a function:

function getComputerChoice(){
   let choiceVar= Math.floor(Math.random()*3)  //defining/creating a choice variable that randomly generates number between 0-2 using Math.random()
   if(choiceVar===0){
    return "Rock"
   }
   else if(choiceVar===1){
    return "Paper"
   }

   else{
    return "Scissors"
   }

}


// Now let's write the logic for humanchoice by creating a function; getHumanChoice;

function getHumanChoice(){
    let userInput = prompt("Rock, Paper or Scissors.\nYou have five rounds to win\nLet's go, press Ok")
    userInput= userInput.charAt(0).toUpperCase()+userInput.slice(1).toLowerCase(); //since we have used the first letter uppercase for the Rock, Paper  or Scissor below, we can use this statement for the humanChoice to be case-insensitive.

    if (userInput=="" || userInput == null){
        alert("It's rude not to play this game :( ") //to handle other user clicks
    }
  
    return userInput
}


// Define variables such as humanChoice and computerChoice

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

// create new variables humanScore and computeScore in the global scope

let humanScore = 0;
let computerScore = 0;

// Function to handle score

function updateScore(){
    alert(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`)
}

// Write a logic to play a single round
// create a function named playRound

function playRound(humanChoice, computerChoice)
{
    if (humanChoice=="Rock"&&computerChoice=="Scissors")
     {
         alert(`You win! ${humanChoice} beats ${computerChoice}`)
         humanScore++
         updateScore()
 
     }
     else if (humanChoice=="Rock" && computerChoice=="Paper"){
         alert(`You lose! ${computerChoice} beats ${humanChoice}`)
         computerScore++;
         updateScore()
     }
     else if (humanChoice=="Paper" && computerChoice=="Scissors"){
         alert(`You lose! ${computerChoice} beats ${humanChoice}`)
         computerScore++;
         updateScore()
     }
     else if (humanChoice=="Scissors" && computerChoice=="Paper"){
         alert(`You win! ${humanChoice} beats ${computerChoice}`)
         humanScore++
         updateScore()
     }
     else if (humanChoice=="Paper" && computerChoice=="Rock"){
         alert(`You win! ${humanChoice} beats ${computerChoice}`)
         humanScore++
         updateScore()

     }
     else if (humanChoice=="Scissors" && computerChoice=="Rock"){
         alert(`You lose! ${computerChoice} beats ${humanChoice}`)
         computerScore++;
         updateScore()

     }
     
     else
     {
         alert(`${humanChoice} vs ${computerChoice} is a draw`);
         updateScore()
     }
    }

// Create a function playGame and call 5 times playRound

function playGame(){
    for(i=0; i<5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if(humanScore>computerScore){
        alert("You won! Congrats")
    }

    else if(humanScore<computerScore){
        alert("You lost! Play Again")
    }

    else {
        alert("The game is a tie! Play Again")
    }
}


playGame()







