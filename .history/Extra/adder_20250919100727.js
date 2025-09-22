import inquirer from 'inquirer';
var sum = [
    {type:'input', name:'num1', message:'operands are '},
    {type:'input', name:'num2', message:''}
]
inquirer.prompt(sum).then(answers => {
    let result = parseFloat(answers.num1) + parseFloat(answers.num2);
    console.log(`answers.num1 + answers.num2 = ${result}`);
});