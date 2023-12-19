//Greet the user
console.log('Hello. Would you like to play a game? Type "game();" to begin.');

//Generate a random output or 'choice' for the computer.'
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

//Compares the player input and the computer output and determines the outcome of the game. Called in the game() function.
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
    } else if (player == 'scissors'){
        if (computer == 'rock'){
            return 'lose';
        } else if (computer == 'paper'){
            return 'win';
        } else if (computer == 'scissors'){
            return 'tie';
        } else{
            console.log('error in the playRound function player scissors choice.')
        } 
    } else {
        console.log('error in the playRound function generally.');
    }
}

//Prompt the user for an input and convert it to lower case to make it case insensitive.
function getPlayerChoice(){
    let playerPrompt = prompt('Would you like rock, paper, or scissors?', 'Type your choice here.');
    if (typeof playerPrompt === 'string') {
        playerPrompt = playerPrompt.toLowerCase();
        return playerPrompt;
    } else {
        console.log('error. Please check your spelling and try again.')
    }
}


//TEST CODE
function game(){
    let wins = 0;
    let losses = 0;
    let ties = 0;
    while(wins < 5 && losses < 5){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        //Prints the results.
        console.log('The computer chose ' + computerSelection + ' and you chose ' + playerSelection + ' so you: ' + (playRound(playerSelection, computerSelection)));
        //Increments the win, loss, and tie counters.
        if (result == 'win'){
            wins++;
            console.log('Congratulations! The win loss total is now WINS: ' + wins + ' LOSSES: ' + losses + ' TIES: ' + ties);
        } else if (result == 'lose'){
            losses++;
            console.log('Unfortunate. The win loss total is now WINS: ' + wins + ' LOSSES: ' + losses + ' TIES: ' + ties);
        } else if (result == 'tie'){
            ties++;
            console.log('How boring. The win loss total is now WINS: ' + wins + ' LOSSES: ' + losses + ' TIES: ' + ties); 
        } else{
            console.log('error. problem in the win loss tie output if statement.')
        }
    }
    //Outputs when the game is over.
    if (wins < 5){
        console.log('You lose. Sorry. If you would like to try again type "game();" into the console.');
    } else if (losses < 5){
        console.log('You win! YAY! If you would like to try again type "game();" into the console.');
    }
}
