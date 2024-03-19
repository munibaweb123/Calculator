#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([{
        message: "enter first number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "enter second number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "select operator",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division", "power", "modulus"]
    }]);
// if(answer.operator==="addition"){
//     console.log(chalk.blueBright(answer.firstNumber+answer.secondNumber))
// }
// else if(answer.operator==="subtraction"){
//     console.log(chalk.greenBright(answer.firstNumber-answer.secondNumber))
// }
// else if(answer.operator==="multiplication"){
// console.log(chalk.yellowBright(answer.firstNumber*answer.secondNumber))
// }
// else if(answer.operator==="division"){
//     console.log(chalk.white(answer.firstNumber/answer.secondNumber))
// }else{
//     console.log("please select operator!")
// }
// let No1=await inquirer.prompt([{
//     name:"number1",
//     type:"number",
//     message:"Enter first number:"
// }])
// let No2=await inquirer.prompt([{
//     name:"number2",
//     type:"number",
//     message:"Enter second number:"
// }])
// let operator=await inquirer.prompt([{
//     name:"operatotion",
//     type:"string",
//     message:"select operator (+,-,*,/,**,%):"
// }])
switch (answer.operator) {
    case "addition":
        console.log(chalk.bgGreenBright(`Addition of your numbers i.e: ${answer.firstNumber} + ${answer.secondNumber} is: ${answer.firstNumber + answer.secondNumber}`));
        break;
    case "subtraction":
        console.log(chalk.bgYellow(`Subtraction of your numbers i.e: ${answer.firstNumber} - ${answer.secondNumber} is: ${answer.firstNumber - answer.secondNumber}`));
        break;
    case "multiplication":
        console.log(chalk.bgCyanBright(`Multiplicaition of your numbers i.e: ${answer.firstNumber} * ${answer.secondNumber} is: ${answer.firstNumber * answer.secondNumber}`));
        break;
    case "division":
        console.log(chalk.bgMagenta(`Division of your numbers i.e: ${answer.firstNumber} / ${answer.secondNumber} is: ${answer.firstNumber / answer.secondNumber}`));
        break;
    case "power":
        console.log(chalk.bgGrey(`Power of your numbers i.e: ${answer.firstNumber} ^ ${answer.secondNumber} is: ${answer.firstNumber ** answer.secondNumber}`));
        break;
    case "modulus":
        console.log(chalk.bgRed(`Modulus of your numbers i.e: ${answer.firstNumber} % ${answer.secondNumber} is: ${answer.firstNumber % answer.secondNumber}`));
        break;
    default:
        console.log("select right operator!");
}
