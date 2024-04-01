#!/usr/bin/env node
import inquirer from "inquirer";
let myBlance = 10000; //dollar
let myPin = 1234;
let pinAns = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: `number`,
});
if (pinAns.pin === myPin) {
    console.log("your pin is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select opyion",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    if (operationAns.operation == "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBlance) {
            let balance = myBlance - amountAns.amount;
            console.log(`The remaining balance is ${balance}`);
        }
        else {
            console.log(`you have insufficient balance`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "2000", "5000", "15000"],
            },
        ]);
        if (fastCashAns.amount <= myBlance) {
            let balance2 = myBlance - fastCashAns.amount;
            console.log(`the remaining balance is ${balance2}`);
        }
        else {
            console.log(`you have insufficient amount`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(myBlance);
    }
}
else {
    console.log("your pin is incorrect");
}
