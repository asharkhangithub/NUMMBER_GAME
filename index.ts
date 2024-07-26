#! /usr/bin/env node

import inquirer from "inquirer";
// 1) computer will genrate arandom number
// 2) user input for guessing number
// 3) compare the both number and give result


const randomnumber =Math.floor(Math.random()*10 + 1)  ;
const answer =await inquirer.prompt([
    { name:"usergussednumber", type: "number",message:"please guess anumber between 1 to 10", },
]);

if(answer.usergussednumber === randomnumber){
    console.log("congratulation! you guessed right number")
}else if(answer.usergussednumber != randomnumber){
    console.log("sorry!you guess wrong number")
}else{
    console.log('invalid text')
}