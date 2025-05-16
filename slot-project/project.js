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

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT ={
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES ={
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}




//Function Definitions
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

const getBet = (balance, lines) =>{
    while(true){
    const bet = prompt("Enter the bet per line: "); //need to convert to a int since it auto returns string also we need to subtract
    const numberBet = parseFloat(bet); //paseFloat changes string to a float

        // if Not a Number 
    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines){
            console.log("Invalid bet, try again");
    } else{
        return numberBet;
         }
    }   
};

const spin =() =>{
    const symbols = []; //can manipulate the element not the reference
    for (const [symbol,count] of Object.entries(SYMBOLS_COUNT)){ 
        for (let i = 0; i < count; i++) {
            symbol.push(symbol);
        }
        }
        console.log(symbols);
};

spin();
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines);