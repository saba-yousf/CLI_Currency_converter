import inquirer from "inquirer";
const Currency = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number"
    },
]);
let userfromCurrency = user_answer.from;
let usertoCurrency = user_answer.to;
let fromAmount = Currency[user_answer.from]; // exchange rate
let toAmount = Currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // base currancy is USD $
let converteAmount = baseAmount * toAmount;
console.log(converteAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
