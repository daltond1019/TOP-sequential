function add7(num){
    return result = num + 7;
}

function multiply(a,b){
    return result = a * b;
}

function capitalize(x){
    let phrase = x;
    let firstLetter = phrase.slice(0,1);
    let phraseRemainder = phrase.slice(1);
    let upercaseFirstLetter = firstLetter.toUpperCase();
    return (upercaseFirstLetter + phraseRemainder);
}

function lastLetter(input){
    return input.substr(-1,1);
}