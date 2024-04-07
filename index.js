#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    "USD": 1,
    "INR": 83.29,
    "EUR": 0.92,
    "CNY": 7.23,
    "KWD": 0.31,
    "PKR": 280, //PAK PUPEES
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "INR", "EUR", "CNY", "KWD", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "INR", "EUR", "CNY", "KWD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount",
    },
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
// conversion formula
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
