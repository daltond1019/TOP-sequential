//Greet the user

console.log('Hello. Would you like to play a game?');

/*Instruct the user on protocol. You can enter rock, paper, or scissors as plain text.
Make it case insensitive.*/

/*After you prompt for input but before receiving it generate but don't print rock,
paper, or scissors. Probably with a random number generator and some loops. If the
number is 0-0.3 its rock if its 0.34-0.66 its paper, if its 0.67-1 its scissors. 
Store the result.*/

//Generate an output or 'choice' for the computer.'
function getComputerChoice(){
    let choiceInt = Math.floor((Math.random() * 9) + 1);
        if (choiceInt <= 3){
            return 'rock';
        } else if (choiceInt > 3 && choiceInt <= 6) {
            return 'paper';
        } else if (choiceInt > 6 && choiceInt <= 9) {
            return 'scissors';
        } else{
            return 'THIS IS AN ERROR! How did you get here?'
        };
}

//Compares the player input and the computer output and determines the outcome of the game
//Still need to rerun the game in the case of a tie
function playRound(player, computer){
    if (player == 'rock'){
        if (computer == 'rock'){
            return 'tie';
        } else if (computer == 'paper'){
            return 'lose';
        } else if (computer == 'scissors'){
            return 'win';
        } else{
            console.log('error in the playRound function player rock choice.')
        }
    } else if (player == 'paper'){
        if (computer == 'rock'){
            return 'win';
        } else if (computer == 'paper'){
            return 'tie';
        } else if (computer == 'scissors'){
            return 'lose';
        } else{
            console.log('error in the playRound function player paper choice.')
        } 
    }else if (player == 'scissors'){
        if (computer == 'rock'){
            return 'lose';
        } else if (computer == 'paper'){
            return 'win';
        } else if (computer == 'scissors'){
            return 'tie';
        } else{
            console.log('error in the playRound function player scissors choice.')
        } 
    }else {
        console.log('error in the playRound function generally.');
    }
}
/*Take the input from the user (as a prompt?) and compare it to the returned 
random result. Probably need to do nested if statements for each input from the 
user and each result or vice versa. There should be a more elegant way to do it. 
I can't think of one now.*/

/*Breaking this doesn we need to first get an input from the user*/

/* Second set the function above to a value */

/* Third run both of those through a funciton*/

// TEST input. Will need to change this later.


function game(){
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();

    console.log('The computer chose ' + computerSelection + ' and you chose ' + playerSelection + ' so you: ' + (playRound(playerSelection, computerSelection)));
}

/*print the results.*/