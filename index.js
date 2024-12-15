// As per the odin project instructions, the game can be played entirely via console.
// The idea is to plan psedocode or make the problem into sub problems. Understand what the odin project is trying to tell.

// Let's create a new function: getComputerChoice
// Variables at play: computer randomly selects "rock", "paper" or "scissors"
// Math.random() selects random number between 0 and 1, how to use it. Let's start with creating a function:

function getComputerChoice(){
   let computerChoice= Math.floor(Math.random()*3 +1)  //defining/creating a choice variable that randomly generates number between 0-2 using Math.random()
   if(computerChoice===1){
    computerChoice= "rock"
   }
   else if(computerChoice===2){
    computerChoice= "paper"
   }
   else{
    computerChoice= "scissors"
   }
   return computerChoice;

}


// Now let's write the logic for humanchoice by creating a function; getHumanChoice;

function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper or Scissors.\nYou have five rounds to win\nLet's go")
    if (humanChoice === null || humanChoice === "") {
        alert("You didnt enter anything!");
        return getHumanChoice();
    } 
    // "rock".equals(humanChoice.toLowerCase().trim())
    else if(!((humanChoice.toLowerCase().trim().equals("rock"))||(humanChoice.toLowerCase().trim().equals("paper")) ||(humanChoice.toLowerCase().trim().equals("scissors")))) //conditon to check spelling
    {
        alert("Check your spelling and Enter Rock, Paper or Scissors")
        return getHumanChoice()
    }
    else {
    humanChoice = humanChoice.toLowerCase().trim();
    }
    return humanChoice;
}

// create new variables humanScore and computeScore in the global scope

let humanScore = 0;
let computerScore = 0;
let totalRounds = 5;

// Function to handle score

function updateScore(){
    alert(`Your Score: ${humanScore}\nComputer Score: ${computerScore}\n`)

}

// Write a logic to play a single round
// create a function named playRound

function playRound(humanChoice, computerChoice)
{
    if (humanChoice=="rock"&&computerChoice=="scissors")
     {
         alert(`You win! ${humanChoice} beats ${computerChoice}`)
         humanScore++
         updateScore()
 
     }
     else if (humanChoice==="rock" && computerChoice==="paper"){
         alert(`You lose! ${computerChoice} beats ${humanChoice}`)
         computerScore++;
         updateScore()
     }
     else if (humanChoice==="paper" && computerChoice==="scissors"){
         alert(`You lose! ${computerChoice} beats ${humanChoice}`)
         computerScore++;
         updateScore()
     }
     else if (humanChoice==="scissors" && computerChoice==="paper"){
         alert(`You win! ${humanChoice} beats ${computerChoice}`)
         humanScore++
         updateScore()
     }
     else if (humanChoice==="paper" && computerChoice==="rock"){
         alert(`You win! ${humanChoice} beats ${computerChoice}`)
         humanScore++
         updateScore()

     }
     else if (humanChoice==="scissors" && computerChoice==="rock"){
         alert(`You lose! ${computerChoice} beats ${humanChoice}`)
         computerScore++;
         updateScore()

     }
     
     else if (humanChoice===computerChoice)
     {
         alert(`${humanChoice} vs ${computerChoice} is a draw`);
         updateScore()
     }
     else{
        return playRound()
     }
    }

// Create a function named playGame

function playGame(){
    for(i=0; i<5; i++)
        playRound(getHumanChoice(), getComputerChoice())


    if(humanScore>computerScore){
        alert("You won! Congrats")
    }

    else if(humanScore<computerScore){
        alert("You lost! Play Again")
    }

    else if (humanScore===computerScore) {
        alert("The game is a tie! Play Again")
    }
}

playGame()

// Code functions fully.
// Other features will be checked on a late date including UI.





