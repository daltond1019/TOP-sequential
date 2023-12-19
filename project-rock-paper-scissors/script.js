//Greet the user

console.log('Hello. Would you like to play a game?');

/*Instruct the user on protocol. You can enter rock, paper, or scissors as plain text.
Make it case insensitive.*/

/*After you prompt for input but before receiving it generate but don't print rock,
paper, or scissors. Probably with a random number generator and some loops. If the
number is 0-0.3 its rock if its 0.34-0.66 its paper, if its 0.67-1 its scissors. 
Store the result.*/

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

/*Take the input from the user (as a prompt?) and compare it to the returned 
random result. Probably need to do nested if statements for each input from the 
user and each result or vice versa. There should be a more elegant way to do it. 
I can't think of one now.*/

/*print the results.*/