#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";
//import chalk from "chalk";

const answer=await inquirer.prompt([{
message:"enter your first number",
type:"number",
name:"firstNumber"
},
{
    message:"enter your second number",
    type:"number",
    name:"secondNumber"  
},
{
    message:"select operator",
type:"list",
name:"operator",
choices:["addition","subtraction","multiplication","division","power","modulus"]
}])
if(answer.operator==="addition"){
    console.log(`Addition of your numbers i.e: ${answer.firstNumber} + ${answer.secondNumber} is: ${answer.firstNumber+answer.secondNumber}`);
}
else if(answer.operator==="subtraction"){
    console.log(`Subtraction of your numbers i.e: ${answer.firstNumber} - ${answer.secondNumber} is: ${answer.firstNumber-answer.secondNumber}`);
}
else if(answer.operator==="multiplication"){
    console.log(`Multiplicaition of your numbers i.e: ${answer.firstNumber} * ${answer.secondNumber} is: ${answer.firstNumber*answer.secondNumber}`);
}
else if(answer.operator==="division"){
    console.log(`Division of your numbers i.e: ${answer.firstNumber} / ${answer.secondNumber} is: ${answer.firstNumber/answer.secondNumber}`); 
}
else if(answer.operator==="power"){
    console.log(`Power of your numbers i.e: ${answer.firstNumber} ^ ${answer.secondNumber} is: ${answer.firstNumber**answer.secondNumber}`);
}
else if(answer.operator==="modulus"){
    console.log(`Modulus of your numbers i.e: ${answer.firstNumber} % ${answer.secondNumber} is: ${answer.firstNumber%answer.secondNumber}`);
}
else{
    console.log("please select operator!")
}


// switch(answer.operator){
// case "addition":
// console.log(chalk.bgGreenBright(`Addition of your numbers i.e: ${answer.firstNumber} + ${answer.secondNumber} is: ${answer.firstNumber+answer.secondNumber}`));
// break;
// case "subtraction":
// console.log(chalk.bgYellow(`Subtraction of your numbers i.e: ${answer.firstNumber} - ${answer.secondNumber} is: ${answer.firstNumber-answer.secondNumber}`));
// break;
//  case "multiplication":
//  console.log(chalk.bgCyanBright(`Multiplicaition of your numbers i.e: ${answer.firstNumber} * ${answer.secondNumber} is: ${answer.firstNumber*answer.secondNumber}`));
// break;
// case "division":
// console.log(chalk.bgMagenta(`Division of your numbers i.e: ${answer.firstNumber} / ${answer.secondNumber} is: ${answer.firstNumber/answer.secondNumber}`));  
// break;   
// case "power":
// console.log(chalk.bgGrey(`Power of your numbers i.e: ${answer.firstNumber} ^ ${answer.secondNumber} is: ${answer.firstNumber**answer.secondNumber}`));
// break;
// case "modulus":
// console.log(chalk.bgRed(`Modulus of your numbers i.e: ${answer.firstNumber} % ${answer.secondNumber} is: ${answer.firstNumber%answer.secondNumber}`));
// break; 
// default:
// console.log("select right operator!");
// }
