// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect user bet amount
// 4. Spin the slot machine
// 5. Check if user one
// 6. Give the user their winnings
// 7. Play Again

// function deposit(){
//     return 1;
// }

const prompt = require("prompt-sync")(); //package that allows us to get user input

const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter a deposit amount: "); //need to convert to a int since it auto returns string also we need to subtract
        const numberDepositAmount = parseFloat(depositAmount); //paseFloat changes string to a float

        // if Not a Number 
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again");
        } else{
            return numberDepositAmount;
        } 
    }
};

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1-3): "); //need to convert to a int since it auto returns string also we need to subtract
        const numberOfLines = parseFloat(lines); //paseFloat changes string to a float

        // if Not a Number 
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again");
        } else{
            return numberOfLines;
        } 
    }
};

const getBet = (balance) =>{
    const bet = prompt("Enter the total bet: "); //need to convert to a int since it auto returns string also we need to subtract
    const numberBet = parseFloat(bet); //paseFloat changes string to a float

        // if Not a Number 
    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance){
            console.log("Invalid bet, try again");
    } else{
        return numberBet;
         }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);
console.log(DepositAmount);