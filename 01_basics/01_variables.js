// For constant declaration
const accountID=123456;

// For let declaration
let accountEmail="binod@gmail.com";

// For var declartion
var accountPassword="123456789";

//Without declartion
accountCity="Kathmandu";

//Declaring the state of variable
let accountState;

// Trying to change constant value
// accountID=654321;
// console.log(accountID); //Not allowed
console.log(accountID);

//Tring to change 'let' and 'var' value
accountEmail="lewis@gmail.com";
accountPassword="9872616";
accountCity="Pokhara";


/*
 Prefer not to use var because of issue in block scope and function scope
*/

console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);

