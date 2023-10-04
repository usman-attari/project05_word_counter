import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        massage: "Enter your sentence to count the word: "
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(`Your sentence word coint is ${words.length}`);
