// As per the odin project instructions, the game can be played entirely via console.
// The idea is to plan psedocode or make the problem into sub problems. Understand what the odin project is trying to tell.

// ........................................................................................................................

// Let's create a new function: getComputerChoice
// Variables at play: computer randomly selects "rock", "paper" or "scissors"
// Math.random() selects random number between 0 and 1, how to use it. Let's start with creating a function:

function getComputerChoice(){
   let choiceVar= Math.floor(Math.random()*3)  //defining/creating a choice variable that randomly generates number between 0-2 using Math.random()
   if(choiceVar===0){
    return "rock"
   }
   else if(choiceVar===1){
    return "scissors"
   }

   else{
    return "paper"
   }

}

console.log(getComputerChoice())
